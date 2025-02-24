/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xs: { min: '475px' },
      '2xs': { min: '576px' },
      sm: { min: '640px' },
      md: { min: '768px' },
      '2md': { min: '834px' },
      lg: { min: '992px' },
      '2lg': { min: '1024px' },
      xl: { min: '1280px' },
      '1.5xl': { min: '1440px' },
      '2xl': { min: '1536px' },
      '3xl': { min: '1760px' },
      '4xl': { min: '1890px' },
      '5xl': { min: '2048px' }
    },
    fontFamily: {},
    extend: {
      colors: {},
      fontSize: {}
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

