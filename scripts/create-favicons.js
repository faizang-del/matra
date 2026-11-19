const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// 1. Pristine SVG with Mātra Brand Elements
// - Forest Green organic squircle base (#12331b -> #184323)
// - Warm Golden inner border ring (#c49b4c)
// - Golden Pill Macron representing the 'ā' in Mātra
// - Smooth Comfortaa-style rounded 'M' in warm organic linen (#fdfbf7)
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="matraBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#184323" />
      <stop offset="100%" stop-color="#0e2615" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e0bb64" />
      <stop offset="45%" stop-color="#c49b4c" />
      <stop offset="100%" stop-color="#9e762c" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="5" stdDeviation="6" flood-color="#000000" flood-opacity="0.38" />
    </filter>
  </defs>

  <!-- Squircle Base -->
  <rect width="512" height="512" rx="128" fill="url(#matraBg)" />

  <!-- Subtle Elegant Gold Border Ring -->
  <rect x="18" y="18" width="476" height="476" rx="112" fill="none" stroke="url(#goldGrad)" stroke-width="12" stroke-opacity="0.45" />

  <g filter="url(#shadow)">
    <!-- Signature Golden Macron Pill -->
    <rect x="176" y="92" width="160" height="38" rx="19" fill="url(#goldGrad)" />

    <!-- Rounded Brand 'M' in Crisp Pure Linen/Cream -->
    <path 
      d="M 124 396 L 124 216 C 124 196 138 186 152 198 L 256 296 L 360 198 C 374 186 388 196 388 216 L 388 396" 
      fill="none" 
      stroke="#fdfbf7" 
      stroke-width="54" 
      stroke-linecap="round" 
      stroke-linejoin="round" 
    />
  </g>
</svg>`;

function createIco(images) {
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  let offset = 6 + count * 16;
  const dirEntries = [];
  const dataBuffers = [];

  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(img.buffer.length, 8);
    entry.writeUInt32LE(offset, 12);

    dirEntries.push(entry);
    dataBuffers.push(img.buffer);
    offset += img.buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...dataBuffers]);
}

async function run() {
  const root = path.join(__dirname, '..');
  const pub = path.join(root, 'public');
  const app = path.join(root, 'app');

  // 1. Write SVGs
  const svgBuf = Buffer.from(svgContent, 'utf8');
  fs.writeFileSync(path.join(pub, 'favicon.svg'), svgBuf);
  fs.writeFileSync(path.join(app, 'icon.svg'), svgBuf);
  console.log('✓ Wrote favicon.svg and app/icon.svg');

  // 2. Render PNGs
  const sizes = [
    { size: 16, dest: path.join(pub, 'favicon-16x16.png') },
    { size: 32, dest: path.join(pub, 'favicon-32x32.png') },
    { size: 48, dest: path.join(pub, 'favicon-48x48.png') },
    { size: 180, dest: path.join(pub, 'apple-touch-icon.png') },
    { size: 180, dest: path.join(app, 'apple-icon.png') },
    { size: 192, dest: path.join(pub, 'android-chrome-192x192.png') },
    { size: 512, dest: path.join(pub, 'android-chrome-512x512.png') },
    { size: 512, dest: path.join(app, 'icon.png') },
  ];

  const pngBuffers = {};
  for (const item of sizes) {
    const buf = await sharp(svgBuf)
      .resize(item.size, item.size)
      .png()
      .toBuffer();
    fs.writeFileSync(item.dest, buf);
    pngBuffers[item.size] = buf;
    console.log(`✓ Generated ${path.relative(root, item.dest)} (${item.size}x${item.size})`);
  }

  // 3. Assemble Multi-Resolution ICO (16x16, 32x32, 48x48)
  const icoBuf = createIco([
    { width: 16, height: 16, buffer: pngBuffers[16] },
    { width: 32, height: 32, buffer: pngBuffers[32] },
    { width: 48, height: 48, buffer: pngBuffers[48] },
  ]);

  fs.writeFileSync(path.join(pub, 'favicon.ico'), icoBuf);
  fs.writeFileSync(path.join(app, 'favicon.ico'), icoBuf);
  console.log('✓ Generated public/favicon.ico and app/favicon.ico');

  // 4. Create Web App Manifest
  const manifest = {
    name: "Mātra - A Calmer Way of Living",
    short_name: "Mātra",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    theme_color: "#163e21",
    background_color: "#fdfbf7",
    display: "standalone"
  };
  fs.writeFileSync(path.join(pub, 'site.webmanifest'), JSON.stringify(manifest, null, 2));
  console.log('✓ Generated public/site.webmanifest');
}

run().catch(console.error);
