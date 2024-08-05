const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', ...fontFamily.sans],
      },
      colors: {
        white: '#FFFFFF',
        tiffanyBlue: '#73C9D3',
        cerulean: '#007EA7',
        night: '#0A0A0A',
        lilac: '#C3ACCE',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
