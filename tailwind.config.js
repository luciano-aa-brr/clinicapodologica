/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './assets/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#004B75',
          teal: '#00A490',
          yellow: '#F9C211',
        },
        koalink: '#BFA2DB',
      },
    },
  },
  plugins: [],
};
