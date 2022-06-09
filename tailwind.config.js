module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "820px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      spacing: {
        100: "25rem",
      },
      padding: {
        "96%": "55%",
      },
      maxWidth: {
        100: "25rem",
      },
      fontFamily: {
        sans: ["Poppins"],
      },
      width: {
        "15/10": "150%",
      },
      flex: {
        2: "2 2 0%",
        "1/2": "0 1 50%",
      },
      letterSpacing: {
        byvets: "-0.037em",
      },
      colors: {
        "midnight-blue": {
          DEFAULT: "#002E6D",
          50: "#549CFF",
          100: "#3A8DFF",
          200: "#0770FF",
          300: "#0059D3",
          400: "#0044A0",
          500: "#002E6D",
          600: "#00183A",
          700: "#000307",
          800: "#000000",
          900: "#000000",
        },
        trinidad: {
          DEFAULT: "#E65300",
          50: "#FFDFCC",
          100: "#FFCEB3",
          200: "#FFAE80",
          300: "#FF8D4D",
          400: "#FF6D1A",
          500: "#E65300",
          600: "#B34100",
          700: "#802E00",
          800: "#4D1C00",
          900: "#1A0900",
        },
        blueish: {
          DEFAULT: "#C0DAFF",
          50: "#FFFFFF",
          100: "#FDFEFF",
          200: "#EEF5FF",
          300: "#DFECFF",
          400: "#CFE3FF",
          500: "#C0DAFF",
          600: "#88B9FF",
          700: "#5098FF",
          800: "#1877FF",
          900: "#005CDF",
        },
        orangish: {
          DEFAULT: "#FFEBD9",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#FFEBD9",
          600: "#FFD0A6",
          700: "#FFB573",
          800: "#FF9A40",
          900: "#FF800D",
        },
        "blue-gray": {
          DEFAULT: "#5977A0",
          50: "#EBEFF4",
          100: "#DAE1EB",
          200: "#BAC7D8",
          300: "#99ACC6",
          400: "#7891B4",
          500: "#5977A0",
          600: "#475F7F",
          700: "#35465E",
          800: "#222E3E",
          900: "#10161D",
        },
        "waikawa-gray": {
          DEFAULT: "#5977A0",
          50: "#CDD7E3",
          100: "#C0CCDC",
          200: "#A6B7CD",
          300: "#8CA1BF",
          400: "#728CB0",
          500: "#5977A0",
          600: "#455C7C",
          700: "#314158",
          800: "#1D2734",
          900: "#090C10",
        },

        grayts: {
          DEFAULT: "#E7E8F1",
          500: "#E7E8F1",
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
      backgroundColor: ["disabled"],
      borderColor: ["disabled", "hover", "group-hover"],
      border: ["first", "hover", "group-hover"],
      borderWidth: ["first"],
      visibility: ["group-hover"],
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen lg": {
            maxWidth: "1140px",
          },
          "@screen xl": {
            maxWidth: "1140px",
          },
          "@screen 2xl": {
            maxWidth: "1140px",
          },
        },
      });
    },
  ],
};
