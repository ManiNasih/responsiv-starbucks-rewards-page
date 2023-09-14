

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    
    extend: {
      colors: {
        'very-dark-green': '#1e3932',
        'very-light-blue': '#d4e9e2',
        'very-light-yellow': '#f3f1e7',
        'light-green': '#008248',
        'cream': '#f1f8f6'
      },

      fontFamily: {
      'sodo-sans': ["SoDo Sans SemiBold, sans-serif"],
      'helvetica': ["Helvetica Neue, sans-serif"]}
    },
  },
  plugins: [],
}