<script setup>
import { nextTick, onMounted, onBeforeUnmount, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Autoplay } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import "swiper/css";
import "swiper/css/effect-fade";

gsap.registerPlugin(ScrollTrigger, SplitText);

const swiperRefs = ref([]);
const lifeRef = ref(null);
const gridRef = ref(null);
const titleRef = ref(null);
let gsapContext = null;

const slides = [
  {
    name: "Кампусная жизнь",
    image: "/img/gallery/gal-01.jpg",
  },
  {
    name: "Студенческие мероприятия",
    image: "/img/gallery/gal-02.jpg",
  },
  {
    name: "Учебные пространства",
    image: "/img/gallery/gal-04.jpg",
  },
  {
    name: "Спорт и активности",
    image: "/img/gallery/gal-03.jpg",
  },
  {
    name: "Библиотека и зоны отдыха",
    image: "/img/gallery/gal-05.jpg",
  },
];

onMounted(async () => {
  if (process.server) return;
  await nextTick();

  const items = gridRef.value?.querySelectorAll(".item");

  gsapContext = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: lifeRef.value,
        start: "top 100%",
        toggleActions: "restart none restart none",
      },
    });

    const title = titleRef.value;
    if (title) {
      const split = new SplitText(title, { type: "chars" });
      tl.set(split.chars, { opacity: 0 }, 0);
      tl.to(
        split.chars,
        {
          opacity: 1,
          duration: 0.2,
          stagger: 0.05,
          ease: "none",
        },
        0
      );
    }

    if (items && items.length) {
      tl.from(
        items,
        {
          y: 64,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.12,
        },
        0
      );
    }
  }, lifeRef);
});

onBeforeUnmount(() => {
  gsapContext && gsapContext.revert();
});
</script>

<template>
  <section class="life" ref="lifeRef" id="life">
    <div class="container">
      <h2 class="life__title title" ref="titleRef">Жизнь в BMU</h2>

      <div class="grid" ref="gridRef">
        <ClientOnly>
          <Swiper
            ref="swiperRefs"
            :slides-per-view="1"
            :loop="true"
            :modules="[Autoplay]"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :speed="1000"
            :space-between="12"
            class="grid-swiper"
          >
            <SwiperSlide
              v-for="(slide, index) in slides"
              :key="index"
              class="item"
            >
              <h5 class="name">{{ slide.name }}</h5>
              <img :src="slide.image" alt="" />
            </SwiperSlide>
          </Swiper>
        </ClientOnly>
      </div>
    </div>

    <div class="container">
      <div class="offer">
        <h2 class="title">Приём заявок уже открыт!</h2>
        <Icon name="lucide:arrow-down" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.life {
  padding: 40px 0;
  overflow: hidden;
}
.offer {
  padding-top: 40px;
  display: grid;
  grid-template-columns: auto 80px;
  justify-content: center;
  align-items: center;
}
.offer .title {
  font-size: 28px;
  line-height: 120%;
  font-weight: 700;
  color: var(--blue);
  margin-bottom: 0;
}
.offer span {
  font-size: 80px;
  color: var(--palette-3);
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
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
  grid-template-columns: 1fr;
  gap: 4px;
}
.item {
  min-width: 0;
  position: relative;
  width: 100%;
  height: 324px;
  border-radius: 8px;
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
}
.item:nth-child(4) {
  grid-column: 2 / 3;
  grid-row: 4 / 5;
}
.item:nth-child(5) {
  grid-column: 1 / 3;
  grid-row: 5 / 7;
}
.swiper {
  pointer-events: none;
  height: 100%;
  width: 100%;
  border-radius: 8px;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.name {
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 10;
  color: #fff;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 600;
}

@media screen and (max-width: 400px) {
  .swiper-slide img {
    height: 440px;
  }
}
</style>
