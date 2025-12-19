<template>
  <section class="program">
    <div class="container">
      <h4 class="title">Program Structure</h4>
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
              <p class="txt">{{ program.description }}</p>
              <img :src="program.img" />
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const programs = ref([
  {
    img: "/img/dir-1.webp",
    name: "Foundation Year",
    description:
      "The Foundation Year is designed to prepare students for undergraduate studies by providing essential knowledge and skills in various subjects.",
    isOpen: false,
  },
  {
    img: "/img/dir-2.webp",
    name: "BSc Accounting and Finance",
    description:
      "This program focuses on developing expertise in accounting principles, financial management, and related areas to prepare students for careers in finance and accounting.",
    isOpen: false,
  },
  {
    img: "/img/dir-3.webp",
    name: "BSc Management IT with BA",
    description:
      "This program combines management information systems with business analytics to equip students with skills in data analysis, decision making, and technology management.",
    isOpen: false,
  },
  {
    img: "/img/dir-4.webp",
    name: "BSc Banking and Finance",
    description:
      "This program is designed to provide students with a comprehensive understanding of banking operations, financial markets, and investment strategies.",
    isOpen: false,
  },
  {
    img: "/img/dir-5.webp",
    name: "BBA with International Management",
    description:
      "This program focuses on developing skills in international business management, preparing students for leadership roles in global organizations.",
    isOpen: false,
  },
]);

const toggleAccordion = (index) => {
  const isCurrentlyOpen = programs.value[index].isOpen;
  programs.value.forEach((prog, i) => {
    prog.isOpen = i === index && !isCurrentlyOpen;
  });
};
</script>

<style scoped>
.program {
  overflow: hidden;
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

.header {
  cursor: pointer;
}

.item {
  background: #023e8a;
  border-radius: 32px;
  margin-top: -16px;
}
.item:nth-child(2) {
  background: #fb6f92;
}
.item:nth-child(3) {
  background: #9d4edd;
}
.item:nth-child(4) {
  background: #058c42;
}
.item:nth-child(5) {
  background: #ff7f50;
}

.header {
  padding: 24px;
  color: white;
  font-size: 20px;
  font-weight: 600;
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
  margin-bottom: 16px;
  opacity: 0.8;
}
img {
  width: 100%;
  height: 180px;
  border-radius: 16px;
  object-fit: cover;
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
