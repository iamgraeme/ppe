/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      fontSize: {
        xxs: "0.65rem"
      },
      inset: {
        "2": "2px",
        "3": "3px",
        "5": "5px",
        "10": "10px",
        "20": "20px",
        "25": "25px",
        "-10": "-10px",
        "-20": "-20px",
        "-30": "-30px"
      },
      fontFamily: {
        sans: ["Poppins"]
      }
    }
  },
  variants: {},
  plugins: []
};
