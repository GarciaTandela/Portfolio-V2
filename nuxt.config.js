export default {
  /* server: {
    port: 8000
  }, */
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
      },
      {
        rel: 'preload',
        href: 'https://fonts.googleapis.com/css?family=Amatic+SC&display=swap',
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
  plugins: ['~/plugins/Vuelidate', '~/plugins/mixins/Validation'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa'
  ],
  /*
   ** Nuxt.js modules
   */
  pwa: {
    meta: {
      /* meta options */
      theme_color: '#0a1930'
    },
    manifest: {
      name: 'Garcia Tandela | Software Engineer',
      short_name: 'GT Portfolio',
      description: 'Garcia Tandela Personal Portfolio',
      background_color: '#0a1930',
      lang: 'en',
      useWebmanifestExtension: false
    },
    workbox: {
      offlineStrategy: 'StaleWhileRevalidate',
      /* offlineAssets: ['/lang/.*'], */
      enabled: true,
      runtimeCaching: [
        {
          urlPattern: 'https://fonts.googleapis.com/.*',
          handler: 'StaleWhileRevalidate'
        },
        {
          urlPattern: 'https://img.icons8.com/.*',
          handler: 'StaleWhileRevalidate'
        },
        {
          urlPattern: 'https://images.ctfassets.net/.*',
          handler: 'StaleWhileRevalidate'
        },
        {
          urlPattern: 'https://d2.alternativeto.net/.*',
          handler: 'StaleWhileRevalidate'
        },
        {
          urlPattern: 'https://dashboard.snapcraft.io/.*',
          handler: 'StaleWhileRevalidate'
        },
        {
          urlPattern: 'https://pbs.twimg.com/.*',
          handler: 'StaleWhileRevalidate'
        },
        {
          urlPattern: 'https://d2eip9sf3oo6c2.cloudfront.net/.*',
          handler: 'StaleWhileRevalidate'
        },
        {
          urlPattern: 'https://thedeveloperworldisyours.com/.*',
          handler: 'StaleWhileRevalidate'
        },
        {
          urlPattern: 'https://media-exp1.licdn.com/.*',
          handler: 'StaleWhileRevalidate'
        }
      ]
    }
  },
  vuetify: {
    customVariables: ['~/assets/scss/vuetify/variables.scss']
    // treeShake: true
  },
  styleResources: {
    scss: ['~assets/scss/main.scss']
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/robots',
    'nuxt-helmet',
    '@nuxtjs/component-cache',
    '@nuxtjs/sitemap',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            name: 'English',
            code: 'en',
            iso: 'en-US',
            file: 'en-US.js'
          },
          {
            name: 'Spanish',
            code: 'es',
            iso: 'es-SP',
            file: 'es-SP.js'
          },
          {
            name: 'French',
            code: 'fr',
            iso: 'fr-FR',
            file: 'fr-FR.js'
          },
          {
            name: 'Portuguese',
            code: 'pt',
            iso: 'pt-PT',
            file: 'pt-PT.js'
          }
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'en'
      }
    ]
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
