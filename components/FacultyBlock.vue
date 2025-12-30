<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import { useNuxtApp } from "#app";

const facultyRef = ref(null);
const titleRef = ref(null);
const offerTitleRef = ref(null);
let ScrollTriggerPlugin = null;
let SplitTextPlugin = null;
let gsapContext = null;

const faculties = ref([
  {
    title: "Лионель Хендерсон, MBA, DBA",
    description: "Deputy Rector (Postgraduate and Internationalisation)",
    image: "/img/team-2.webp",
    quote:
      "Международный эксперт в сфере бизнес-образования с более чем 20-летним опытом преподавания и руководства в ведущих университетах Великобритании и Азии. Возглавлял Школу бизнеса и менеджмента в The Sino-British College (Шанхай) — совместном проекте Университета Шанхая и девяти британских вузов.",
  },
  {
    title: "Тимур Умаров, PhD",
    description: "Stanford University",
    image: "/img/team-6.webp",
    quote:
      "Признанный эксперт в сфере ИТ-образования и международной аккредитации, с более чем 25-летним опытом в академической среде. Свой преподавательский путь он начал в США, в Northern Arizona University, где вел занятия по дискретной математике, инженерии и другим техническим дисциплинам. Профессор Умаров получил степень PhD в области Computer Science в King’s College London (UK), а также является официальным экспертом ABET.",
  },
  {
    title: "Кристиан Капоне, MBA, PMP",
    description: "California Institute of Technology",
    image: "/img/team-4.webp",
    quote:
      "Эксперт в области управления проектами с более чем 30-летним опытом руководства проектами и портфелями в странах Центральной Азии и Европы. Он преподаёт и консультирует в таких направлениях, как современные методы реализации проектов (предиктивный, agile и гибридный подходы), управление рисками на основе данных и управление освоением бюджета. Является сертифицированным экспертом PMP. ",
  },
  {
    title: "Джон Джинкер, DBA",
    description: "California Institute of Technology",
    image: "/img/team-7.jpg",
    quote:
      "Опытный специалист в области бизнеса и образования, с более чем 20-летним стажем работы в университетах США, Китая, Узбекистана и Кыргызстана. Он имеет степень DBA по маркетингу, MBA в области менеджмента, а также два бакалавра — по менеджменту и логистике. Джон Джинкнер преподавал в Гарвардской бизнес-школе и других ведущих вузах, читая курсы по маркетингу, стратегии, управлению цепями поставок и бизнес-симуляциям. ",
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
      <h2 class="title" ref="titleRef">Преподы</h2>

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

    <div class="container">
      <div class="offer">
        <h2 class="title">
          Магистратура - это инвестиция в знания, статус и карьеру!
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
