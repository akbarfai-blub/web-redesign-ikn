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
          'xs': '480px',   // Extra small devices (phones, less than 640px)
          'sm': '640px',   // Small devices (landscape phones, 640px and up)
          'md': '768px',   // Medium devices (tablets, 768px and up)
          'lg': '1024px',  // Large devices (desktops, 1024px and up)
          'xl': '1280px',  // Extra large devices (large desktops, 1280px and up)
          '2xl': '1440px', // Extra extra large devices (larger desktops, 1440px and up)
          '3xl': '1600px', // Very large devices (extra-large monitors, 1600px and up)
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

