/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Libre Franklin', 'sans-serif'],
    },
    colors: {
      white: '#ffffff',
      stone: {
        500: '#6F6F6F',
      },
      purple: {
        950: '#48409E',
      },
      violet: {
        50: '#F1F0FF',
        150: '#BFB9FF',
      },
      orange: {
        30: '#f97316',
      },
    },
    extend: {},
  },
  plugins: [],
};
