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
        "primary-yello": "#FFC42C",
        "primary-blue": "#305AD9",
        "second-blue": "#4B58A5",
        "third-blue": "#182859",
        "primary-brown": "#260F01",
      },
    },
  },
  plugins: [],
};
