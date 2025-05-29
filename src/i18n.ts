import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import homeEN from './locales/en/home.json';
import homeFR from './locales/fr/home.json';
import homeDE from './locales/de/home.json';

import aboutEN from './locales/en/about.json';
import aboutFR from './locales/fr/about.json';
import aboutDE from './locales/de/about.json';

import worksEN from './locales/en/works.json';
import worksFR from './locales/fr/works.json';
import worksDE from './locales/de/works.json';

const resources = {
  en: {
    home: homeEN,
    about: aboutEN,
    works: worksEN,
  },
  fr: {
    home: homeFR,
    about: aboutFR,
    works: worksFR,
  },
  de: {
    home: homeDE,
    about: aboutDE,
    works: worksDE,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: ['en-US', 'fr-FR', 'de-DE'],
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
