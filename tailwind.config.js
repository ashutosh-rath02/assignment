/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F9F9F9",
        primary: "#2F667F",
        "text-secondary": "#539BBB",
        "text-gray": "#494C55",
        "light-white": "rgba(255,255,255,0.17)",
      },
      borderRadius: {
        "2.5xl": "17.78px",
        "4xl": "35.56px",
      },
      fontSize: {
        "4.5xl": "42.67px",
      },
    },
  },
  plugins: [],
};
