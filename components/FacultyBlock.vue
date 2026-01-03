<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import { useNuxtApp } from "#app";

const { t } = useI18n();

const facultyRef = ref(null);
const titleRef = ref(null);
const offerTitleRef = ref(null);
let ScrollTriggerPlugin = null;
let SplitTextPlugin = null;
let gsapContext = null;

const faculties = ref([
  {
    title: "faculty.masters.prof1.name",
    description: "faculty.masters.prof1.position",
    image: "/img/team-2.webp",
    quote: "faculty.masters.prof1.bio",
  },
  {
    title: "faculty.masters.prof2.name",
    description: "faculty.masters.prof2.position",
    image: "/img/team-6.webp",
    quote: "faculty.masters.prof2.bio",
  },
  {
    title: "faculty.masters.prof3.name",
    description: "faculty.masters.prof3.position",
    image: "/img/team-4.webp",
    quote: "faculty.masters.prof3.bio",
  },
  {
    title: "faculty.masters.prof4.name",
    description: "faculty.masters.prof4.position",
    image: "/img/team-7.jpg",
    quote: "faculty.masters.prof4.bio",
  },
]);

onMounted(async () => {
  if (process.server) return;
  const moduleTrigger = await import("gsap/ScrollTrigger");
  const moduleSplit = await import("gsap/SplitText");
  ScrollTriggerPlugin = moduleTrigger.ScrollTrigger || moduleTrigger.default;
  SplitTextPlugin = moduleSplit.SplitText || moduleSplit.default;

  const { $gsap } = useNuxtApp();
  $gsap.registerPlugin(ScrollTriggerPlugin, SplitTextPlugin);

  await nextTick();

  gsapContext = $gsap.context(() => {
    const title = titleRef.value;
    if (title) {
      const split = new SplitTextPlugin(title, { type: "chars" });
      const tl = $gsap.timeline({
        scrollTrigger: {
          trigger: facultyRef.value,
          start: "top 75%",
          toggleActions: "restart none restart none",
        },
      });
      tl.set(split.chars, { opacity: 0 });
      tl.to(split.chars, {
        opacity: 1,
        duration: 0.05,
        stagger: 0.05,
        ease: "none",
      });
    }

    const slider = facultyRef.value?.querySelector(".slider");
    if (slider) {
      $gsap.from(slider, {
        y: 32,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: slider,
          start: "top 85%",
          toggleActions: "restart none restart none",
        },
      });
    }

    const offer = facultyRef.value?.querySelector(".offer");
    if (offer) {
      $gsap.from(offer, {
        y: 32,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: offer,
          start: "top 85%",
          toggleActions: "restart none restart none",
        },
      });
    }
  }, facultyRef);
});

onBeforeUnmount(() => {
  gsapContext && gsapContext.revert();
});
</script>

<template>
  <section class="faculty" ref="facultyRef">
    <div class="container">
      <h2 class="title" ref="titleRef">{{ t("faculty.masters.title") }}</h2>

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
                <img
                  :src="faculty.image"
                  :alt="t(faculty.title)"
                  class="image"
                />
              </div>
              <div class="content">
                <h3 class="name">{{ t(faculty.title) }}</h3>
                <p class="description">{{ t(faculty.description) }}</p>
              </div>
            </div>
            <div class="bottom">
              <div class="txt">{{ t(faculty.quote) }}</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>

    <div class="container">
      <div class="offer">
        <h2 class="title">
          {{ t("faculty.masters.offer") }}
        </h2>
        <Icon name="lucide:arrow-down" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.faculty {
  padding: 60px 0 40px 0;
  overflow: hidden;
}
.offer {
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
  margin-bottom: 40px;
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
  display: grid;
  grid-template-columns: 70px auto;
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
