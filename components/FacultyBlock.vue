<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ref } from "vue";

const faculties = ref([
  {
    title: "Юрий Локтионов",
    description: "Massachusetts Institute of Technology ",
    image: "/img/team-1.webp",
    quote:
      "Я рекомендую эту программу всем, кто стремится к академическому и личностному росту. Это уникальная возможность учиться у лучших и расширять свои горизонты.",
  },
  {
    title: "Лиолень Хендерсон",
    description: "Stanford University",
    image: "/img/team-2.webp",
    quote:
      "Я гарантирую, что вы получите незабываемый опыт обучения. Вкладывая в себя, вы инвестируете в свое будущее. Эта программа стоит каждой минуты вашего времени.",
  },
  {
    title: "Кристиан Капоне",
    description: "California Institute of Technology",
    image: "/img/team-4.webp",
    quote:
      "Для личностного и академического роста эта программа просто необходима. Вы не пожалеете о своем выборе. Это инвестиция в ваше будущее.",
  },
]);
</script>

<template>
  <section class="faculty">
    <div class="container">
      <h2 class="title">Представители факультета</h2>

      <ClientOnly>
        <Swiper
          :slides-per-view="1"
          :loop="true"
          :modules="[Autoplay]"
          :autoplay="{
            delay: 100,
            disableOnInteraction: false,
          }"
          :speed="10000"
          :space-between="8"
          class="slider"
        >
          <SwiperSlide
            v-for="(faculty, index) in faculties"
            :key="index"
            class="slide"
          >
            <div class="top">
              <div class="image-wrapper">
                <img :src="faculty.image" :alt="faculty.title" class="image" />
              </div>
              <div class="content">
                <h3 class="name">{{ faculty.title }}</h3>
                <p class="description">{{ faculty.description }}</p>
              </div>
            </div>
            <div class="bottom">
              <div class="txt">{{ faculty.quote }}</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
  </section>
</template>

<style scoped>
.faculty {
  padding: 60px 0;
  overflow: hidden;
}
.container {
  padding: 0 18px;
}
.title {
  font-size: 24px;
  font-weight: 700;
  color: var(--blue);
  margin-bottom: 24px;
}
.slider {
  width: 100%;
  margin: 0 auto;
  background: var(--biege);
  padding: 32px 16px;
  border-radius: 8px;
  overflow: hidden;
}
.swiper-slide {
  height: auto !important;
}
.slide {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  overflow: hidden;
}
.name {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--black);
}
.description {
  font-weight: 300;
  font-size: 12px;
  line-height: 1.2;
  color: var(--black);
  opacity: 0.8;
  height: 32px;
}
.image-wrapper {
  overflow: hidden;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-bottom: 16px;
}
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
}
.top {
  display: flex;
  align-items: center;
  padding: 18px 18px 0 18px;
  gap: 16px;
}
.bottom {
  padding: 0px 18px 18px 18px;
  font-size: 16px;
  line-height: 1.3;
  font-weight: 500;
  color: var(--black);
  opacity: 0.8;
}
</style>
