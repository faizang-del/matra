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
          dark: '#142a20',
          forest: '#1b4332',
          primary: '#2d6a4f',
          secondary: '#40916c',
          leaf: '#52b788',
          mint: '#74c69d',
          pale: '#d8f3dc',
          cream: '#fcfbf7',
          light: '#f4f7f4',
          gold: '#e9a124',
          amber: '#f4a261',
          wood: '#603813',
          earth: '#342a21',
          footer: '#0e1f17',
        },
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'serif', 'system-ui'],
        sans: ['var(--font-plus-jakarta)', 'sans-serif', 'system-ui'],
      },
      boxShadow: {
        'agri': '0 10px 30px -5px rgba(27, 67, 50, 0.12)',
        'agri-hover': '0 20px 45px -10px rgba(27, 67, 50, 0.28)',
        'agri-gold': '0 10px 30px -5px rgba(233, 161, 36, 0.35)',
        'glow-primary': '0 0 25px rgba(82, 183, 136, 0.4)',
        'glow-gold': '0 0 30px rgba(233, 161, 36, 0.5)',
      },
      animation: {
        'float-slow': 'float 5s ease-in-out infinite',
        'float-reverse': 'floatReverse 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSlow 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'spin-slow': 'spinSlow 24s linear infinite',
        'spin-reverse': 'spinReverse 28s linear infinite',
        'leaf-sway': 'leafSway 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'kenburns': 'kenburns 8s ease-out infinite alternate',
        'slide-up-fade': 'slideUpFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-2deg)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.88', transform: 'scale(0.98)' },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 15px rgba(233, 161, 36, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 35px rgba(233, 161, 36, 0.65)',
          },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        spinReverse: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        leafSway: {
          '0%, 100%': { transform: 'rotate(-4deg) translateY(0px)' },
          '50%': { transform: 'rotate(4deg) translateY(-8px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        kenburns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.08) translate(-1%, -1%)' },
        },
        slideUpFade: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
