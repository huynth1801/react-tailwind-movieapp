/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        screenDark: "#0f0f0f",
        sideBarDark: "#161616",
        primaryColorDark: "#161616",
        secondColorDark: "#1d1d1d",
        btn: "#ff0000",
        textDark: "#fffff",
        screenLight: "#f9f9f9",
        sideBarLight: "#f1f1f5",
        primaryColorLight: "#ffffff",
        textLight: "#121212",
        border: "#2f2f3c",
      },
      backgroundColor: {
        bgBlack: "#000",
        bgWhite: "#fff",
      },
      backgroundImage: {
        "light-bgImg": "linear-gradient(to top, #f0f0f0, rgba(#fff,0))",
      },
      borderRadius: {
        "4xl": "30px",
      },
    },
  },
  plugins: [],
};
