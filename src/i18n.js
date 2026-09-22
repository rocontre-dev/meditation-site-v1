import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';

const resources = {
  en: {
    translation: translationEN
  }
};

// English-only website (Canadian market).
// No language detector is registered, so nothing reads or writes `i18nextLng`.
// The runtime language is pinned explicitly: a stale `i18nextLng=es` value left
// in a returning visitor's localStorage therefore has no effect.
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    supportedLngs: ['en'],
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;