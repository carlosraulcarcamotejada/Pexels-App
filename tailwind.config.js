module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  plugins: [
    require('@tailwindcss/forms')
  ],
  theme: {
    extend: {
      spacing: {
        '90': '22.5rem',
        '106':'26.5rem',
        '124':'31rem',
        '136':'34rem',
        '185':'46.25rem',
        '232':'58rem',
        '279':'69.75rem',
        '368':'92rem',
        '420':'105rem',
      },
      screens: {
        'xs': '512px',
        '3xl': '1792px',
        '4xl': '2048px',
        '5xl': '2304px',
        '6xl': '2560px',
      },
    },
  }
}
