
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
      { rel: 'icon', type: 'image/png', href: '/image.jpg' }
    ]
  },
  loading: { color: '#0083FF' },
  css: [
    '@/assets/css/tailwind.css',
  ],
  plugins: [
  ],
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  modules: [
  ],
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
