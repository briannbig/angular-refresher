/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'antiflash-white': '#edf2f4ff',
        'steel-blue': '#3f88c5ff',
        'prussian-blue': '#032b43ff',
        'pine-green': '#136f63ff',
      },
    },
  },
  plugins: [],
}
