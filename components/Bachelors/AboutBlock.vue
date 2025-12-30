<template>
  <section class="about">
    <div class="container">
      <!-- <div class="card card-first">
        <div class="img">
          <img src="/img/about-1.jpg" alt="" />
        </div>
      </div> -->
      <div class="card card-sec">
        <div class="content">
          <h4 class="title">British Management University -</h4>
        </div>
      </div>
      <div class="card card-third" ref="aboutRef">
        <p class="fade-item">
          <Icon name="lucide:check-circle" />
          Это ваш путь к успешной международной карьере. Обучаясь на наших
          программах бакалавриата, вы получаете британское образование мирового
          уровня!
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { useNuxtApp } from "#app";

const aboutRef = ref(null);
let ScrollTriggerPlugin = null;
let gsapContext = null;

onMounted(async () => {
  if (process.server) return;
  const moduleTrigger = await import("gsap/ScrollTrigger");
  ScrollTriggerPlugin = moduleTrigger.ScrollTrigger || moduleTrigger.default;

  const { $gsap } = useNuxtApp();
  $gsap.registerPlugin(ScrollTriggerPlugin);

  await nextTick();
  const items = aboutRef.value?.querySelectorAll(".fade-item");
  const title = aboutRef.value?.querySelector(".title");
  const allElements = title ? [title, ...Array.from(items)] : Array.from(items);
  if (!allElements || !allElements.length) return;

  gsapContext = $gsap.context(() => {
    const tl = $gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.value,
        start: "top 75%",
        toggleActions: "restart none restart none",
      },
    });
    tl.from(allElements, {
      y: 32,
      opacity: 0,
      duration: 0.2,
      ease: "power2.out",
      stagger: 0.12,
    });
  }, aboutRef);
});

onBeforeUnmount(() => {
  gsapContext && gsapContext.revert();
});
</script>

<style scoped>
.container {
  padding: 0 24px;
}
.card {
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}
.card-first {
  height: 300px;
  margin-bottom: 8px;
}
.card-third {
  font-size: 18px;
  line-height: 1.4;
  font-weight: 500;
  color: var(--black);
  opacity: 0.9;
}
.img {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
}
.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
.content {
  position: relative;
  z-index: 2;
}
.title {
  font-size: 28px;
  font-weight: 900;
  line-height: 120%;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--palette-1);
  margin-bottom: 16px;
}
.card p {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  margin-bottom: 4px;
}
.card span {
  transform: translateY(8px);
  color: var(--palette-2);
}
@media screen and (max-width: 400px) {
  .container {
    padding: 0 18px;
  }
}
</style>
