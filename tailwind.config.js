/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        jost:'Jost',
        paytone: 'Paytone One',
        catamaran:'Catamaran', 
      },
      colors: {
        'ourGreen': '#36552c',
      },
      fontSize: {
        xxs: '0.67rem',
      },
      width: {
        '100': '25rem',
        '120': '30rem'
      },
      height: {
        '100': '25rem',
        '120': '30rem'
      }
    },
  },
  plugins: [],
}
