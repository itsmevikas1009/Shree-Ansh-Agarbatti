/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Signature logo red — same family as the SA badge */
        brand: {
          DEFAULT: "#e92e37",
          dark: "#c2232b",
          light: "#f2555d",
          deep: "#8a1518", // packaging maroon
        },
        /* Dark sections tinted toward the packaging's red-maroon depth */
        smoke: {
          950: "#200d0f",
          900: "#2e1214",
          800: "#3d181b",
        },
        /* Packaging gold (Shree Royal lettering / marigold) */
        ember: "#f0b03f",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "1400px",
      },
    },
  },
  plugins: [],
};
