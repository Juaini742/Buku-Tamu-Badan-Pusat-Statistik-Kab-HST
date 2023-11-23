/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#012545",
        secondary: "#073F73",
        danger: "#7D120B",
        dangerH: "#AE0F22",
        purple: "#360A58",
        grey: "#f3f4f6",
        warning: "#9A6600",
        warningH: "#BB8212",
      },
    },
  },
  plugins: [],
};
