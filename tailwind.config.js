/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        sans: ["Outfit", "system-ui", "sans-serif"],
      },
      colors: {
        paper: "#f3eee6",
        ink: "#1c1714",
        muted: "#6d645c",
        line: "#d9d0c4",
        wine: "#7c2f2a",
        olive: "#3d4a38",
      },
    },
  },
  plugins: [],
};
