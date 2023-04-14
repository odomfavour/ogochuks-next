/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "san-serif"],
      },
      backgroundColor: {
        "skills": "linear-gradient(45deg, #000000c9, #000000c7)"
      },
      boxShadow: {
        'addr': "0 5px 4px rgba(0,0,0,.3)"
      }
    },
  },
  plugins: [],
}