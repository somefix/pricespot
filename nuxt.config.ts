// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'PriceSpot',
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Мониторинг и анализ цен' },
        { name: 'yandex-verification', content: '33c3912e70b35d1f' },
      ],
    },
    baseURL: process.env?.BASE_URL ?? '/',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@artmizu/yandex-metrika-nuxt',
  ],
  yandexMetrika: {
    // @ts-ignore
    id: process.env.YANDEX_METRIKA_ID,
    initParams: {
      webvisor:true,
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
    },
  },
})
