module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    // colors: {
      // "primary": "#1e1e1e",
      // "secondary": "#f3f8fc",
      // "details": "#f3f8fc",
    // },
    extend: {
      fontSize: {
        "2xs": ".625rem",
        "3xs": ".5rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp")
  ],
};
