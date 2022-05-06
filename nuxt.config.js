export default {
  server: {
    port: 8000
  },
  head: {
    title: 'Garcia Tandela | Software Engineer',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      { name: 'author', content: 'Garcia Tandela' },
      {
        name: 'keywords',
        content:
          'Garcia Tandela | Software Engineer Portfolio including frontend, backend, mobile and database projects for service request or hire'
      },
      { name: 'reply-to', content: 'garciatandela@gmail.com' },
      { name: 'owner', content: 'Garcia Tandela' },
      {
        name: 'copyright',
        content:
          'Direito Autoral © Garcia Tandela 2022. Todos os direitos reservados.'
      },
      { 'http-equiv': 'content-language', content: 'en-us' },
      {
        'http-equiv': 'content-type',
        content: 'text/html',
        charset: 'iso-8859-1'
      },
      { name: 'rating', content: 'General' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon1.ico' },
      {
        rel: 'preload',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons&display=swap',
        as: 'font',
        onload: "this.onload=null;this.rel='stylesheet'"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Runtime for env variables
   */
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/fonts/systemui.css', '@/assets/css/main.css'],
  plugins: [
    '~/plugins/Vuelidate',
    '~/plugins/Bus',
    '~/plugins/mixins/Validation',
    {
      src: './plugins/axios-global-header.js',
      mode: 'client'
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Nuxt.js modules
   */
  vuetify: {
    customVariables: ['~/assets/scss/vuetify/variables.scss']
    // treeShake: true
  },
  styleResources: {
    scss: ['~assets/scss/main.scss']
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
    '@nuxtjs/robots',
    'nuxt-helmet',
    '@nuxtjs/component-cache',
    ['vue-scrollto/nuxt', { duration: 3000 }],
    '@nuxtjs/sitemap'
  ],
  robots: {
    UserAgent: '*'
  },
  axios: {
    proxy: true,
    progress: false
  },
  proxy: {
    '/api/': {
      target: process.env.API,
      pathRewrite: { '^/api/': '' },
      changeOrigin: true
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    },
    transpile: ['vue-clamp', 'resize-detector'],
    extend(config, ctx) {}
  },
  sitemap: {
    hostname: 'https://garciatandela.com',
    gzip: true
  }
}
