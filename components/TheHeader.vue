<template>
  <div class="container" :class="{ scrolled: isScrolled }">
    <div class="left">
      <NuxtLink to="/">
        <img src="/public/img/brand.svg" />
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
  position: sticky;
  top: 0;
  background: transparent;
  z-index: 1000;
  transition: all 0.3s ease;
}
.container.scrolled {
  background: rgba(245, 245, 247, 0.9);
  padding: 20px;
  border-bottom: 1px solid var(--border);
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
}
.stick::before {
  width: 30px;
  height: 3px;
  background: var(--blue);
  content: "";
  position: absolute;
  top: -10px;
  left: 0;
}
.stick::after {
  width: 30px;
  height: 3px;
  background: var(--blue);
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
}
</style>
