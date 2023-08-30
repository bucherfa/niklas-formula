// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/niklas-formula/'
  },
  ssr: true,
  devtools: { enabled: true },
  modules: [
    '@kevinmarrec/nuxt-pwa'
  ],
  pwa: {
    icon: {
      source: './assets/icon.png'
    },
    manifest: {
      name: 'Niklas-Formel',
      short_name: 'Niklas-Formel',
      description: 'Calculate hiking time based on distance, ascent and descent.',
      theme_color: '#008B8B',
      background_color: '#ffffff',
    }
  },
  css: ['~/assets/main.css', '~/node_modules/@csstools/normalize.css/opinionated.css']
})
