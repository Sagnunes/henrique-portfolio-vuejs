import withMT from "@material-tailwind/html/utils/withMT";

/** @type {import('tailwindcss').Config} */
module.exports = withMT( {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "365px",
      sm: '640px',
      md: '768px',
      lg: "960px",
      xl: "1160px",
      '2xl': "1536px",
    },
    extend: {
      colors: {
        "dark-gray": "hsl(0, 0%, 55%)",
        "very-dark-gray": "hsl(0, 0%, 41%)",
      },
      fontFamily: {
        headline: ['"Josefin Sans"', 'sans-serif'],
        sans: ["Alata", 'sans-serif'],
      },
      fontSize: {
        base: ["0.9375rem", "1.65"],
      },
      spacing: {
        5.5: "1.375rem",
        7.5: "1.875rem",
        32.25: "8.0625rem",
        34: "8.5rem",
        40.5: "10.125rem",
      },
    },
  },
  plugins: [],
})