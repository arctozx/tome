/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollbarGutter: {
        stable: 'scrollbar-gutter: stable',
      },
    },
  },
  plugins: [require("daisyui")],
};
