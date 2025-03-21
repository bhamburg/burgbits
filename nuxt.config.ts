// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'en'
      },
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Software Engineer, Designer, and Musician' }
      ],
      bodyAttrs: {
        class: 'dark:text-white dark:bg-zinc-800 transition',
      },
    },
  },
  devtools: {enabled: true},
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-content-assets',
    'nuxt-gtag',
  ],
  postcss: {
    plugins: {
      'postcss-custom-media': {},
      'postcss-nested': {},
      'postcss-simple-vars': {},
    }
  },
  compatibilityDate: '2024-10-24',
  gtag: {
    id: 'G-30HMKNVJE0',
  }
})