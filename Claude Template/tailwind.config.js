/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'deep-bg': '#0a0e13',
        'surface': '#141821',
        'accent': '#f5e6d3',
        'accent-dim': '#d4c5b4',
        'text-main': '#e8e6e3',
        'text-dim': '#a8a6a3',
        'highlight': '#ff6b35',
        'secondary': '#4ecdc4',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['DM Sans', 'sans-serif'],
      },
      animation: {
        'drift': 'drift 20s ease-in-out infinite',
        'slideDown': 'slideDown 0.8s ease-out',
        'fadeInUp': 'fadeInUp 1s ease-out both',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(5%, 5%) rotate(3deg)' },
          '66%': { transform: 'translate(-5%, 3%) rotate(-3deg)' },
        },
        slideDown: {
          'from': { transform: 'translateY(-100%)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    }
  },
  plugins: [],
}