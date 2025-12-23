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
      Узнать больше
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
    showButton.value = window.scrollY >= 80;
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
