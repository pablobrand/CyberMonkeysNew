const defaultTheme = require('tailwindcss/defaultTheme');
const defaultFontsSerif = defaultTheme.fontFamily.serif;

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        sm: '100%',
        md: '540px',
        lg: '720px',
        xl: '1150px',
      },
      fontWeight:{
        'medium': 500,
        'extra-bold': 800,
        black: 900
      }
    },
    extend: {
      colors:{
        'yelloww': '#fcd538',
        'bluee': '#6c9ae7'
      },
      fontFamily: {
        rajdhani: ["'Rajdhani-Regular', sans-serif", ...defaultFontsSerif],
        poppins: ["'Poppins-Regular', sans-serif", ...defaultFontsSerif],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
