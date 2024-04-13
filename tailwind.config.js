/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Libre Baskerville", "serif"],
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
