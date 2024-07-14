/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-yellow": "#FFC42C",
        "primary-lightyellow": "#FFDC82",
        "primary-blue": "#305AD9",
        "primary-lightblue": "#96AEF9",
        "second-blue": "#1B40B0",
        "second-lightblue": "#7899FF",
        "third-blue": "#182859",
        "third-lightblue": "#6E7A9E",
        "primary-brown": "#603B24",
        "primary-lightbrown": "#BC8461",
        "primary-green": "#00C844",
        "primary-lightgreen": "#8FDDA9",
        "primary-black": "#000000",
        "primary-white": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
