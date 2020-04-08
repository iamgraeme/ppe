/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      opacity: {
        10: '.1',
        20: '.2',
        30: '.3',
        40: '.4',
        50: '.5',
        60: '.6',
        70: '.7',
        80: '.8',
        90: '.9'
      },
      colors: {
        cta: '#F7931E'
      },
      spacing: {
        image: '791px',
        panel: '700px',
        72: '18rem',
        84: '21rem',
        96: '24rem'
      },
      fontSize: {
        xxs: '0.65rem'
      },
      inset: {
        2: '2px',
        3: '3px',
        5: '5px',
        10: '10px',
        20: '20px',
        25: '25px',
        '-5': '-10px',
        '-10': '-10px',
        '-20': '-20px',
        '-30': '-30px',
        100: '100px'
      },
      fontFamily: {
        sans: ['Poppins']
      }
    }
  },
  variants: {},
  plugins: []
}
