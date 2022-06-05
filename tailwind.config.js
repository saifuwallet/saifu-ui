const colors = require('tailwindcss/colors');
const forms = require('@tailwindcss/forms');
const scrollbarHide = require('tailwind-scrollbar-hide');

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screen: {
      // change small to extension width
      sm: '350px',
      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
    },
    extend: {
      colors: {
        orange: colors.orange,
      },
    },
  },
  plugins: [forms, scrollbarHide],
};
