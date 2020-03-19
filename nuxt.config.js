module.exports = {
  mode: "universal",

  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000"
  },

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#39A169", height: "4px", throttle: 0 },
  /*
   ** Global CSS
   */
  css: ["~/assets/css/transition.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/owl.js", ssr: false }, "~/plugins/axios.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "@nuxtjs/axios",
      {
        baseURL: "https://api.purplepeopleeater.co.uk/wp-json"
      }
    ],
    "@nuxtjs/pwa",
    "@nuxtjs/dotenv",
    "@nuxtjs/auth",
    "vue-scrollto/nuxt"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    https: true,
    headers: {
      common: {
        Accept: "application/json"
      }
    }
  },

  auth: {
    redirect: {
      login: "/auth",
      logout: "/",
      callback: "/auth",
      home: "/"
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/jwt-auth/v1/token",
            method: "post",
            propertyName: "token"
          },
          logout: false,
          user: false
        }
        // tokenRequired: true,
        // tokenType: 'bearer'
        // autoFetchUser: true
      }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
