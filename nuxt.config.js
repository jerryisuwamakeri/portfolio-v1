
export default {
  target: 'static',
  server: {     
    port: 8000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'static\image.jpg' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'static\image.jpg' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: 'static\image.jpg' }
    ]
  },
  loading: { color: '#0083FF' },
  css: [
    '@/assets/css/tailwind.css',
  ],
  plugins: [
  ],
  buildModules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-analytics', {
      id: 'UA-42412883-2'
    }]
  ],
  modules: [
  ],
  sitemap: {
    hostname: 'https://makerijerry.com'
  },
  build: {
    postcss: {
      preset: {
        stage: 1
      }
    },
    extractCSS: true,
    extend (config, ctx) {
    }
  },
  generate: {
    fallback: true
  }
}
