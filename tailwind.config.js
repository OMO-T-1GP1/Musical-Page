/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
      },
      screens: {
        lg: "1024px",
        xl: "1440px",
        sm: "375px",
        xs: "360px",
        md: "820px",
        tv: "2000px",
      },  
    },
  },
  plugins: [],
}

