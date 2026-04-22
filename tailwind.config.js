/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'pride-pink': '#ff00ff',
        'pride-blue': '#00d2ff',
        'bg-dark': '#070707',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        unbounded: ['Unbounded', 'sans-serif'],
        borel: ['Borel', 'cursive'],
      },
    },
  },
  plugins: [],
}