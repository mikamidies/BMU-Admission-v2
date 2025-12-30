<template>
  <TheHeader />
  <HeroBlock />
  <PartnersBlock />
  <AboutBlock />
  <BenefitsBlock />
  <ProgramBlock />
  <FacultyBlock />
  <!-- <LifeBlock /> -->
  <RequestForm />
  <transition name="fade">
    <button
      class="fixed-button"
      v-show="showButton"
      @click="scrollTo('request')"
    >
      Пройти Регистрацию
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showButton = ref(false);

let scrollHandler = null;

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  isMenuOpen.value = false;
};

onMounted(() => {
  scrollHandler = () => {
    const facultyBlock =
      document.querySelector(".faculty") || document.getElementById("faculty");

    if (facultyBlock) {
      const facultyTop =
        facultyBlock.getBoundingClientRect().top + window.scrollY;
      const buttonHeight = 60; // примерная высота кнопки
      const scrollPosition = window.scrollY + window.innerHeight - buttonHeight;

      showButton.value = window.scrollY >= 80 && scrollPosition < facultyTop;
    } else {
      showButton.value = window.scrollY >= 80;
    }
  };
  window.addEventListener("scroll", scrollHandler);
});

onUnmounted(() => {
  if (scrollHandler) {
    window.removeEventListener("scroll", scrollHandler);
  }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
