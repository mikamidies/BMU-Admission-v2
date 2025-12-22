<template>
  <section class="benefits" ref="benefitsRef">
    <div class="container">
      <h4 class="title">Why Choose BMU?</h4>
      <div class="grid" ref="gridRef">
        <div class="item">
          <h5 class="name">Международное британское образование</h5>
          <p class="txt">
            British Management University работает в партнёрстве с зарубежными
            университетами и образовательными институтами, предлагая программы,
            разработанные по международным академическим стандартам
          </p>
          <img src="" />
        </div>
        <div class="item">
          <h5 class="name">Международная команда и обучение на английском</h5>
          <p class="txt">
            Обучение в BMU проходит полностью на английском языке под
            руководством преподавателей с международным академическим и
            практическим опытом. Мультикультурная среда формирует уверенную
            профессиональную коммуникацию и готовность работать в международных
            командах.
          </p>
          <img src="" />
        </div>
        <div class="item">
          <h5 class="name">Практика, кейсы и ключевые навыки</h5>
          <p class="txt">
            Учебный процесс построен вокруг реальных бизнес- и управленческих
            кейсов и прикладных проектов. Студенты развивают навыки
            аргументации, структурного мышления, публичных выступлений и
            профессиональной коммуникации.
          </p>
          <img src="" />
        </div>
        <div class="item">
          <h5 class="name">Современный кампус и студенческая среда</h5>
          <p class="txt">
            Современный кампус BMU создаёт комфортную и динамичную среду для
            обучения и жизни. В распоряжении студентов — просторная библиотека,
            тренажёрный зал и площадка для падела, которые помогают поддерживать
            баланс между учёбой, продуктивностью и активным досугом.
          </p>
          <img src="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const benefitsRef = ref(null);
const gridRef = ref(null);

onMounted(() => {
  console.log("onMounted triggered");
  const grid = gridRef.value;
  const benefits = benefitsRef.value;

  if (!grid || !benefits) {
    console.log("refs not found");
    return;
  }

  let totalScroll;

  function refresh() {
    totalScroll = Math.max(0, grid.scrollWidth - grid.clientWidth);
  }

  refresh();

  gsap.to(grid, {
    x: () => -totalScroll,
    ease: "none",
    scrollTrigger: {
      trigger: benefits,
      start: "top 48px",
      end: 0,
      scrub: true,
      pin: true,
      onEnter: () => console.log("ScrollTrigger onEnter"),
      onLeave: () => console.log("ScrollTrigger onLeave"),
    },
  });
  console.log(
    "gsap.to created, ScrollTrigger count:",
    ScrollTrigger.getAll().length
  );
  ScrollTrigger.refresh();
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>

<style scoped>
.benefits {
  padding: 60px 0;
  overflow: hidden;
}
.title {
  font-size: 24px;
  font-weight: 700;
  color: var(--blue);
  margin-bottom: 24px;
}
.grid {
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  will-change: transform;
}
.item {
  background-color: var(--blue);
  padding: 20px;
  border-radius: 8px;
  min-width: 360px;
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
.item:nth-child(2) {
  background: var(--biege);
}
.item:nth-child(2) .txt,
.item:nth-child(2) .name {
  color: #000;
}
.item:nth-child(3) {
  background: var(--red);
}
.item:nth-child(4) {
  background: var(--black);
}
.name {
  font-size: 28px;
  line-height: 120%;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
}
img {
  width: 100%;
  height: auto;
  position: absolute;
}
.txt {
  font-size: 16px;
  line-height: 150%;
  color: #fff;
}
@media screen and (max-width: 400px) {
  .container {
    padding: 0 16px;
  }
  .grid {
    gap: 16px;
  }
  .item {
    min-width: 300px;
    padding: 20px;
  }
}
</style>
