/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      phone: { max: "450px" },
      tablet: { min: "451px", max: "1023px" },
      laptop: { min: "1024px", max: "1919px" },
      desktop: { min: "1920px" },
    },
    extend: {
      colors: {
        ateraPink: "#FF176B",
        gold: "#D1AD78",
      },
    },
  },
  plugins: [],
};
