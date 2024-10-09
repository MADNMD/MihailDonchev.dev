const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      xxs: "328px",
      xs: "396px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    // Ако искаш да добавиш още цветове, можеш да ги дефинираш тук
    extend: {
      colors: {
        // например, добавяне на персонализирани цветове
        primary: colors.blue,
        secondary: colors.amber,
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
