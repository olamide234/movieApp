/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-bg": "#0D0D0F",
        "nav-bg": "#161616",
        "light-gray": "rgb(175, 175, 175)",
        "dark-gray": "rgb(165, 165, 165)",
        "primary-green": "rgb(0, 206, 121)",
        "primary-blue": "#0d6efd",
        "gray-bg": "rgb(33,37,41)",
        "dark-gray-bg": "#1e1e1e",
      },
      // fontFamily: {
      //   sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      // },
      // boxShadow: {
      //   "0vertical": "6px 0px 18px rgba(0, 0, 0, 0.06)",
      //   "0horizontal": "0px 6px 18px rgba(0, 0, 0, 0.06)",
      // },
      // letterSpacing: {
      //   lessWide: "0.01em",
      // },
      // fontSize: {
      //   xx: ["0.688rem", "1rem"],
      //   ss: ["0.813rem", "1.25rem"],
      //   sm: ["0.875rem", "1.313rem"],
      //   bs: ["0.938rem", "1.375rem"],
      // },
    },
  },
  plugins: [],
};
