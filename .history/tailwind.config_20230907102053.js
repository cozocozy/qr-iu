/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: { whitecustom: "var(--whitecustom)", lightblue: "var(--lightblue)" },
      grayishblue: "var(--grayishblue)",
      darkblue: "var(--darkblue)",
    },
  },
  plugins: [],
};
