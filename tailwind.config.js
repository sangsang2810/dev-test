/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    screens: {
      'sm': { 'min': '360px', 'max': '640px' },
      'md': { 'min': '641px', 'max': '2440px' },
    },
    colors: {
      'blue': '#1fb6ff',
      'white': '#ffffff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'neutral-3': '#f1f1f1',
      'neutral-4': '#E3E3E3',
      'neutral-6': '#8C8C8C',
      'neutral-8': '#232323',
      'neutral-7': '#5F5F5F',
      'second-main': '#0F5EDD',
      'second-light': '#E5EEFB',
      'car-buyer-primary': '#EE1B24',
    },
    extend: {},
  },
  plugins: [],
}
