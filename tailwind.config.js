const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      width: {
        120: "30rem",
      },
      colors: {
        primary: "#F7EBC3",
        secondary: "#275269",
        tertiary: "#D1A562",
        "qp-dry-green": "#62C488",
        "qp-dark-orange": "#D15C34",
      },
    },
  },
  plugins: [],
};
