/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        agri: {
          // Exact colors derived from the official Mātra logo & packaging
          dark: '#0d2414',       // Deepest organic green
          forest: '#163e21',     // Logo green ("Mātra")
          primary: '#1b4528',    // Core brand green
          secondary: '#285836',  // Medium rich leafy green
          leaf: '#3b784e',       // Fresh green accent
          sage: '#8fa889',       // Green Elaichi pouch sage
          mint: '#9bb08f',       // Soft muted herb
          pale: '#e7efe5',       // Gentle sage-tinted pale
          cream: '#f8f6f0',      // Makhana pouch natural ivory
          light: '#f2f0e8',      // Soft linen off-white
          gold: '#c49b4c',       // Logo gold ("A CALMER WAY OF LIVING" & macron)
          amber: '#bb9a53',      // Warm golden ochre
          wood: '#5c4524',       // Earthy warm walnut
          earth: '#26221c',      // Dark natural charcoal
          footer: '#091c10',     // Deepest footer green
        },
      },
      fontFamily: {
        heading: ["'Comic Sans MS'", "'Comic Sans'", "'Comic Neue'", 'cursive', 'sans-serif'],
        sans: ["'Comic Sans MS'", "'Comic Sans'", "'Comic Neue'", 'cursive', 'sans-serif'],
        logo: ["'Comic Sans MS'", "'Comic Sans'", "'Comic Neue'", 'cursive', 'sans-serif'],
      },
      boxShadow: {
        'agri': '0 10px 30px -5px rgba(22, 62, 33, 0.12)',
        'agri-hover': '0 20px 45px -10px rgba(22, 62, 33, 0.25)',
        'agri-gold': '0 10px 30px -5px rgba(196, 155, 76, 0.35)',
        'glow-primary': '0 0 25px rgba(59, 120, 78, 0.4)',
        'glow-gold': '0 0 30px rgba(196, 155, 76, 0.45)',
      },
      animation: {
        'float-slow': 'float 5s ease-in-out infinite',
        'float-reverse': 'floatReverse 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSlow 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'leaf-sway': 'leafSway 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'kenburns': 'kenburns 8s ease-out infinite alternate',
        'slide-up-fade': 'slideUpFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(-1.5deg)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(0.98)' },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 15px rgba(196, 155, 76, 0.25)',
          },
          '50%': {
            boxShadow: '0 0 35px rgba(196, 155, 76, 0.55)',
          },
        },
        leafSway: {
          '0%, 100%': { transform: 'rotate(-3deg) translateY(0px)' },
          '50%': { transform: 'rotate(3deg) translateY(-6px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        kenburns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.07) translate(-1%, -1%)' },
        },
        slideUpFade: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
