/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#B7A48A', // Light beige accent (secondary accent in the palette)
        secondary: '#8A7357', // Primary accent: warm taupe
        accent: '#6B5841', // Deep taupe — same hue, used for contrast on small text/buttons
        bg: '#F5F0E8', // Main background
        alt: '#EAE1D4', // Alternate section background
        card: '#FFFDF8', // Card background
        line: '#D9CDBD', // Borders
        text: '#292720', // Main text
        muted: '#70695F', // Muted text
      },
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        body: ['"Outfit"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 15% 15%, rgba(183,164,138,0.28), transparent 42%), radial-gradient(circle at 85% 0%, rgba(138,115,87,0.18), transparent 38%), radial-gradient(circle at 50% 100%, rgba(107,88,65,0.10), transparent 42%)',
        'card-gradient':
          'linear-gradient(145deg, rgba(255,253,248,0.94) 0%, rgba(255,253,248,0.76) 100%)',
        'hero-glow':
          'linear-gradient(180deg, rgba(183,164,138,0.18) 0%, rgba(245,240,232,0) 60%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(183,164,138,0.35)',
        'glow-cyan': '0 0 40px rgba(107,88,65,0.22)',
        soft: '0 10px 30px rgba(138,115,87,0.16)',
        elegant: '0 20px 45px rgba(138,115,87,0.22)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        blink: 'blink 1s step-start infinite',
        blob: 'blob 14s ease-in-out infinite',
        'blob-slow': 'blob 20s ease-in-out infinite',
        'spin-slow': 'spin 22s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '50%': { opacity: 0 },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-25px, 25px) scale(0.95)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        xl2: '20px',
      },
    },
  },
  plugins: [],
}
