export default {
  mode: "universal",
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
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/scss/custom.scss", "~/assets/css/main.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/firebase.js",
    { src: "~/plugins/localStorage.js", ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "bootstrap-vue/nuxt",
    "@nuxtjs/auth",
    "@nuxtjs/firebase"
  ],
  firebase: {
    config: {
      production: {
        apiKey: "AIzaSyC_VkdWgzHEpur_4m8OvRSR_HA8EJkya0E",
        authDomain: "covid-19-idcamp.firebaseapp.com",
        databaseURL: "https://covid-19-idcamp.firebaseio.com",
        projectId: "covid-19-idcamp",
        storageBucket: "covid-19-idcamp.appspot.com",
        messagingSenderId: "158205077953",
        appId: "1:158205077953:web:ce03d56fd8e487766fe740",
        measurementId: "G-C4RSNDCMKK"
      },
      development: {
        apiKey: "AIzaSyC_VkdWgzHEpur_4m8OvRSR_HA8EJkya0E",
        authDomain: "covid-19-idcamp.firebaseapp.com",
        databaseURL: "https://covid-19-idcamp.firebaseio.com",
        projectId: "covid-19-idcamp",
        storageBucket: "covid-19-idcamp.appspot.com",
        messagingSenderId: "158205077953",
        appId: "1:158205077953:web:ce03d56fd8e487766fe740",
        measurementId: "G-C4RSNDCMKK"
      }
    },
    services: {
      auth: {
        persistence: 'local',
        initialize: {
          onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
          // onAuthStateChangedAction: 'onAuthStateChangedAction'
        },
        ssr: {
          ignorePaths: [
            '/auth/'
          ]
        }
      }
    },
    messaging: {
      createServiceWorker: true
    }
  },
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    icons: true
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  router: {
    middleware: ['login']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
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
