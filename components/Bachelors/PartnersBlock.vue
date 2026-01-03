<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useNuxtApp } from "#app";
const { t } = useI18n();

const partnersRef = ref(null);
let ScrollTriggerPlugin = null;
let gsapContext = null;

onMounted(async () => {
  if (process.server) return;
  const moduleTrigger = await import("gsap/ScrollTrigger");
  ScrollTriggerPlugin = moduleTrigger.ScrollTrigger || moduleTrigger.default;

  const { $gsap } = useNuxtApp();
  $gsap.registerPlugin(ScrollTriggerPlugin);

  await import("vue").then(({ nextTick }) => nextTick());

  gsapContext = $gsap.context(() => {
    $gsap.from(partnersRef.value, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.9,
    });
  }, partnersRef);
});

onBeforeUnmount(() => {
  gsapContext && gsapContext.revert();
});
</script>

<template>
  <section class="partners" ref="partnersRef">
    <div class="container">
      <h4 class="title">{{ t("partners.title") }}</h4>
      <div class="items">
        <div class="item">
          <img src="/img/part-1.png" alt="AQA" />
        </div>
        <div class="item">
          <img src="/img/part-2.png" alt="AQA" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partners {
  padding: 24px 0 24px 0;
  background: var(--light-bg);
}
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
}
.item img {
  width: 100%;
  height: 80px;
  object-fit: contain;
}
.text p {
  font-size: 18px;
  line-height: 1.4;
  font-weight: 500;
  color: var(--black);
  opacity: 0.9;
}
.items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.title {
  font-size: 24px;
  font-weight: 700;
  color: var(--blue);
  margin-bottom: 16px;
}
</style>
