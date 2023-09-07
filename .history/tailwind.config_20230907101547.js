/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: { "white-custom": "var(--whitecustome)", lightgray: "var(--lightgray)", grayishblue: "var(--grayishblue)", darkblue: "var(--darkblue)" },
    },
  },
  plugins: [],
};
