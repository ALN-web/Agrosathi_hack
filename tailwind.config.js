/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#e8f5e9',
          DEFAULT: '#134E36', // Forest Green
          dark: '#0B2E1D',    // Dark Green
          accent: '#B8F24A',  // Lime
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem', // 24px
      }
    },
  },
  plugins: [],
}
