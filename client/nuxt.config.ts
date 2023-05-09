// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  app: {
    head: {

    },
  },
  css: [
    '~/assets/scss/main.scss',
    '~/assets/scss/reset.scss',
  ]
})
