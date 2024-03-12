/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Google Sans", "sans-serif"],
      },
      colors: {
        'red': '#FF0000',
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
