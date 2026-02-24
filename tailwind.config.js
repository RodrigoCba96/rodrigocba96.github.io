/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ffffff",
      },
      fontSize: {
        'huge': '15vw', // Para el texto masivo tipo "FLOW"
        'display': '8vw',
      },
      fontWeight: {
        'black': '900',
      }
    },
  },
  plugins: [],
}