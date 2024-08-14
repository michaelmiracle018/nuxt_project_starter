/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.vue",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",

  ],
  theme: {
       // * FONT FAMILY  / you can add your own
       fontFamily: {
        montserrat: ['montserrat'],
        montserratBold: ['montserrat-bold'],
        montserratSemiBold: ['montserrat-semiBold'],
        montserratMedium: ['montserrat-medium']
  
      },
      colors: {
        // * COLORS  / you can add your own
        "white-clr": '#fff',
        'red-clr-1': '#9e1b24', 
        'red-clr-2': '#9e2140', 
        'bg-light-red': 'gba(158, 33, 64, 0.1)',  
        'black-clr': '#000000',
        'text-light': 'rgba(0, 0, 0, 0.35)',
        'text-search': 'rgba(0, 0, 0, 0.2)',
        'dashboard-bg-light':'#d9d9d9',
        'dashboard-bg': '#f4f1ef',
        'add-btn-bg': 'rgba(158, 33, 64, 0.1)',
        'gray-50': '#f9fafb',
        'gray-100': '#f3f4f6'
      },
      screens: {
        // * MIN WIDTH SCREENS / you can add your own
  
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
  
        // * MAX WIDTH SCREENS / you can add your own
        'max-xsm-1': {max: '500px'},
        // => @media (max-width: 500px) { ... }
  
        'max-sm': {max:'640px'},
        // => @media (max-width: 640px) { ... }
  
        'max-md': {max:'768px'},
        // => @media (max-width: 768px) { ... }
  
        'max-lg': {max:'1024px'},
        // => @media (max-width: 1024px) { ... }
  
        'max-lg-1': {max:'1124px'},
  
        'max-lg-2': {max:'1224px'},
        'max-xl': {max:'1280px'},
        // => @media (min-width: 1280px) { ... }
  
        'max-2xl': {max:'1536px'},
        // => @media (min-width: 1536px) { ... }
      },
    extend: {},
  },
  plugins: [],
};
