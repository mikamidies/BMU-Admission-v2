<template>
  <TheHeader />
  <HeroBlock id="hero" />
  <PartnersBlock id="partners" />
  <AboutBlock id="about" />
  <BenefitsBlock id="benefits" />
  <ProgramBlock id="program" />
  <FacultyBlock id="faculty" />
  <!-- <LifeBlock id="life" /> -->
  <RequestForm id="request" />
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
.fixed-button {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--black);
  color: white;
  border: none;
  padding: 18px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  z-index: 1000;
  width: calc(100% - 40px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
