import { auth, naiveui, tailwindcss, s3 } from './config'

export default defineNuxtConfig({
  ssr: true,

  devtools: { enabled: false },

  app: {
    head: {
      title: 'Resume Builder',
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', href: '/icon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap'
        }
      ],
      meta: [
        { name: 'description', content: 'Resume Builder' },
        { name: 'theme-color', content: '#18181B' }
      ]
    }
  },

  modules: [
    '@bg-dev/nuxt-auth',
    '@bg-dev/nuxt-naiveui',
    '@nuxtjs/tailwindcss',
    'nuxt-s3'
  ],

  auth,
  naiveui,
  tailwindcss,
  s3
})
