/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'green-custom': '#202c33',
      },
      textColor: {
        'custom-gray': '#aebac1',
      },
      
    },
  },
  plugins: [],
}

