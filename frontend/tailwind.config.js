/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: '#0a4a7c',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        brightBlue: '#00b7e3',
        deepBlue: '#0da3e8',
        oceanBlue: '#0da4e7',
        veryLightBlue: '#e9f8ff',
        veryDarkBlue: '#030333',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        grayishWhite: '#c4faff',
        darkBrown: '#3f3f3f',
      },
      backgroundImage: {
        contactBg: "url('/contactBg.png')",
        curveLine: "url('/curve-line.png')",
        lineBg: "url('/line-bg.png')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
}
