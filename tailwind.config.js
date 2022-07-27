/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'green': "#487254",
      'cream_white': "#f6f3e9",
      'light_brown': "#dfdcd3",
      'choc_brown': "#22150c",
      'black': "#000",
      'white': "#FFF",
      'divider_brown': "#d6d0bc",
      "brownish": "#4E3325",
      "gray": "#808080"
    },
    screens: {
      "sm": "640px",
      "md": "768px",
      "c_md": "940px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px"
    },
    extend: {
      backgroundImage: {
        'intro-cover-pattern': "url('/public/assets/images/homepage/introCover.jpg')",
        'discover1': "url('/public/assets/images/homepage/discover1.jpg')",
      },
      fontFamily: {
        giambatt: ["Giambatt"],
        austin: ["Austin_Capittal"],
        articulat: ["ArticulatCF_Normal"],
        bally: ["Bally_Girl"],
      },
    },
  },
  plugins: [],
}
