/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Libre Franklin', 'sans-serif'],
    },
    colors: {
      white: '#ffffff',
      black:{
        200:'rgba(0, 0, 0, 0.8)'
      },
      gray:{
        200: '#C4C4C4'
      },
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
      red: {
        400: '#FF7979',
      },
      orange: {
				100: '#FFBA53',
        300: '#f97316',
      },
      green:{
       400: '#2BA700'
      }
    },
    extend: {},
  },
  plugins: [],
};
