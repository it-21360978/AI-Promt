/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'gradient-dark': `linear-gradient(to right,${theme('colors.gray.800')}, ${theme('colors.black')})`,
        'back': `url('./assets/Mask group.png')`,
        'gradient-mix': `linear-gradient(to right, ${theme('colors.black')}, ${theme('colors.gray.700')}, ${theme('colors.orange.300')})`,
      }),
    },
  },
  plugins: [],
 
}
