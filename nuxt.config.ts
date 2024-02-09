// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/test-utils/module"],
  app: {
    head :{
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Nuxt Shopify",
    }
  },
  pinia: {
    storesDirs: ["./stores/**"]
  },
  imports: {
    dirs: ["./stores"]
  },
  sourcemap: false,
})
