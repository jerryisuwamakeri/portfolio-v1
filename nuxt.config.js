
export default {
  target: 'static',
  server: {
    port: 8000,
    host: '0.0.0.0',
  },
  head: {
    title: 'Makeri, Jerry Isuwa — Fullstack Engineer & Backend Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { name: 'theme-color', content: '#191a1f' },
    ],
    link: [
      { rel: 'icon', type: 'image/jpeg', href: '/image.jpg' },
      { rel: 'apple-touch-icon', href: '/image.jpg' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css'
      }
    ]
  },
  loading: { color: '#42b0ff' },
  css: [
    '@/assets/css/tailwind.css',
  ],
  plugins: ['~/plugins/theme.client.js'],
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  modules: [],
  build: {
    postcss: {
      preset: {
        stage: 1
      }
    },
    extractCSS: true,
    extend (config, ctx) {}
  },
  generate: {
    fallback: true
  }
}
