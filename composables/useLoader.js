import { ref } from "vue";

const isLoading = ref(false);
let loadingTimeout = null;

export const useLoader = () => {
  const show = (minDuration = 1000) => {
    isLoading.value = true;

    // Очищаем предыдущий таймаут если есть
    if (loadingTimeout) {
      clearTimeout(loadingTimeout);
    }

    // Показываем лоадер минимум на указанное время
    loadingTimeout = setTimeout(() => {
      isLoading.value = false;
    }, minDuration);
  };

  const hide = () => {
    if (loadingTimeout) {
      clearTimeout(loadingTimeout);
    }
    isLoading.value = false;
  };

  return {
    isLoading,
    show,
    hide,
  };
};
