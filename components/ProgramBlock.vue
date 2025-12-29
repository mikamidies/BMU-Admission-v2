<template>
  <section class="program">
    <div class="anchor" id="program"></div>
    <div class="container">
      <h4 class="title">Программы магистратуры</h4>
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
import { ref, onMounted } from "vue";

const programs = ref([
  {
    img: "/img/dir-1.webp",
    name: "MSc in International Management",
    description:
      "Программа даёт комплексное понимание международного бизнеса и управления, включая:<br>⦁	международный менеджмент и стратегию<br>⦁	глобальные бизнес-модели и рынки<br>⦁	управление международными проектами<br>⦁	кросс-культурную коммуникацию<br>⦁	принятие управленческих решений в глобальной среде<br><br>Критерии: диплом, сертификат IELTS 6.5, интвервью<br>",
    isOpen: false,
  },
  {
    img: "/img/dir-2.webp",
    name: "MSc in Accounting and Finance",
    description:
      "Программа даёт системное и практическое понимание финансов, включая:<br>⦁	финансовый и управленческий учёт<br>⦁	финансовый анализ и интерпретацию отчётности<br>⦁	корпоративные финансы<br>⦁	инвестиционные решения<br>⦁	управление рисками<br>⦁	современные стандарты и практики в accounting & finance<br><br>Критерии: диплом, сертификат IELTS 6.5, интвервью<br>",
    isOpen: false,
  },
  {
    img: "/img/dir-3.webp",
    name: "MBA with Project Management",
    description:
      "Программа объединяет классический MBA и профессиональное управление проектами, включая:<br>⦁	стратегический менеджмент<br>⦁	управление проектами и процессами<br>⦁	планирование сроков, бюджета и ресурсов<br>⦁	управление рисками и качеством<br>⦁	лидерство и управление командами<br>⦁	принятие решений в условиях неопределённости<br><br>Критерии: диплом, сертификат IELTS 6.0, интвервью, опыт работы<br>",
    isOpen: false,
  },
  {
    img: "/img/dir-4.webp",
    name: "MBA with Data Analytics",
    description:
      "Программа объединяет классический MBA и современную бизнес-аналитику, включая:<br>⦁	анализ бизнес-данных<br>⦁	принятие управленческих решений на основе данных<br>⦁	интерпретацию показателей и отчётности<br>⦁	бизнес-моделирование и прогнозирование<br>⦁	аналитическое мышление для менеджеров<br><br>Критерии: диплом, сертификат IELTS 6.0, интвервью<br>",
    isOpen: false,
  },
  {
    img: "/img/dir-5.webp",
    name: "MA Tesol with Educational Leadership",
    description:
      "Программа сочетает методику преподавания английского языка (TESOL) и образовательное лидерство, включая:<br>⦁	современные подходы к преподаванию английского языка<br>⦁	методику обучения в мультикультурной среде<br>⦁	разработку и оценку учебных программ<br>⦁	образовательное лидерство и управление<br>⦁	академическое качество и развитие преподавателей<br>⦁	исследования и рефлексию в образовании<br><br>Критерии: диплом, сертификат IELTS 6.5, интвервью, опыт работы<br>",
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
