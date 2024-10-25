// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Software Engineer, Designer, and Musician' }
      ]
    }
  },
  modules: [
      '@nuxtjs/tailwindcss'
  ],

  compatibilityDate: '2024-10-24'
})