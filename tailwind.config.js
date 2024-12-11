/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      scrollbar: {
        hide: {
          '::-webkit-scrollbar': { display: 'none' },
          '-ms-overflow-style': 'none', // For Internet Explorer
          'scrollbar-width': 'none',   // For Firefox
        },
      },
    },
  },
  plugins: [],
}

