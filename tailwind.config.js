const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    colors: {
      gray: colors.blueGray,
      white: colors.white,
      green: colors.emerald,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
