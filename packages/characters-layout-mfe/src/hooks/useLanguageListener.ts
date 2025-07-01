import { useEffect } from 'react';
import { i18n } from 'i18next';

export const useLanguageListener = (i18nInstance: i18n) => {
  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent<{ lang: string }>) => {
      const newLang = event.detail.lang;
      if (newLang && i18nInstance.language !== newLang) {
        i18nInstance.changeLanguage(newLang);
      }
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);

    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, [i18nInstance]);
};