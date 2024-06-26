const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: {
        100: "#599db2",
        200: "#2b6579",
        300: "#183749",
      },
      secondary: {
        100: "#da9190",
      },
      gray: {
        100: "#c9ccd1",
        200: "#6e7c84",
      },
      white: {
        100: "#fcfafb",
      },
    },
  },
  plugins: [],
});
