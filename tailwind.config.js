module.exports = {

  content: [

    "./src/**/*.{js,jsx,ts,tsx}",

  ],

  theme: {
    extend: {
      colors: {
        'blue-lighter': '#1E213A',
        'blue-dark': '#100E1D',
        'light-gray': '#6E707A',
        'progress-bar': '#FFEC65'
      },
      backgroundImage: {
        'cloud-image': "url('/img/cloud-bg.png')"
      }
    }
  },
  plugins: [],

}
