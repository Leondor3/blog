/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'Lato': ['Lato', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
