const path = require('path');
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'idl',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,700|Material+Icons' }
    ]
  },
  modules: [ '@nuxtjs/axios', 'nuxtent'],
  plugins: ['~/plugins/vuetify.js'],
  css: [
    {
      src: path.join(__dirname, 'node_modules/vuetify/dist/vuetify.min.css'),
      lang: 'styl'
    },
    '@/assets/style/content.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: [
      '~/plugins/vuetify.js'
    ],
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
