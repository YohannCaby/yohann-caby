// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  compatibilityDate: "2024-10-30",
  modules: ["vuetify-nuxt-module","@pinia/nuxt"],
})