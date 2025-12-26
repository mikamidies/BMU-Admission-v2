<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useNuxtApp } from "#app";

const partnersRef = ref(null);
let ScrollTriggerPlugin = null;
let gsapContext = null;

const partners = [
  { name: "Partner 1", logo: "/img/part-1.png" },
  { name: "Partner 2", logo: "/img/part-2.png" },
  { name: "Partner 3", logo: "/img/part-3.png" },
  { name: "Partner 4", logo: "/img/part-4.png" },
  { name: "Partner 5", logo: "/img/part-5.png" },
];

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
    <Swiper
      :slides-per-view="2.5"
      :space-between="24"
      :loop="true"
      :centered-slides="true"
      :modules="[Autoplay]"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }"
      :speed="6500"
      :allow-touch-move="false"
      class="partners-swiper"
    >
      <SwiperSlide v-for="(partner, index) in partners" :key="index">
        <div class="item">
          <img :src="partner.logo" :alt="partner.name" />
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped>
.partners {
  padding: 0 0 24px 0;
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
</style>
