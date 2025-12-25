<template>
  <TheHeader />
  <HeroBlock />
  <PartnersBlock />
  <AboutBlock />
  <BenefitsBlock />
  <ProgramBlock />
  <!-- <FacultyBlock /> -->
  <LifeBlock />
  <RequestForm />
  <transition name="fade">
    <button
      class="fixed-button bachelors-button"
      v-show="showButton"
      @click="scrollTo('request')"
    >
      Узнать больше
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import TheHeader from "@/components/Bachelors/TheHeader.vue";
import HeroBlock from "@/components/Bachelors/HeroBlock.vue";
import PartnersBlock from "@/components/Bachelors/PartnersBlock.vue";
import AboutBlock from "@/components/Bachelors/AboutBlock.vue";
import BenefitsBlock from "@/components/Bachelors/BenefitsBlock.vue";
import ProgramBlock from "@/components/Bachelors/ProgramBlock.vue";
import LifeBlock from "@/components/Bachelors/LifeBlock.vue";
import RequestForm from "@/components/Bachelors/RequestForm.vue";

const showButton = ref(false);

let scrollHandler = null;
let requestSection = null;

const updateButtonVisibility = () => {
  const scrollY = window.scrollY || 0;
  const requestTop = requestSection
    ? requestSection.getBoundingClientRect().top + window.scrollY
    : Infinity;
  showButton.value = scrollY >= 80 && scrollY < requestTop;
};

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  isMenuOpen.value = false;
};

onMounted(() => {
  requestSection = document.getElementById("life");
  scrollHandler = updateButtonVisibility;
  updateButtonVisibility();
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
