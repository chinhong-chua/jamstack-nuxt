// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      [
        '@storyblok/nuxt',
        {
                  accessToken: process.env.SB_API_TOKEN,
                  // If Server Location === US then:
                  // apiOptions: { region: 'us' }
              },
             
      ],
      '@nuxtjs/tailwindcss'
    ],
    experimental: {
      payloadExtraction: false
    }
  
  })