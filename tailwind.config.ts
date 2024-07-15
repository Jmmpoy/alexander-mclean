module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Futura", "Arial", "sans-serif"],
      mono: ["Lucida Console", "Courier", "monospace"],
      neueLight: ["Neue-Light"],
      neueRegular: ["Neue-Regular"],
      neueMedium: ["Neue-Medium"],
      neueBold: ["Neue-Bold"],
      futuraLight: ["Futura-Light"],
      foundersLight: ["FoundersLight"],
      founders: ["Founders"],
      //light
      sohneBuch:["Sohne-Buch"],
      sohneFett:["Sohne-Fett"],
      sohneKraftig:["Sohne-Kraftig"],
      //bold
      sohneHalbfett:["Sohne-Halbfett"]
    },
    screens: {
      xsm: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "2000px",
    },
    extend: {
      colors: {
        black: "#000",
        white: "#fcfbfa",
        beige:"#f2eeea",
        gray: "#888888",
        blue: "#2159A7",
        lightBlue:"#F6F7FB"
      },
    },
  },
  plugins: [],
};