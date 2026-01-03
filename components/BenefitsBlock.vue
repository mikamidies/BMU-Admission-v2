<template>
  <section class="benefits" ref="benefitsRef">
    <div class="container">
      <h4 class="title" ref="titleRef">{{ t("benefits.title") }}</h4>
      <div class="grid" ref="gridRef">
        <div class="item">
          <h5 class="name">{{ t("benefits.masters.item1.title") }}</h5>
          <p class="txt">
            {{ t("benefits.masters.item1.text") }}
          </p>
          <img src="/public/img/ben-diploma.JPG" />
        </div>
        <div class="item">
          <h5 class="name">{{ t("benefits.masters.item2.title") }}</h5>
          <p class="txt">
            {{ t("benefits.masters.item2.text") }}
          </p>
          <img src="/public/img/bach-ben-0.JPG" />
        </div>
        <div class="item">
          <h5 class="name">{{ t("benefits.masters.item3.title") }}</h5>
          <p class="txt">
            {{ t("benefits.masters.item3.text") }}
          </p>
          <img src="/public/img/gallery/gal-25.JPG" />
        </div>
        <div class="item">
          <h5 class="name">{{ t("benefits.masters.item4.title") }}</h5>
          <p class="txt">
            {{ t("benefits.masters.item4.text") }}
          </p>
          <img src="/public/img/camp-3.jpg" />
        </div>
      </div>
      <p class="note">
        {{ t("benefits.note") }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const { t } = useI18n();

gsap.registerPlugin(ScrollTrigger, SplitText);

const benefitsRef = ref(null);
const gridRef = ref(null);
const titleRef = ref(null);

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

  const title = titleRef.value;
  if (title) {
    const split = new SplitText(title, { type: "chars" });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: benefitsRef.value,
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
.item::after {
  content: "";
  position: absolute;
  background: #ffffff;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 0%,
    var(--palette-1) 100%
  );
  width: 100%;
  height: 50%;
  bottom: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
}
.item::before {
  content: "";
  position: absolute;
  background: #ffffff;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 0%,
    var(--palette-1) 100%
  );
  transform: rotate(180deg);
  width: 100%;
  height: 30%;
  top: 0;
  left: 0;
  z-index: 2;
  pointer-events: none;
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
  height: 100%;
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
