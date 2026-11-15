/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FFFDF9',
          50: '#FFFFFF',
          100: '#FFFDF9',
          200: '#FFF8E9',
          300: '#FAF3E0',
          400: '#F5ECDA',
        },
        cream: {
          light: '#FCF8F2',
          DEFAULT: '#F7EFE2',
          dark: '#EFE3CA',
        },
        warmBeige: {
          light: '#F5EFE6',
          DEFAULT: '#E8DEC8',
          dark: '#D8C7A8',
        },
        antiqueGold: {
          light: '#E5C97D',
          DEFAULT: '#C5A059',
          dark: '#9E7B34',
          deep: '#7A5B1D',
        },
        darkBrown: {
          light: '#59351F',
          DEFAULT: '#3D2418',
          dark: '#24130B',
          rich: '#2E1A10',
        },
        royalMaroon: {
          light: '#8C2B39',
          DEFAULT: '#741F2A',
          dark: '#4E1119',
        },
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        serifDisplay: ['"Cinzel"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        body: ['"Outfit"', '"Lato"', 'sans-serif'],
      },
      boxShadow: {
        'gold-soft': '0 4px 20px -2px rgba(197, 160, 89, 0.25)',
        'gold-glow': '0 0 30px 4px rgba(197, 160, 89, 0.35)',
        'card-royal': '0 12px 36px -8px rgba(46, 26, 16, 0.12)',
        'door-depth': '0 25px 60px -15px rgba(0, 0, 0, 0.75)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        flicker: {
          '0%, 100%': { transform: 'scale(1) rotate(-1deg)', opacity: '0.95' },
          '50%': { transform: 'scale(1.06, 0.96) rotate(1.5deg)', opacity: '1' },
        },
      },
      animation: {
        shimmer: 'shimmer 8s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        flicker: 'flicker 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

