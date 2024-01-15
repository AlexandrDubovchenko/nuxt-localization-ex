export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome',
      contact: 'Contact',
    },
    fr: {
      welcome: 'Bienvenue',
      contact: 'Contact France',
    },
  },
}));
