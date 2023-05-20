/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'White': '#ffffff',
        'Pale-blue': '#ebf1ff',
        'Blue-1': '#3e52a3',
        'Light-lavender': '#c8c7ff',
        'Dark-gray-blue': '#303b5a',
        'Light-red': '#ff5757',
        'Orangey-yellow': '#ffb01f',
        'Green-teal': '#00bd91',
        'Cobalt-blue': '#1125d4',
        'grey': '#e8e8e8',
        'G1-1': '#7857ff',
        'G1-2': '#2e2be9',
        'G2-1': '#4E21CA',
        'G2-2': '#2421CA',
      }
    },
  },
  plugins: [],
};

