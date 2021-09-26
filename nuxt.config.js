
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '../css/main.css' }
    ]
  },

target: 'server',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
        { src: '~/plugins/VueAwesomeSwiper.js', mode: 'client'  },
        { src: '~/plugins/vue-type.js', mode: 'client'  },
        { src: '~/plugins/vue2-editor.js', mode: 'client'  },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',

  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},


serverMiddleware: [
'~/api/server.js'
],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
babel: {
compact: true
}
  },
auth: {
strategies: {
local: {
endpoints: {
login: {
propertyName: 'token'
},
logout: true
}
}
}
}
}
