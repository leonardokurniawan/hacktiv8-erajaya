/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, Helvetica, Arial, sans-serif',
        anton: 'Anton, cursive',
      },
      colors: {
        omdb: '#f5c518',
      },
    },
  },
  plugins: [require('rippleui')],
  rippleui: {
    themes: [
      {
        themeName: 'primary',
        colorScheme: 'primary',
        colors: {
          primary: '#5799ef',
          backgroundPrimary: '#141414',
        },
      },
    ],
  },
};
