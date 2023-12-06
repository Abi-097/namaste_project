const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#769863",
        grey: "#F8F8F8",
        black: "#212121",
        lightblack: "#343434",
        DBlack: "#413F3E",
      },
    },
  },
  plugins: [],
});
