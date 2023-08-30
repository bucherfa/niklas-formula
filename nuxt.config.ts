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
      theme_color: '#ffffff'
    }
  },
  css: ['~/assets/main.css', '~/node_modules/@csstools/normalize.css/opinionated.css']
})
