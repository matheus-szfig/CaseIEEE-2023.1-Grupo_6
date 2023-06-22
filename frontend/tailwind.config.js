/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0574BC",
          dark: "#0D5FAA",
          light: "#5b7287",
        },
        gray: {
          DEFAULT: "#CBC8C8",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
