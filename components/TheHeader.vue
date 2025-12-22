<template>
  <div class="container" :class="{ scrolled: isScrolled }">
    <div class="left">
      <NuxtLink to="/">
        <img src="/public/img/brand.svg" class="black" />
      </NuxtLink>
    </div>
    <div class="right">
      <div class="burger">
        <div class="stick"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
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
}
.container.scrolled .stick,
.container.scrolled .stick::before,
.container.scrolled .stick::after {
  background: var(--blue);
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
