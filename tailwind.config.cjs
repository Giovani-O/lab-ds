/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: '.875rem',
      sm: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',

      gray: {
        900: '#121214',
        800: '#202024', 
        400: '#7c7c8a',
        200: '#c4c4cc',
        100: '#e1e1e6',
      },

      cyan: {
        500: '#81D8F7',
        300: '#9BE1FB',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
