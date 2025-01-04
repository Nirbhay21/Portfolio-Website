/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        "5xl-blur" : "0px 0px 50px var(--tw-shadow-color)",
      }
    },
    fontFamily: {
      spartan: ["Spartan", "sans-serif"],
      dancing: ["Dancing Script", "cursive"],
      nunito: ["Nunito", "sans-serif"],
      merriweather: ["Merriweather", "serif"],
    }
  },
}

