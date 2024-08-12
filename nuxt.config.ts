// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-icons', "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      // Roboto: true,
      Inter: true,
      // Lato: true,
      // Inter: '200..700',
      // 'Crimson Pro': {
      //   wght: '200..900',
      //   ital: '200..700',
      // }
    }
  }
})
