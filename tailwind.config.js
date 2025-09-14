/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,ts,vue}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#f43f5e',
        dark: '#be185d',
        secondery: '#64748b',
      }
    },
  },
  plugins: [],
}

