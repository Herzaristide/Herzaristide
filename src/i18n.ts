import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import fr from './locales/fr.json';
import de from './locales/de.json';

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  de: { translation: de },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: ['en', 'fr', 'de'],
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
