/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainColor: '#22242D',
        line: '#3e4c5a',
      },
      padding: {
        nav: '4em',
      }
    },
  },
  plugins: [],
}