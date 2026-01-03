<template>
  <div class="container" :class="{ scrolled: isScrolled }">
    <div class="left">
      <NuxtLink to="/">
        <img src="/public/img/brand.svg" class="black" />
      </NuxtLink>
    </div>
    <div class="right">
      <div class="language-switcher">
        <button
          v-for="lang in availableLocales"
          :key="lang"
          @click="setLocale(lang)"
          :class="{ active: locale === lang }"
          class="lang-btn"
        >
          {{ lang.toUpperCase() }}
        </button>
      </div>
      <!-- <div class="burger" @click="toggleMenu" :class="{ open: isMenuOpen }">
        <div class="stick"></div>
      </div> -->
      <button class="call">
        <a href="tel:+998955119999">
          <Icon name="gg:phone" width="24" height="24" />
        </a>
      </button>
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
const { locale, setLocale, availableLocales, initLocale } = useI18n();

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
  initLocale();
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
  padding: 20px;
  position: fixed;
  width: 100%;
  top: 0;
  background: transparent;
  z-index: 1000;
  transition: all 0.3s ease;
}
.container.scrolled {
  background: rgba(245, 245, 247, 0.9);
  padding: 18px;
}
.left img {
  width: 168px;
  transition: all 0.3s ease;
}
.container.scrolled .left img {
  width: 160px;
}
.left a {
  text-decoration: none;
  display: flex;
}
.right {
  display: flex;
  align-items: center;
  gap: 12px;
}
.language-switcher {
  display: flex;
  gap: 6px;
  background: rgba(255, 255, 255, 0.9);
  padding: 6px;
  border-radius: 24px;
  backdrop-filter: blur(10px);
}
.container.scrolled .language-switcher {
  background: rgba(255, 255, 255, 1);
}
.lang-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px 8px;
  border-radius: 18px;
  font-size: 14px;
  font-weight: 600;
  color: var(--blue);
  transition: all 0.3s ease;
}
.lang-btn:hover {
  background: rgba(0, 102, 204, 0.1);
}
.lang-btn.active {
  background: var(--blue);
  color: white;
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
.call {
  background: var(--blue);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 0;
  transition: all 0.3s ease;
  color: white;
  font-size: 20px;
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
