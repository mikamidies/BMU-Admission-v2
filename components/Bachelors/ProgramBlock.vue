<template>
  <section class="program">
    <div class="anchor" id="program"></div>
    <div class="container">
      <h4 class="title">Программы Бакалавриата</h4>
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
    name: "BSc in Accounting and Finance",
    description:
      "Степень бакалавра (с отличием) в области бухгалтерского учета и финансов в BMU, подтвержденная QMU, готовит студентов к ACCA, карьере на местном и зарубежном уровнях",
    isOpen: false,
  },
  {
    img: "/img/dir-2.webp",
    name: "BSc in Management Information Systems",
    description:
      "Степень бакалавра с отличием в области MIS и бизнес-аналитики в BMU: сочетание технологий и бизнеса, практические проекты, инструменты и возможности карьерного роста по всему миру",
    isOpen: false,
  },
  {
    img: "/img/dir-3.webp",
    name: "BSc in Banking and Finance",
    description:
      "Степень бакалавра (с отличием) в области банковского дела и финансов в BMU, подтвержденная QMU: соответствует требованиям CFA, готовит выпускников к карьере в сфере банковского дела и финансов по всему миру",
    isOpen: false,
  },
  {
    img: "/img/dir-4.webp",
    name: "BBA with Project Management",
    description:
      "BBA с PM: международная степень, сочетающая в себе основы бизнеса и навыки управления проектами для карьерного роста в частном и государственном секторах",
    isOpen: false,
  },
  {
    img: "/img/dir-5.webp",
    name: "BBA with Digital Marketing and e-Business",
    description:
      "BBA Digital Marketing & E-Business: международная степень, сочетающая основы бизнеса с навыками цифрового и электронного бизнеса для карьерного роста",
    isOpen: false,
  },
  {
    img: "/img/dir-5.webp",
    name: "BBA with Logistics and Supply Chain Management",
    description:
      "BBA Logistics & Supply Chain: международная степень, объединяющая основы бизнеса с опытом в области логистики и цепочки поставок для карьерного роста",
    isOpen: false,
  },
  {
    img: "/img/dir-5.webp",
    name: "BBA with Economics and Sustainable Development",
    description:
      "BBA Economics & Sustainability: международная степень, сочетающая основы бизнеса с экономикой и устойчивым развитием для успешной карьеры",
    isOpen: false,
  },
  {
    img: "/img/dir-5.webp",
    name: "BBA with Communication and Public Relations",
    description:
      "Степень бакалавра в области коммуникаций и связей с общественностью: международное образование, сочетающее основы бизнеса с опытом в области коммуникаций и PR для динамичной карьеры",
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
