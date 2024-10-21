/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'pop-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pop-up': 'pop-up 1s ease-in-out',
      },
      textDecorationThickness: {
        3: '3px',
      },
      colors: {
        grey: 'grey',
      },
      transitionProperty: {
        opacity: 'opacity',
      },
      opacity: {
        0: '0',
        100: '1',
      },
    },
  },
  plugins: [],
};
