/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          DEFAULT: '#0574BC',
          dark: '#0D5FAA',
        },
        gray: {
          DEFAULT: '#CBC8C8',
        },
      }
    },
  },
  plugins: [],
}

