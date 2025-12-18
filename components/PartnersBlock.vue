<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const partners = [
  { name: "Partner 1", logo: "/img/part-1.png" },
  { name: "Partner 2", logo: "/img/part-2.png" },
  { name: "Partner 3", logo: "/img/part-3.png" },
  { name: "Partner 4", logo: "/img/part-4.png" },
  { name: "Partner 5", logo: "/img/part-5.png" },
];
</script>

<template>
  <section class="partners">
    <Swiper
      :slides-per-view="2.5"
      :space-between="24"
      :loop="true"
      :centered-slides="true"
      :modules="[Autoplay]"
      :autoplay="{ delay: 100, disableOnInteraction: false }"
      :speed="5000"
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
  padding: 24px 0;
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
