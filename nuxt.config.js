
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
      { name: 'theme-color', content: '#0A0A0A' },
    ],
    link: [
      { rel: 'icon', type: 'image/jpeg', href: '/image.jpg' },
      { rel: 'apple-touch-icon', href: '/image.jpg' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap'
      }
    ]
  },
  loading: { color: '#22D3EE' },
  css: [
    '@/assets/css/tailwind.css',
  ],
  plugins: [],
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
