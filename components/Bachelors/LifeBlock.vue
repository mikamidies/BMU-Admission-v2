<script setup>
import { nextTick } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Autoplay } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/effect-fade";

gsap.registerPlugin(ScrollTrigger);

const swiperRefs = ref([]);

const slides = [
  {
    name: "Кампусная жизнь",
    images: ["/img/hero.jpg", "/img/photo-2.jpg"],
  },
  {
    name: "Студенческие мероприятия",
    images: ["/img/hero.jpg", "/img/photo-2.jpg"],
  },
  {
    name: "Жилье и питание",
    images: ["/img/hero.jpg", "/img/photo-2.jpg"],
  },
  {
    name: "Здоровье и благополучие",
    images: ["/img/hero.jpg", "/img/photo-2.jpg"],
  },
  {
    name: "Общежитие",
    images: ["/img/hero.jpg", "/img/photo-2.jpg"],
  },
];
</script>

<template>
  <section class="life" ref="lifeRef" id="life">
    <div class="container">
      <h2 class="life__title title">Жизнь в BMU</h2>

      <div class="grid" ref="gridRef">
        <div v-for="(slide, index) in slides" :key="index" class="item">
          <h5 class="name">{{ slide.name }}</h5>
          <ClientOnly>
            <Swiper
              ref="swiperRefs"
              :slides-per-view="1"
              :loop="true"
              :modules="[Autoplay]"
              :autoplay="{
                delay: index * 2000 + 1000,
                disableOnInteraction: false,
              }"
              :speed="700"
            >
              <SwiperSlide
                v-for="(img, imgIndex) in slide.images"
                :key="imgIndex"
              >
                <img :src="img" alt="" />
              </SwiperSlide>
            </Swiper>
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.life {
  padding: 40px 0;
  overflow: hidden;
}
.container {
  padding: 0 18px;
}
.life__title {
  font-size: 24px;
  font-weight: 700;
  color: var(--blue);
  margin-bottom: 24px;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6, 1fr);
  gap: 4px;
}
.item {
  min-width: 0;
  position: relative;
  height: 100%;
  width: 100%;
  max-height: 324px;
  border-radius: 4px;
  overflow: hidden;
}
.item::after {
  content: "";
  position: absolute;
  background: #ffffff;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  width: 100%;
  height: 40%;
  bottom: 0;
  left: 0;
  z-index: 3;
}
.item:nth-child(1) {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
.item:nth-child(2) {
  grid-column: 1 / 2;
  grid-row: 3 / 7;
}
.item:nth-child(3) {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  max-height: 160px;
}
.item:nth-child(4) {
  grid-column: 2 / 3;
  grid-row: 4 / 5;
  max-height: 160px;
}
.item:nth-child(5) {
  grid-column: 1 / 3;
  grid-row: 5 / 7;
}
.swiper {
  pointer-events: none;
  height: 100%;
  width: 100%;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.name {
  position: absolute;
  bottom: 16px;
  left: 16px;
  z-index: 10;
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
}

@media screen and (max-width: 400px) {
  .swiper-slide img {
    height: 440px;
  }
}
</style>
