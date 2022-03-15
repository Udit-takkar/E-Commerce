const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      primary: {
        blue: '#2874f0',
        lightGreen: '#14be47',
        green: '#388e3c',
        yellow: '#ff9f00',
        orange: '#fb641b',
        darkBlue: '#172337',
        grey: '#878787',
      },
    },
    extend: {
      extend: {
        fontFamily: {
          custom: ['jakarta', 'sans-serif'],
          helvetica: ['helvetica', 'sans-serif'],
        },
      },
    },
  },
  plugins: [],
};
