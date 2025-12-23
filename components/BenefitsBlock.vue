<template>
  <section class="benefits" ref="benefitsRef">
    <div class="container">
      <h4 class="title">Почему выбрать BMU?</h4>
      <div class="grid" ref="gridRef">
        <div class="item">
          <h5 class="name">Международное британское образование</h5>
          <p class="txt">
            British Management University работает в партнёрстве с зарубежными
            университетами и образовательными институтами, предлагая программы,
            разработанные по международным академическим стандартам
          </p>
          <img src="/public/img/ben-1.png" />
        </div>
        <div class="item">
          <h5 class="name">Международная команда преподавателей</h5>
          <p class="txt">
            Обучение в BMU проходит полностью на английском языке под
            руководством преподавателей с международным академическим и
            практическим опытом. Мультикультурная среда формирует уверенную
            профессиональную коммуникацию и готовность работать в международных
            командах.
          </p>
          <img src="/public/img/ben-2.png" />
        </div>
        <div class="item">
          <h5 class="name">Практика, кейсы и ключевые навыки</h5>
          <p class="txt">
            Учебный процесс построен вокруг реальных бизнес- и управленческих
            кейсов и прикладных проектов. Студенты развивают навыки
            аргументации, структурного мышления, публичных выступлений и
            профессиональной коммуникации.
          </p>
          <img src="/public/img/ben-3.png" />
        </div>
        <div class="item">
          <h5 class="name">Современный кампус и студенческая среда</h5>
          <p class="txt">
            Современный кампус BMU создаёт комфортную и динамичную среду для
            обучения и жизни. В распоряжении студентов — просторная библиотека,
            тренажёрный зал и площадка для падела, которые помогают поддерживать
            баланс между учёбой, продуктивностью и активным досугом.
          </p>
          <img src="/public/img/ben-4.png" />
        </div>
      </div>
      <p class="note">
        Обучение полностью проходит на английском языке и соответствует
        британским академическим стандартам.
      </p>
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
      start: "top 64px",
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
  padding: 40px 0;
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
  overflow: hidden;
  min-width: 360px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
.item:nth-child(1) img {
  transform: translateY(120px);
}
.item:nth-child(3) img {
  transform: translateY(40px);
}
.item::after {
  content: "";
  position: absolute;
  background: #ffffff;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 0%,
    var(--blue) 100%
  );
  width: 100%;
  height: 60%;
  bottom: 0;
  left: 0;
  z-index: 1;
}
.item:nth-child(2) {
  background: var(--biege);
}
.item:nth-child(2)::after {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 0%,
    var(--biege) 100%
  );
}
.item:nth-child(2) .txt {
  color: #000;
}
.item:nth-child(2) .name {
  color: #000;
}
.item:nth-child(3) {
  background: var(--red);
}
.item:nth-child(3)::after {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 0%,
    var(--red) 100%
  );
}
.item:nth-child(4) {
  background: var(--black);
}
.item:nth-child(4)::after {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 0%,
    var(--black) 100%
  );
}
.name {
  font-size: 28px;
  line-height: 120%;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
  z-index: 2;
}
img {
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
}
.txt {
  font-size: 16px;
  font-weight: 600;
  line-height: 130%;
  color: #fff;
  z-index: 2;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
}
.item:nth-child(2) img,
.item:nth-child(4) img {
  height: 90%;
}
.note {
  margin: 24px 0;
  font-size: 12px;
  font-weight: 500;
  line-height: 130%;
  color: var(--black);
  opacity: 0.6;
}
@media screen and (max-width: 400px) {
  .container {
    padding: 0 18px;
  }
  .grid {
    gap: 16px;
  }
  .item {
    min-width: 300px;
    padding: 18px;
    height: 70vh;
  }
  .name {
    font-size: 20px;
  }
  .txt {
    font-size: 14px;
  }
}
</style>
