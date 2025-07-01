import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "es",
  fallbackLng: "es",
  resources: {
    es: {
      translation: {
        buttonRM: "Personajes de Rick y Morty",
        buttonHP: "Personajes de Harry Potter",
        language: "Idioma",
        loadingModule: "Cargando módulo...",
        title: "Descubrí a tus personajes favoritos",
        description: "Elegí una serie y conocé a sus personajes principales",
        filter_placeholder: "Buscar por Nombre",
      },
    },
    en: {
      translation: {
        buttonRM: "Rick and Morty Characters",
        buttonHP: "Harry Potter Characters",
        language: "Language",
        loadingModule: "Loading module...",
        title: "Discover your favorite characters",
        description: "Choose a series and met its main characters",
        filter_placeholder: "Search by Name",
      },
    },
  },
  interpolation: {
    escapeValue: false,
  },  
});

export default i18n;
