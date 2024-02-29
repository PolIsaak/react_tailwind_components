/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white-smoke': '#F3F3F3',
      'spring-bud':'#B5F827',
      'yellow-green' : '#90DA19',
      'eerie-black':'#1F1F1F'
    },
    fontFamily:{
      body:['Roboto'],      /* Body Text */
      header:['Montserrat'] /* Headers */
    },
    fontSize:{
      xs: '0.875rem',     /* 14px Eyebrow */
      sm: '1rem',         /* 16px Tags */
      base: '1.25rem',    /* 20px Paragraph */
      lg: '1.5rem',       /* 24px Header Level 3*/
      xl: '1.875rem',     /* 30px Header Level 2*/
      '2xl': '2.625rem'   /* 42px Header Level 1*/
    }
  },
  plugins: [],
}

