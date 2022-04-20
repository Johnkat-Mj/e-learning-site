const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    colors: {
      transparent: colors.transparent,
      current: colors.current,
      white : colors.white,
      gray: colors.gray,
      'primary': '#7325F1',
      'secondary':'#955BF3',
      'hoverbg':'#52269E',
      'titlecolor':'#332053',
      'f-color':{
        default : '#272628',
        'title1' : '#332053',
        'titl2' : '#838383'
      }
    },
    extend: {
      boxShadow:{
        'costum':'0px 10px 30px 10px rgba(114, 114, 114, 0.07)',
      },
      lineClamp: {
        5: '5',
        6: '6'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
