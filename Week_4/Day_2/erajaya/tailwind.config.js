/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        erajaya: '#11074e',
      },
      fontFamily: {
        sans: ['Maven Pro'],
      },
    },
  },
  plugins: [require('rippleui'), require('tw-elements/dist/plugin')],
};
