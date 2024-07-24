/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    container: {
      center: "true",
      padding: "16px",
    },
    extend: {
      colors: {
        darkPrimary: "#21251F",
        darkSecondary: "#4e515c",
        darkText: "rgb(var(--dark-col-text) / <alpha-value>)",
        secondary: "#c8f560",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        blob: "90% 10% 25% 13% / 35% 45% 55% 65%",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
