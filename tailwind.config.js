/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "light-bg-white": "#F5F5F5",
        "light-bg-gray": {
          100: "#ECECEC",
          200: "#D9D9D9",
        },
        "light-bg-red": {
          100: "#FD867B",
          200: "#FF6F61",
        },
        "light-fg-black": "#343434",
        "light-fg-gray": "#757575",
        "light-fg-red": "#FF6F61",
        
        "dark-bg-black": "#121212",
        "dark-bg-gray": {
          100: "#333333",
          200: "#444444",
        },
        "dark-bg-red": "#E55A50",
        "dark-fg-white": "#EAEAEA",
        "dark-fg-gray": "#CFCFCF",
        "dark-fg-red": "#E55A50",
      },
    },
  },
  plugins: [],
};
