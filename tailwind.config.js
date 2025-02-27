/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        'neon-yellow': '#ffff00',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      scale: {
        60: '.6',
        70: '.7',
      },
    },
    content: {
      calendar: 'url("/calendar.svg")',
      location: 'url("/map-pin.svg")',
    },
  },
  plugins: [],
}
