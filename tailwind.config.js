/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: "#18191A",
        light: "#E9EEF3",
        primary: "#D9003D",
        primaryDark: "#80002F",
      },
      animation: {
        'spin-slow': 'spin 9s linear infinite',
      },
      backgroundImage: {
        'home': "url('../../public/images/backgrounds/home.jpeg')",
        'overview': "url('../../public/images/backgrounds/bg.png')",
        'about': "url('../../public/images/backgrounds/about.jpg')",
        'projects': "url('../../public/images/backgrounds/projects.jpg')",
        'team': "url('../../public/images/backgrounds/team.jpg')"
      }
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
  },
  plugins: [],
};