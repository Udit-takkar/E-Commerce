module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
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
