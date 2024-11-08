/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Bebas Neue', 'Work Sans'], // Add your custom font here
        text: ['Work Sans'], // Add your custom font here
      },
      colors: {
        pink: '#FFF4F1', // Add your custom font here
        textpink: '#EC315A', // Add your custom font here
      },
    },
  },
  plugins: [],
}

