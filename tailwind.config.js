/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
      white: colors.white,
      cyan: colors.cyan,
    },
    extend: {},
  },
  plugins: [],
};
