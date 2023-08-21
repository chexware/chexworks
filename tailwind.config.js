/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    colors: {
      'red-dark': '#46322e',
      'red': '#994a3d',
      'green': '#2e4d3f',
      'green-light': '#4d8069',
      'gray-dark': '#181918',
      'gray': '#666666',
      'white': '#ffffff', 
      'black': '#000000',
    },
    extend: {
      colors: {
        'white-dirty': '#bababb',
        'gray-dirty': '#303030',
      },
      fontFamily: {
        'alerta-stencil': ['Allerta Stencil', 'sans-serif'],
      },
    }
  },
  plugins: [
    require('preline/plugin'),
  ]
};