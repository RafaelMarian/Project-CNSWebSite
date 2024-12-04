// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    'nuxt-quasar-ui',
  ],
  quasar: {
    plugins: ['Notify'],
    extras: {
      fontIcons: ['material-icons'],
    },
    config: {
      brand: {
        primary: '#a52518',
      },
    },
  },
})
