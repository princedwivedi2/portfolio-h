/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/data/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#6D28D9',
        secondary: '#A78BFA',
        softPurple: '#d8b4fe',
        softPink: '#f9a8d4',
      },
      boxShadow: {
        card: '0 10px 30px -15px rgba(0, 0, 0, 0.08)',
        hover: '0 20px 40px -15px rgba(0, 0, 0, 0.12)',
        elegant: '0 4px 20px rgba(0, 0, 0, 0.05)'
      },
    },
  },
  plugins: [],
}
