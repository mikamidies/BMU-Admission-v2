<template>
  <Transition name="loader-fade">
    <div v-if="isLoading" class="global-loader">
      <div class="loader-content">
        <img src="/public/img/brand.svg" alt="BMU Logo" class="logo" />
        <!-- <div class="spinner">
          <div class="spinner-circle"></div>
        </div> -->
      </div>
    </div>
  </Transition>
</template>

<script setup>
const { isLoading } = useLoader();
</script>

<style scoped>
.global-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.logo {
  width: 200px;
  height: auto;
  animation: logoFloat 2s ease-in-out infinite;
}

@keyframes logoFloat {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.spinner {
  position: relative;
  width: 50px;
  height: 50px;
}

.spinner-circle {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid rgba(0, 102, 204, 0.1);
  border-top-color: var(--blue);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loader-fade-enter-active,
.loader-fade-leave-active {
  transition: opacity 0.3s ease;
}

.loader-fade-enter-from,
.loader-fade-leave-to {
  opacity: 0;
}
</style>
