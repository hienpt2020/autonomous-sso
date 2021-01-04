import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Constant } from 'src/common/constant';

const enResource = require('./en-us.json');

i18n.use(initReactI18next).init({
  debug: false,
  fallbackLng: false,
  lng: Constant.DEFAULT_LANGUAGE,
  resources: {
    en: {
      translation: enResource,
    },
  },
  interpolation: {
    escapeValue: false,
  },
  saveMissing: true,
  saveMissingTo: 'current',
  react: {
    bindI18n: 'languageChanged editorSaved',
  },
});

export default i18n;
