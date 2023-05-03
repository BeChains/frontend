/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "press-start": ["'Press Start 2P', cursive"],
      "david-libre": ["'David Libre', serif"],
      'juanyy': ['ZCOOL QingKe HuangYou', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
};
