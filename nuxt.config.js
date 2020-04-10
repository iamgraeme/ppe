module.exports = {
  mode: 'universal',

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  generate: {
    routes: ['/category/:slug', '/product/:slug']
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#39A169', height: '4px', throttle: 0 },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/transition.css', '~/assets/css/material.css'],
  router: {
    middleware: 'authenticated'
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/owl.js', mode: 'client' },
    { src: '~/plugins/drift.js', mode: 'client' },
    { src: '~/plugins/snotify.js', mode: 'client' },
    '~/plugins/filters.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      '@nuxtjs/axios',
      {
        baseURL: 'https://api.purplepeopleeater.co.uk/wp-json',
        headers: {
          common: {
            Accept: 'application/json, text/plain, */*'
          }
        }
      }
    ],
    [
      'nuxt-facebook-pixel-module',
      {
        /* module options */
        track: 'PageView',
        pixelId: '1234567',
        disabled: false
      }
    ],
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/moment',
    'vue-scrollto/nuxt',
    ['nuxt-validate']
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    https: true,
    headers: {
      common: {
        Accept: 'application/json'
      }
    }
  },

  moment: {
    timezone: {
      matchZones: /Europe\/(Belfast|London|Paris|Athens)/
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
    }
  }
}
