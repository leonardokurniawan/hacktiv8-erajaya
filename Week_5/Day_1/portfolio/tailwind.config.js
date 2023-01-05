/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Saira Extra Condensed, sans-serif'],
      },
      colors: {
        primary: '#c17b62',
        secondary: '#bc5b3c',
        light: '#DB9A84',
        lighter: '#E7B4A2',
        lightest: '#F7D5C8',
        dark: '#33373A',
      },
    },
  },
  plugins: [],
};
