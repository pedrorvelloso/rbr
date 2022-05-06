const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#10FFF8',
        purple: {
          50: '#eeeafb',
          100: '#ccbff2',
          200: '#aa95ea',
          300: '#886ae1',
          400: '#6640d9',
          500: '#4d26bf',
          600: '#3c1e95',
          700: '#2b156a',
          800: '#1a0d40',
          850: '#11092a',
          900: '#080414',
        },
      },
      fontFamily: {
        sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
