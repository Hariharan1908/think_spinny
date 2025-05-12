module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          orange: "#f27516",
          dark: "#2d2d2d",
          white: "#ffffff",
          gray: {
            100: "#f8f8fb",
            200: "#eff2f6",
            300: "#d9d9d9",
            400: "#8f8f8f",
            500: "#4c4c4c",
            600: "#68615a",
          },
        },
        background: {
          light: "#fff4ed",
          lighter: "#fff9ef",
          lightest: "#fbfbfb",
        }
      },
      fontFamily: {
        'sf-pro': ['SF Pro', 'sans-serif'],
        'bricolage': ['Bricolage Grotesque', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'hanken': ['Hanken Grotesk', 'sans-serif'],
      },
      fontSize: {
        '4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '8rem',
        'huge': '25rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};