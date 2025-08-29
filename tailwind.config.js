/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      spacing: {
        '28': '112px', // mt-28, mb-28
        '36': '144px',
        '40': '160px',
      },
      fontFamily: {
        'Roboto-slab' : ['RobotoSlab', 'sans-serif'],
        'Space-mono' : ['SpaceMono', 'sans-serif'],
        'Josefins-Sans' : ['JosefinsSans', 'sans-serif'],
        'RobotoCondensed-Italic' : ['RobotoCondensed-Italic', 'sans-serif'],
        'RobotoCondensed' : ['RobotoCondensed' , 'sans-serif']
      },
      fontSize: {
        '15' : 15,
        '18' : 18,
      },
      colors: {
          'verde-translucido': 'rgba(255,255,255,0.9)'
      },
    },
  },
  plugins: [],
}

