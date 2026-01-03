<template>
  <div>
    <GlobalLoader />
    <NuxtPage />
  </div>
</template>

<script setup>
const { show } = useLoader();

// Показываем лоадер при первой загрузке
onMounted(() => {
  show(1000);
});
</script>
