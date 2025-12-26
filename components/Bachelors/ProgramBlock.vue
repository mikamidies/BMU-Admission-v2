<template>
  <section class="program">
    <div class="anchor" id="program"></div>
    <div class="container" ref="programRef">
      <h4 class="title" ref="titleRef">Информативный блок</h4>
      <div class="grid">
        <div v-for="(program, index) in programs" :key="index" class="item">
          <div class="header" @click="toggleAccordion(index)">
            <h5 class="name">{{ program.name }}</h5>

            <div class="icon">
              <Icon name="lucide:plus" />
            </div>
          </div>
          <transition name="accordion">
            <div v-show="program.isOpen" class="body">
              <div class="txt" v-html="program.description"></div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useNuxtApp } from "#app";

const programRef = ref(null);
let ScrollTriggerPlugin = null;
let gsapContext = null;
let SplitTextPlugin = null;

const programs = ref([
  {
    name: "Программа Foundation",
    description: "",
    isOpen: false,
  },
  {
    name: "Программы Бакалавриата",
    description:
      "Степень бакалавра с отличием в области MIS и бизнес-аналитики в BMU: сочетание технологий и бизнеса, практические проекты, инструменты и возможности карьерного роста по всему миру",
    isOpen: false,
  },
  {
    name: "Гранты и стипендии",
    description:
      "Степень бакалавра (с отличием) в области банковского дела и финансов в BMU, подтвержденная QMU: соответствует требованиям CFA, готовит выпускников к карьере в сфере банковского дела и финансов по всему миру",
    isOpen: false,
  },
  {
    name: "Общежитие для студентов",
    description:
      "BBA с PM: международная степень, сочетающая в себе основы бизнеса и навыки управления проектами для карьерного роста в частном и государственном секторах",
    isOpen: false,
  },
  {
    name: "Cambridge Dream",
    description:
      "BBA с PM: международная степень, сочетающая в себе основы бизнеса и навыки управления проектами для карьерного роста в частном и государственном секторах",
    isOpen: false,
  },
  {
    name: "Процесс поступления",
    description:
      "BBA с PM: международная степень, сочетающая в себе основы бизнеса и навыки управления проектами для карьерного роста в частном и государственном секторах",
    isOpen: false,
  },
]);

const toggleAccordion = (index) => {
  const isCurrentlyOpen = programs.value[index].isOpen;
  programs.value.forEach((prog, i) => {
    prog.isOpen = i === index && !isCurrentlyOpen;
  });
};

const applyNow = () => {
  const element = document.getElementById("faculty");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  window.applyNow = applyNow;

  if (process.server) return;
  (async () => {
    const moduleTrigger = await import("gsap/ScrollTrigger");
    const moduleSplit = await import("gsap/SplitText");
    ScrollTriggerPlugin = moduleTrigger.ScrollTrigger || moduleTrigger.default;
    SplitTextPlugin = moduleSplit.SplitText || moduleSplit.default;

    const { $gsap } = useNuxtApp();
    $gsap.registerPlugin(ScrollTriggerPlugin, SplitTextPlugin);

    await import("vue").then(({ nextTick }) => nextTick());

    const items = programRef.value?.querySelectorAll(".item");
    if (!items || !items.length) return;

    gsapContext = $gsap.context(() => {
      const tl = $gsap.timeline({
        scrollTrigger: {
          trigger: programRef.value,
          start: "top 75%",
          toggleActions: "restart none restart none",
        },
      });
      tl.from(items, {
        y: 32,
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
        stagger: 0.12,
      });

      // Typewriter for title
      const title = programRef.value?.querySelector(".title");
      if (title) {
        const split = new SplitTextPlugin(title, { type: "chars" });
        tl.set(split.chars, { opacity: 0 }, 0);
        tl.to(
          split.chars,
          {
            opacity: 1,
            duration: 0.05,
            stagger: 0.05,
            ease: "none",
          },
          0
        );
      }
    }, programRef);
  })();
});

onBeforeUnmount(() => {
  gsapContext && gsapContext.revert();
});
</script>

<style scoped>
.program {
  overflow: hidden;
}
.anchor {
  position: relative;
  height: 1px;
  top: -120px;
}
.container {
  padding: 0 18px;
}
.title {
  font-size: 24px;
  font-weight: 700;
  color: var(--blue);
  margin-bottom: 38px;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}

.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  max-height: 500px;
  overflow: hidden;
}

.item {
  background: var(--palette-5);
  border-radius: 8px;
  margin-bottom: 4px;
}

.header {
  padding: 24px;
  color: white;
  font-size: 18px;
  font-weight: 700;
  line-height: 120%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.body {
  padding: 0 24px 24px 24px;
  color: white;
  font-size: 16px;
  line-height: 150%;
}
.txt {
  opacity: 0.9;
  font-size: 16px;
  font-weight: 500;
}
img {
  width: 100%;
  height: 250px;
  border-radius: 6px;
  object-fit: cover;
  display: none;
}
.apply-btn {
  background: white;
  color: var(--blue);
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 16px;
}
@media screen and (max-width: 400px) {
  .container {
    padding: 0 16px;
  }
  .header {
    padding: 20px;
    font-size: 18px;
  }
  .body {
    padding: 0 20px 20px 20px;
  }
}
</style>
