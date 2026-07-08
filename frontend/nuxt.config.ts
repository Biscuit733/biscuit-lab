export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'biscuitLab',
      meta: [
        { name: 'description', content: 'A dark creative personal blog, gallery, and web lab.' }
      ]
    }
  },
  compatibilityDate: '2024-10-01'
})
