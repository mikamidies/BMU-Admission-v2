<template>
  <div class="container" :class="{ scrolled: isScrolled }">
    <div class="left">
      <NuxtLink to="/">
        <img src="/public/img/brand.svg" class="black" />
      </NuxtLink>
    </div>
    <div class="right">
      <div class="burger" @click="toggleMenu" :class="{ open: isMenuOpen }">
        <div class="stick"></div>
      </div>
    </div>
    <div class="menu" v-show="isMenuOpen" :class="{ open: isMenuOpen }">
      <div class="menu-content">
        <button class="menu-item" @click="scrollTo('hero')">Главная</button>
        <button class="menu-item" @click="scrollTo('partners')">
          Партнеры
        </button>
        <button class="menu-item" @click="scrollTo('about')">О нас</button>
        <button class="menu-item" @click="scrollTo('benefits')">
          Преимущества
        </button>
        <button class="menu-item" @click="scrollTo('program')">
          Программа
        </button>
        <button class="menu-item" @click="scrollTo('faculty')">
          Факультет
        </button>
        <button class="menu-item" @click="scrollTo('life')">Жизнь</button>
        <button class="menu-item" @click="scrollTo('request')">Запрос</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  isMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  position: fixed;
  width: 100%;
  top: 0;
  background: transparent;
  z-index: 1000;
  transition: all 0.3s ease;
}
.container.scrolled {
  background: rgba(245, 245, 247, 0.9);
  padding: 20px;
}
.left img {
  width: 200px;
  transition: all 0.3s ease;
}
.container.scrolled .left img {
  width: 190px;
}
.left a {
  text-decoration: none;
  display: flex;
}
.stick {
  width: 30px;
  height: 3px;
  background: var(--blue);
  position: relative;
  border-radius: 2px;
  z-index: 1000;
  transition: all 0.3s ease;
}
.stick::before {
  width: 30px;
  height: 3px;
  background: var(--blue);
  content: "";
  position: absolute;
  top: -10px;
  left: 0;
  border-radius: 2px;
  transition: all 0.3s ease;
}
.stick::after {
  width: 30px;
  height: 3px;
  background: var(--blue);
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  border-radius: 2px;
  transition: all 0.3s ease;
}
.container.scrolled .stick,
.container.scrolled .stick::before,
.container.scrolled .stick::after {
  background: var(--blue);
}
.burger {
  cursor: pointer;
  transition: all 0.3s ease;
}
.burger.open .stick {
  background: transparent;
}
.burger.open .stick::before {
  transform: rotate(45deg);
  top: 0;
  background: white;
}
.burger.open .stick::after {
  transform: rotate(-45deg);
  bottom: 0;
  background: white;
}
.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-100%);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.menu.open {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}
.menu-content {
  text-align: center;
}
.menu-item {
  display: block;
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  font-weight: 600;
  margin: 20px 0;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.menu-item:hover {
  color: var(--blue);
  transform: scale(1.1);
}
@media screen and (max-width: 400px) {
  .container,
  .container.scrolled {
    padding: 16px;
  }
  .container.scrolled .left img {
    width: 170px;
  }
  .left img {
    width: 170px;
  }
  .stick,
  .stick::before,
  .stick::after {
    width: 28px;
    height: 2px;
  }
}
</style>
