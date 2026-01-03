import { ref, computed } from "vue";
import ru from "~/locales/ru";
import en from "~/locales/en";
import uz from "~/locales/uz";

const messages = {
  ru,
  en,
  uz,
};

const STORAGE_KEY = "bmu-locale";
const DEFAULT_LOCALE = "ru";

// Глобальное состояние языка
const currentLocale = ref(DEFAULT_LOCALE);

export const useI18n = () => {
  // Инициализация из localStorage (только на клиенте)
  const initLocale = () => {
    if (process.client) {
      const savedLocale = localStorage.getItem(STORAGE_KEY);
      if (savedLocale && messages[savedLocale]) {
        currentLocale.value = savedLocale;
      }
    }
  };

  // Получить перевод по ключу
  const t = (key) => {
    const currentMessages = messages[currentLocale.value];

    // Сначала пробуем найти ключ напрямую (для формата "hero.slogan1": "текст")
    if (currentMessages && currentMessages[key]) {
      return currentMessages[key];
    }

    // Если не нашли, пробуем как вложенный объект
    const keys = key.split(".");
    let value = currentMessages;

    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k];
      } else {
        return key; // Вернуть ключ если перевод не найден
      }
    }

    return value || key;
  };

  // Изменить язык
  const setLocale = (locale) => {
    if (messages[locale]) {
      // Показываем лоадер при смене языка
      if (process.client) {
        const { show } = useLoader();
        show(1000);
      }

      currentLocale.value = locale;
      if (process.client) {
        localStorage.setItem(STORAGE_KEY, locale);
      }
    }
  };

  // Доступные языки
  const availableLocales = ["ru", "en", "uz"];

  const localeNames = {
    ru: "Русский",
    en: "English",
    uz: "O'zbek",
  };

  return {
    t,
    locale: computed(() => currentLocale.value),
    setLocale,
    availableLocales,
    localeNames,
    initLocale,
  };
};
