/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blush: { DEFAULT: '#F8D4DC', deep: '#EBA3B5', soft: '#FDEBEF' },
        cream: '#FFF8F1',
        lavender: { DEFAULT: '#DCD0F2', deep: '#B7A3DE', soft: '#F0EAFB' },
        peach: { DEFAULT: '#FFD8C2', deep: '#F6B391', soft: '#FFEFE4' },
        plum: { DEFAULT: '#4B2E45', soft: '#7A5A73' },
        rose: '#C75B7E',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        hand: ['Caveat', '"Segoe Script"', 'cursive'],
      },
      boxShadow: {
        paper:
          '0 14px 28px -10px rgba(122,70,100,.28), 0 2px 5px rgba(122,70,100,.12)',
      },
    },
  },
  plugins: [],
}
