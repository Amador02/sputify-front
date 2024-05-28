/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,csv}",
  ],
  theme: {
    extend: {
      screens: {
        '1-5-xl': '1400px',
      },
    },
  },
  plugins: [],
}

