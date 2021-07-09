const NextI18Next = require('next-i18next').default;
module.exports = new NextI18Next({
  browserLanguageDetection: false,
  serverLanguageDetection: false,
  defaultLanguage: 'th',
  otherLanguages: ['en', 'th'],
  nsSeparator: ':::',
  keySeparator: '::'
});