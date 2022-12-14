/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        myfont: ['Comfortaa'],
        sans: ['Comfortaa', 'sans-serif'],
      },
    },
  },
  // variants: {
  //   extend: {
  //     fontFamily: ['hover', 'focus'],
  //   },
  // },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  }
}
