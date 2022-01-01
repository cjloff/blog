module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'alpha': '#191919',
      'bravo': '#4E9F3D',
      'charlie': '#EEEEEE',
      'delta': '#8B9A46',
      'echo': '#1E5128',
      'white': "#fff",
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontFamily: {
      'display': ['Arvo'],
      'body': ['Poppins']
    },
    extend: {

    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
