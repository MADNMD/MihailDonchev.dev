import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import bgTranslation from '../locales/bgTranslation.json';
import enTranslation from '../locales/enTranslation.json';

const savedLanguage = localStorage.getItem('language') || 'bg';

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: enTranslation },
        bg: { translation: bgTranslation }
    },
    lng: savedLanguage,
    fallbackLng: 'bg',
    interpolation: {
        escapeValue: false,
    }
});