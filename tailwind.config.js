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
    fontFamily: {
      sans: ['DM Sans', 'sans-serif']
    },
    extend: {
      colors: {
        primary: {
          500: "#A2D2FF", 
          400: "#BDE0FE",
          300: "#CAF0F8",
          200: "#E3F2FD",
          100: "#F1FAFF",
        },
        secondary: {
          500: "#FFD670", 
          400: "#FFEE93",
          300: "#FFF8D6",
          200: "#FFFBEA",
          100: "#FFFCF7",
        },
        accent: {
          500: "#FFB5E8", 
          400: "#FFC8DD",
          300: "#FFD7E5",
          200: "#FFE5F0",
          100: "#FFF0F7",
        },
        neutral: {
          500: "#00112D", 
          400: "#2A3950",
          300: "#7B889D",
          200: "#A6AEBB",
          100: "#D8DBE0",
          50: "#F9F9FB",
        },
        additional: {
          white: "#FFFFFF",
          bg: "#F9F9FB",
        },
      },
      fontSize: {}
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

