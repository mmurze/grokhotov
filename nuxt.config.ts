// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    'nuxt-icons',
    "@nuxtjs/google-fonts",
    'nuxt3-vuex-module'
  ],
  googleFonts: {
    families: {
      Roboto: true,
      Lato: true,
    }
  }
})
