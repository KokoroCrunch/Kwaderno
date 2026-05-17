/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kwaderno: {
          brown: '#8B4513',
          light: '#D4A574',
          cream: '#F5F0E6',
          dark: '#3D2314',
          accent: '#C19A6B'
        }
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
