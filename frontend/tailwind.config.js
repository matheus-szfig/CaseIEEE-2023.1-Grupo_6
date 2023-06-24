/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0574BC",
          dark: "#0D5FAA",
          darker: "#16528a",
          light: "#5b7287",
        },
        graph: {
          fst: "#0574BC",
          scd: "#6995b3",
          trd: "#526c7d"
        },
        gray: {
          DEFAULT: "#CBC8C8",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
