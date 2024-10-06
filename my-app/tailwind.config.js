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
        'cursiveF': ["Pacifico", 'cursive']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'custom-black': '#febe0f 5px 5px, #ffa4bf 10px 10px, #fe6622 15px 15px, #4580b2 20px 20px, #0aa56b 25px 25px',
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
