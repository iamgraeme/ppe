import WooCommerceAPI from '@woocommerce/woocommerce-rest-api'

export const api = new WooCommerceAPI({
  url: 'https://api.purplepeopleeater.co.uk',
  consumerKey: 'ck_8d450139382c5dc8293107cd7e3710c80ef962c1',
  consumerSecret: 'cs_40ab04189e95016e6b646d5ee5aae0a0801959e5',
  queryStringAuth: true,
  version: 'wc/v3'
})
