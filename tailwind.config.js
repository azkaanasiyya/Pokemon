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
          500: "#635BFF",
          400: "#A38CFF",
          300: "#D3BDFF",
          200: "#E7D6FF",
          100: "#F7F0FF",
          50: "#FBF7FF",
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
          navy: "#0F2060",
          purple: "rgba(99, 91, 255, 0.1)",
        }
      },
      fontSize: {}
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

