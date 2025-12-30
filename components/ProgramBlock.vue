<template>
  <section class="program">
    <div class="anchor" id="program"></div>
    <div class="container" ref="programRef">
      <h4 class="title" ref="titleRef">Программы магистратуры</h4>
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
              <img :src="program.img" />
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
    img: "/img/dir-1.webp",
    name: "MSc in International Management",
    description:
      "Вы научитесь грамотно синхронизировать работу отделов, использовать различные инструменты менеджмента и применять на практике навыки, которые помогут в развитии вашего бизнеса. Программа даёт комплексное понимание:<br><br>• международного менеджмента и стратегического управления<br>• глобальных бизнес-моделей и международных рынков<br>• управления международными проектами<br>• кросс-культурной коммуникации<br>• принятия управленческих решений в глобальной среде<br><br>Критерии: диплом бакалавра, сертификат IELTS 6.5, интвервью<br>",
    isOpen: false,
  },
  {
    img: "/img/dir-2.webp",
    name: "MSc in Accounting and Finance",
    description:
      "На программе вы научитесь использовать финансовую информацию для принятия управленческих решений, а также освоите знания в следующих областях:<br><br>• финансовый и управленческий учёт<br>• анализ и интерпретация финансовой отчётности<br>• корпоративные финансы<br>• инвестиционные решения<br>• управление финансовыми рисками<br>• современные стандарты и практики в сфере Accounting & Finance<br><br>Критерии: диплом бакалавра, сертификат IELTS 6.5, интвервью<br>",
    isOpen: false,
  },
  {
    img: "/img/dir-3.webp",
    name: "MBA with Project Management",
    description:
      "Программа объединяет классический MBA и профессиональное управление проектами, включая:<br>• стратегический менеджмент<br>• управление проектами и процессами<br>• планирование сроков, бюджета и ресурсов<br>• управление рисками и качеством<br>• лидерство и управление командами<br>• принятие решений в условиях неопределённости<br><br>Критерии: диплом бакалавра, сертификат IELTS 6.0, интвервью, опыт работы<br>",
    isOpen: false,
  },
  {
    img: "/img/dir-4.webp",
    name: "MBA with Data Analytics",
    description:
      "Программа объединяет классический MBA и современную бизнес-аналитику, где вы научитесь:<br>• анализу бизнес-данных<br>• принимать решения на основе данных<br>• интерпретеровать показатели и отчётности<br>• бизнес-моделированию и прогнозированию<br>• аналитическому мышлению для менеджеров<br><br>Критерии: диплом бакалавра, сертификат IELTS 6.0, интвервью<br>",
    isOpen: false,
  },
  {
    img: "/img/dir-5.webp",
    name: "MA Tesol with Educational Leadership",
    description:
      "Программа сочетает методику преподавания английского языка (TESOL) и образовательное лидерство, включая:<br>• современные подходы к преподаванию английского языка<br>• методику обучения в мультикультурной среде<br>• разработку и оценку учебных программ<br>• образовательное лидерство и управление<br>• академическое качество и развитие преподавателей<br>• исследования и рефлексию в образовании<br><br>Критерии: диплом бакалавра, сертификат IELTS 6.5, интвервью, опыт работы<br>",
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
  margin-bottom: 24px;
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
  background: var(--biege);
  border-radius: 8px;
  margin-bottom: 4px;
}

.header {
  padding: 24px;
  color: var(--black);
  font-size: 18px;
  font-weight: 700;
  line-height: 120%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.body {
  padding: 0 24px 24px 24px;
  color: var(--black);
  font-size: 16px;
  line-height: 150%;
}
.txt {
  opacity: 0.8;
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
