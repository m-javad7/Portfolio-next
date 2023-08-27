/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx ,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",
  theme: {
    fontFamily: {
      "iran-sans": "IranSans",
      "iran-sans-medium": "IranSansMedium",
    },
    screens: {
      xs: "200px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}