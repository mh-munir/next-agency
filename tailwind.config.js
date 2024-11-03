/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "roboto-serif": "var(--font-roboto-serif)",
        "dm-sans": "var(--font-dm-sans)",
      },
      backgroundImage: {
        "hero-bg": "url('../img/hero-bg.png')",
        "hero-img": "url('../img/hero-img.png')",
        "getin-bg": "url('../img/getin.png')",
      },
      boxShadow: {
        "my-shadow": "0px 0px 200px 100px rgba(255,255,255,0.1)",
      },
    },
  },
  plugins: [],
};
