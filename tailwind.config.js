/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Kanit', 'sans-serif'],
      },
      colors: {
        'background': '#0a0a0a', // black
        'alt-background': '#171717', // lighter black
        'input': '#2e2e2e', // dark gray
        'inactive': '#444444', // gray
        'primary': '#ff5925', // orange
        'hover': '#ff8058' // dark orange
      }
    },
  },
  plugins: [],
}