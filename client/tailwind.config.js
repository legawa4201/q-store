/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#090b0b',
        'background': '#f8fafa',
        'primary': '#71a79d',
        'secondary': '#9ecbc3',
        'accent': '#79c1b4',
       },
       ontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        heading: 'undefined',
        body: 'Noto Sans Tai Viet',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      }       
    },
  },
  plugins: [require(`daisyui`)],
}

