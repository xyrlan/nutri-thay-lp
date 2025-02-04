// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Thaynara Andrade - Nutricionista',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Nutricionista especializada em nutrição comportamental' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { 
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap'
        }
      ]
    }
  }
})
