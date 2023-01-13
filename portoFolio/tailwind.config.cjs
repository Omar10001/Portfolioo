/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  mode: "jit",
  darkMode:"class",
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/compo/navBar/navBar.jsx",
    "./src/compo/darkMode/darkMode.jsx"

  ],
  theme: {
    extend: {},
  },
  plugins: [],
})
