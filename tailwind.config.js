/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Libre Franklin', 'sans-serif'],
    },
    extend: {
      dropShadow: {
<<<<<<< HEAD
        sm: '0px 10px 10px 0px rgba(0, 0, 0, 0.05);',
        'md ': '0px 4px 10px 0px rgba(0, 0, 0, 0.10)',
      },
    },
    colors: {
      white: '#ffffff',
      black: {
        200: 'rgba(0, 0, 0, 0.8)',
      },
      gray: {
        200: '#C4C4C4',
       
      },
      neutral:{
        400: '#a3a3a3',
      },

=======
        'sm': '0px 10px 10px 0px rgba(0, 0, 0, 0.05);',
        'md ': '0px 4px 10px 0px rgba(0, 0, 0, 0.10)',
      }
    },
    colors: {
      white: '#ffffff',
      black:{
        200:'rgba(0, 0, 0, 0.8)'
      },
      gray:{
        200: '#C4C4C4'
        
      },
>>>>>>> feab60f55a1bbc719f5145259c6746fd228422ab
      stone: {
        500: '#6F6F6F',
      },
      purple: {
        950: '#48409E',
      },
      violet: {
        50: '#F1F0FF',
        100: '#F2F2F2',
        150: '#BFB9FF',
      },
      red: {
        400: '#FF7979',
      },
      orange: {
<<<<<<< HEAD
        100: '#FFBA53',
        300: '#f97316',
      },
      green: {
        400: '#2BA700',
      },
    },
    extend: {},
  },
=======
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
>>>>>>> feab60f55a1bbc719f5145259c6746fd228422ab
};
