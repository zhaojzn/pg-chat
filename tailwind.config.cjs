/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg':'#121212',
        'bg2':'#FDF9F8',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    
  ],
}