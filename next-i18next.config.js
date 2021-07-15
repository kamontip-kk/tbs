module.exports = {
  i18n: {
    react: { useSuspense: false },
    browserLanguageDetection: false,
    serverLanguageDetection: false,
    localeDetection: false,
    defaultLocale: 'th',
    locales: ['en', 'th'],
    keySeparator: '::',
    nsSeparator: ':::',
    domains: [
      {
        domain: 'localhost:3000',
        defaultLocale: 'en',
      },
    ],
  },
};