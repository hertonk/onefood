/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xss: '0.5rem',
      },
      colors: {
        'vinho' : '#811E07',
        'cinza' : '#F5F5F5',
        'white' : '#ffffff'
      },
      spacing: {
        '800': '50rem',
      },
      backgroundImage: {
        'waves': "url('/assets/new-waves.svg')"
      }
    },
  },
  plugins: [],
}