<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Autoplay } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/effect-fade";

gsap.registerPlugin(ScrollTrigger);

const lifeRef = ref(null);
const gridRef = ref(null);

const slides = [
  {
    name: "Campus Life",
    images: ["/img/hero.jpg", "/img/photo-2.jpg"],
  },
  {
    name: "Student Activities",
    images: ["/img/hero.jpg", "/img/photo-2.jpg"],
  },
  {
    name: "Housing & Dining",
    images: ["/img/hero.jpg", "/img/photo-2.jpg"],
  },
  {
    name: "Health & Wellness",
    images: ["/img/hero.jpg", "/img/photo-2.jpg"],
  },
  {
    name: "Dormitory Life",
    images: ["/img/hero.jpg", "/img/photo-2.jpg"],
  },
  {
    name: "Clubs & Organizations",
    images: ["/img/hero.jpg", "/img/photo-2.jpg"],
  },
  {
    name: "Events & Entertainment",
    images: ["/img/hero.jpg", "/img/photo-2.jpg"],
  },
  {
    name: "Sports and Wellness",
    images: ["/img/hero.jpg", "/img/photo-2.jpg"],
  },
];

onMounted(() => {
  const grid = gridRef.value;
  const life = lifeRef.value;

  if (!grid || !life) return;

  let totalScroll;

  function refresh() {
    totalScroll = Math.max(0, grid.scrollWidth - grid.clientWidth);
  }

  refresh();

  gsap.to(grid, {
    x: () => -totalScroll,
    ease: "none",
    scrollTrigger: {
      trigger: life,
      start: "top 64px",
      end: 2000,
      scrub: true,
      pin: true,
    },
  });

  ScrollTrigger.addEventListener("refreshInit", refresh);
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>

<template>
  <section class="life" ref="lifeRef">
    <div class="container">
      <h2 class="life__title title">Life at BMU</h2>
    </div>
    <div class="grid" ref="gridRef">
      <div v-for="(slide, index) in slides" :key="index" class="item">
        <h5 class="name">{{ slide.name }}</h5>
        <Swiper
          :slides-per-view="1"
          :loop="true"
          :autoplay="{ delay: 1500, disableOnInteraction: false }"
          :modules="[EffectFade, Autoplay]"
          effect="fade"
        >
          <SwiperSlide v-for="(img, imgIndex) in slide.images" :key="imgIndex">
            <img :src="img" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<style scoped>
.life {
  padding: 120px 0;
  overflow: hidden;
}
.life__title {
  font-size: 24px;
  font-weight: 700;
  color: var(--blue);
  margin-bottom: 24px;
}
.grid {
  display: flex;
  flex-wrap: nowrap;
  will-change: transform;
}
.item {
  min-width: 0;
  min-width: 320px;
  position: relative;
}
.swiper {
  pointer-events: none;
}
.swiper-slide img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}
.name {
  position: absolute;
  bottom: 16px;
  left: 16px;
  z-index: 10;
  color: #fff;
  border-radius: 4px;
  font-size: 28px;
  font-weight: 700;
}

.item::after {
  content: "";
  position: absolute;
  background: #ffffff;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.4) 100%
  );
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}
@media screen and (max-width: 400px) {
  .swiper-slide img {
    height: 440px;
  }
}
</style>
