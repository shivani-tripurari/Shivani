/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cursive': ["Pacifico", 'cursive']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: theme => ({
        'custom-image': "url('../app/assets/bg.svg')",
        'paper-image' :"url('../app/assets/paperBg.svg')",
        'tape-image' :"url('../app/assets/tape.svg')"
        // add more images as needed
      })
    },
  },
  plugins: [],
};
