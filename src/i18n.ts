import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "lang": "EN"
        }
      },
      vi: {
        translation: {
          "lang": "VI"
        }
      }
    },
    lng: "vi",
    fallbackLng: "vi",

    interpolation: {
      escapeValue: false
    }
  });
export default i18n
