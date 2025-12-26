<template>
  <div class="hero">
    <div class="content" ref="contentRef">
      <img ref="heroImgRef" src="/img/gallery/gal-hero.jpg" alt="" />
      <h1 ref="headlineRef" v-html="currentHeadline"></h1>
    </div>
    <div class="wrapper">
      <div class="buttons" ref="buttonsRef">
        <NuxtLink @click="scrollTo('program')" class="button">
          Программы Бакалавриата
          <div class="icon">
            <Icon name="lucide:arrow-right" />
          </div>
        </NuxtLink>
        <NuxtLink to="/" class="button">
          Программы Магистратуры
          <div class="icon">
            <Icon name="lucide:arrow-right" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from "vue";
import { useNuxtApp } from "#app";

let scrollHandler = null;
let splitInstance = null;
let headlineAnimation = null;
let animationInterval = null;
let SplitTextPlugin = null;
let ScrollTriggerPlugin = null;
let imageScrollTrigger = null;

const slogans = [
  "Твой выбор - <br> Твой Университет",
  "Старт университетского пути в международной академической среде",
  "Открывай глобальные возможности вместе <br> с BMU",
  "Запусти карьеру через международное образование",
];

const headlineRef = ref(null);
const heroImgRef = ref(null);
const contentRef = ref(null);
const buttonsRef = ref(null);
const currentIndex = ref(0);
const currentHeadline = computed(() => slogans[currentIndex.value]);

const animateHeadline = () => {
  if (!headlineRef.value || !SplitTextPlugin) return;

  splitInstance = new SplitTextPlugin(headlineRef.value, { type: "lines" });
  const { $gsap } = useNuxtApp();

  headlineAnimation = $gsap.from(splitInstance.lines, {
    rotationX: -100,
    scale: 1,
    transformOrigin: "50% 50% -160px",
    opacity: 0,
    duration: 0.8,
    ease: "power3",
    stagger: 0.25,
  });
};

const startRotation = () => {
  animationInterval = window.setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slogans.length;
  }, 5000);
};

const initParallax = () => {
  if (!heroImgRef.value || !ScrollTriggerPlugin) return;
  const { $gsap } = useNuxtApp();
  $gsap.set(heroImgRef.value, {
    yPercent: -12,
    scale: 1.5,
    transformOrigin: "50% 50%",
  });
  const tween = $gsap.to(heroImgRef.value, {
    yPercent: 12,
    scale: 1,
    ease: "none",
    scrollTrigger: {
      trigger: contentRef.value || heroImgRef.value,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
      markers: true,
    },
  });
  imageScrollTrigger = tween.scrollTrigger;
};

watch(currentIndex, async () => {
  headlineAnimation && headlineAnimation.revert();
  splitInstance && splitInstance.revert();
  await nextTick();
  animateHeadline();
});

onMounted(async () => {
  if (process.server) return;
  const module = await import("gsap/SplitText");
  const moduleTrigger = await import("gsap/ScrollTrigger");
  SplitTextPlugin = module.SplitText || module.default;
  ScrollTriggerPlugin = moduleTrigger.ScrollTrigger || moduleTrigger.default;

  const { $gsap } = useNuxtApp();
  $gsap.registerPlugin(SplitTextPlugin, ScrollTriggerPlugin);

  await nextTick();
  animateHeadline();
  startRotation();
  initParallax();

  const buttons = buttonsRef.value?.querySelectorAll(".button");
  if (buttons && buttons.length >= 2) {
    $gsap.from(buttons[0], {
      x: -100,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.5,
    });
    $gsap.from(buttons[1], {
      x: 100,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.5,
    });
  }

  ScrollTriggerPlugin.refresh();
});

onBeforeUnmount(() => {
  animationInterval && window.clearInterval(animationInterval);
  headlineAnimation && headlineAnimation.revert();
  splitInstance && splitInstance.revert();
  imageScrollTrigger && imageScrollTrigger.kill();
});

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  isMenuOpen.value = false;
};
</script>

<style scoped>
.hero {
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  will-change: transform;
}
.wrapper {
  display: flex;
  flex-direction: column;
  padding: 18px;
}
.content {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 660px;
  overflow: hidden;
}
.content::after {
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
.content h1 {
  font-size: 32px;
  line-height: 120%;
  font-weight: 700;
  color: white;
  position: absolute;
  bottom: 18px;
  left: 18px;
  z-index: 2;
  width: 100%;
  max-width: 380px;
}
.buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
.buttons a {
  width: 100%;
  height: 132px;
  border-radius: 8px;
  background: var(--palette-1);
  backdrop-filter: blur(4px);
  font-size: 5vmin;
  cursor: pointer;
  padding: 16px;
  display: flex;
  font-size: 18px;
  line-height: 130%;
  font-weight: 600;
  position: relative;
  color: white;
}
.buttons a:nth-child(2) {
  background: var(--palette-5);
}
.buttons a::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
}
.icon {
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: white;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--blue);
}

@media screen and (max-width: 400px) {
  .content h1 {
    font-size: 28px;
  }
  .buttons a {
    height: 144px;
    font-size: 16px;
  }
}
</style>
