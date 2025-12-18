<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
</script>

<template>
  <section class="life">
    <div class="container">
      <h2 class="life__title title">Life at BMU</h2>
    </div>
    <div class="grid">
      <div class="item">
        <h5 class="name">Campus Life</h5>
        <Swiper
          :key="activeSwiper"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{ delay: 1500, disableOnInteraction: false }"
          :modules="[EffectFade, Autoplay]"
          effect="fade"
        >
          <SwiperSlide>
            <img src="/img/hero.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/photo-2.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="item">
        <h5 class="name">Student Activities</h5>
        <Swiper
          :key="activeSwiper"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{ delay: 1500, disableOnInteraction: false }"
          :modules="[EffectFade, Autoplay]"
          effect="fade"
        >
          <SwiperSlide>
            <img src="/img/hero.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/photo-2.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="item">
        <h5 class="name">Housing & Dining</h5>
        <Swiper
          :key="activeSwiper"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{ delay: 1500, disableOnInteraction: false }"
          :modules="[EffectFade, Autoplay]"
          effect="fade"
        >
          <SwiperSlide>
            <img src="/img/hero.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/photo-2.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="item">
        <h5 class="name">Health & Wellness</h5>
        <Swiper
          :key="activeSwiper"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{ delay: 1500, disableOnInteraction: false }"
          :modules="[EffectFade, Autoplay]"
          effect="fade"
        >
          <SwiperSlide>
            <img src="/img/hero.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/photo-2.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="item">
        <h5 class="name">Dormitory Life</h5>
        <Swiper
          :key="activeSwiper"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{ delay: 1500, disableOnInteraction: false }"
          :modules="[EffectFade, Autoplay]"
          effect="fade"
        >
          <SwiperSlide>
            <img src="/img/hero.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/photo-2.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="item">
        <h5 class="name">Clubs & Organizations</h5>
        <Swiper
          :key="activeSwiper"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{ delay: 1500, disableOnInteraction: false }"
          :modules="[EffectFade, Autoplay]"
          effect="fade"
        >
          <SwiperSlide>
            <img src="/img/hero.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/photo-2.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="item">
        <h5 class="name">Events & Entertainment</h5>
        <Swiper
          :key="activeSwiper"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{ delay: 1500, disableOnInteraction: false }"
          :modules="[EffectFade, Autoplay]"
          effect="fade"
        >
          <SwiperSlide>
            <img src="/img/hero.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/photo-2.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="item">
        <h5 class="name">Sports and Wellness</h5>
        <Swiper
          :key="activeSwiper"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{ delay: 1500, disableOnInteraction: false }"
          :modules="[EffectFade, Autoplay]"
          effect="fade"
        >
          <SwiperSlide>
            <img src="/img/hero.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/photo-2.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<style scoped>
.life {
  padding: 40px 0 0 0;
  background-color: #f5f5f5;
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
  overflow: auto;
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
</style>
