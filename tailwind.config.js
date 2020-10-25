const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#d4d7e5',
          200: '#aaafcb',
          300: '#7f87b1',
          400: '#555f97',
          500: '#2a377d',
          600: '#222c64',
          700: '#19214b',
          800: '#111632',
          900: '#080b19',
        },
        purple: {
          100: '#dddbf3',
          200: '#bbb7e6',
          300: '#9a94da',
          400: '#7870cd',
          500: '#564cc1',
          600: '#453d9a',
          700: '#342e74',
          800: '#221e4d',
          900: '#110f27',
        },
      },
      spacing: {
        '16/9': '56.25%',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      height: {
        96: '24rem',
        128: '32rem',
      },
      padding: {
        128: '32rem',
      },
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['group-hover'],
  },
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/custom-forms')],
};
