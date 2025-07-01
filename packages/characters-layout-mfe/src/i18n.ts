import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "es",
  fallbackLng: "es",
  resources: {
    es: {
      translation: {
        loading: "Cargando Personajes...",
        
      },
    },
    en: {
      translation: {
        loading: "Loading Characters...",
      },
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
