const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'red1':"#ff3333",
      'def':"#591133",
      'def2':"#F8F6F7",
      'side':"#ECE5E7",
     'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'box':"#F8F6F7"
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '1.3px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
