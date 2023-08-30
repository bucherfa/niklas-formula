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
})
