/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greenN: '#84b424',
        greenL: '#ebfbcb',
        greenD2: '#3b5304',
        greenD1: '#5c9b1c',
        dark1: '#242424',
        dark2: '#343434',
        darksky:'#486484',
        greenL2:'#ccdcac'
      },
    },
  },
  plugins: [],
};
