module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'google': ['Noto Sans TC']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
