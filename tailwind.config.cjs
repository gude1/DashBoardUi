/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#F9FAFB",
        color2: "#D0D5DD",
        color3: "#101828",
        color4: "#667085",
        color5: "#F9FAFB",
        color6: "#6941C6",
      },
      fontFamily: {
        inter: ["inter"],
      },
    },
  },
  plugins: [],
};
