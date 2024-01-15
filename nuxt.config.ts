export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],

  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
    locales: [
      {
        code: 'en',
        domain: 'test.domain.com',
      },
      {
        code: 'fr',
        domain: 'test.domain.fr',
      },
    ],
    pages: {
      contact: {
        en: '/contact',
        fr: '/contactfr',
      },
    },
    differentDomains: true,
    detectBrowserLanguage: false,
  },
  devServer: {
    host: '127.0.0.1',
    port: 80,
  },
});
