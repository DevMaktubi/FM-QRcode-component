/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Outfit, sans-serif",
      },
      fontSize: {
        heading: "22px",
        body: "15px",
      },
      colors: {
        blue: "#2C7DFA",
        "blue-shade": "#3685FF",
        "dark-navy": "#1F314F",
        gray: "#7D889E",
        "light-gray": "#D5E1EF",
      },
    },
  },
  plugins: [],
};
