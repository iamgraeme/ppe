import Vue from 'vue'

/**
 * Parses product price to add locale currency symbol and decimal style
 * @date 2020-03-24
 * @param {string} value
 * @returns {string}
 */
Vue.filter('pound', function (value) {
  return value.toLocaleString('en-GB', {
    style: 'currency',
    currency: 'GBP'
  })
})

/**
 * Turns slug into Human Readable string
 * @date 2020-03-24
 * @param {string} value
 * @returns {string}
 */
Vue.filter('prettify', function (value) {
  return value.replace(/(-|^)([^-]?)/g, function (_, prep, letter) {
    return (prep && ' ') + letter.toUpperCase()
  })
})

/**
 * Handles how to pluralize customer reviews
 * @date 2020-03-24
 * @param {string} value
 * @returns {string}
 */
Vue.filter('pluralize', function (value) {
  let word = 'Customer Reviews'
  const rating = parseInt(value)
  if (parseInt(value) === 1) {
    word = 'Customer Review'
  }
  return rating + ' ' + word
})

/**
 * Calculates VAT amount from gross price | checkout
 * @date 2020-03-24
 * @param {number} value
 * @returns {number}
 */
Vue.filter('VatAmountFromGross', function (value) {
  var vat = 0.2
  const subtotal = value / (1 + 1 / vat)

  return subtotal.toLocaleString('en-GB', {
    style: 'currency',
    currency: 'GBP'
  })
})

/**
 * Calculates VAT amount from net price | checkout
 * @date 2020-03-24
 * @param {number} value
 * @returns {number}
 */
Vue.filter('VatAmountFromNet', function (value) {
  var vat = 0.2
  const subtotal = value / (1 + 1 / vat)
  const total = value - subtotal

  return total.toLocaleString('en-GB', {
    style: 'currency',
    currency: 'GBP'
  })
})
/**
 * Calculates VAT amount from net price | checkout
 * @date 2020-03-24
 * @param {number} value
 * @returns {number}
 */
Vue.filter('slugify', function (value) {
  value = value.replace(/^\s+|\s+$/g, '') // trim
  value = value.toLowerCase()

  // remove accents, swap ñ for n, etc
  var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
  var to = 'aaaaeeeeiiiioooouuuunc------'
  for (var i = 0, l = from.length; i < l; i++) {
    value = value.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  value = value
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

  return value
})
