/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBrown: "#dbaf6c",
        brandWhite: "#FFF8E8"
      },
      container:{
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl" : "6rem",
        },
        fontFamily: {
          merriweather: ["Merriweather", "serif"],
          montserrat: ["Montserrat", "sans-serif"],
        }
      },
    },
  },
  plugins: [],
}

