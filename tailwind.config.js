/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        lightishgrey:'#575757',
        orangishred:'#ec5242',
        darkishwhite:'#e1e1e1',
        lightpink:'#f7f7f7',
        lightdark:'#2D4356',
      },
      screens: {
        lg: "1280px",
        xl: "1440px",
        sm: "375px",
        xs: "360px",
        md: "768px",
      },  
    },
  },
  plugins: [],
}

