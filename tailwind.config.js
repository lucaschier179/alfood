/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "mine-shaft": "#333",
        "silver": "#c2c2c2",
        "oxford-blue": "#363e50",
        "big-stone": {
          "50": "#f1f7fd",
          "100": "#deecfb",
          "200": "#c5dff8",
          "300": "#9dccf3",
          "400": "#6fafeb",
          "500": "#4d90e4",
          "600": "#3874d8",
          "700": "#2f61c6",
          "800": "#2c4fa1",
          "900": "#284580",
          "950": "#141e36",
        },
      },
      boxShadow: {
        "button-home": "0px 0px 20px 4px #131D33",
      },
      backgroundImage: {
        "gradient-button-home": "linear-gradient(270deg, #2B4275 5%, #486CC2 65%)"
      },
    },
  },
  plugins: [],
}

