/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        "green": "#9dfbc7",
        "primaryBG": "#0b2740",
        "primary" : "#011426",
        "secondary" : "#051c32"
      },
    },
  },
  plugins: [],
};
