<template>
  <div class="hero">
    <div class="wrapper">
      <div class="content">
        <img src="/img/hero-4.png" alt="" />
        <h1>Твой шаг к профессиональному росту и лидерству!</h1>
      </div>
      <div class="buttons">
        <NuxtLink to="/" class="button">
          Программа Foundation
          <div class="icon">
            <Icon name="lucide:arrow-right" />
          </div>
        </NuxtLink>
        <NuxtLink to="/" class="button">
          Программы для Магистратуры
          <div class="icon">
            <Icon name="lucide:arrow-right" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  width: 100%;
  height: 90vh;
  position: relative;
  overflow: hidden;
  padding: 104px 20px 20px 20px;
}
img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.content {
  position: relative;
  z-index: 2;
  width: 100%;
  height: calc(100% - 132px);
  border-radius: 8px;
  overflow: hidden;
}
.content::after {
  content: "";
  position: absolute;
  background: #ffffff;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}
.content h1 {
  font-size: 32px;
  line-height: 110%;
  font-weight: 700;
  color: white;
  position: absolute;
  bottom: 24px;
  left: 24px;
  z-index: 2;
}
.buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.buttons a {
  width: 100%;
  height: 132px;
  border-radius: 8px;
  background: var(--second-blue);
  backdrop-filter: blur(4px);
  font-size: 5vmin;
  cursor: pointer;
  padding: 16px;
  display: flex;
  font-size: 18px;
  line-height: 130%;
  font-weight: 600;
  position: relative;
  color: white;
}
.buttons a:nth-child(2) {
  background: var(--red);
}
.buttons a::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
}
.icon {
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: white;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--blue);
}
@media screen and (max-width: 400px) {
  .wrapper {
    padding: 16px;
  }
  .content h1 {
    font-size: 32px;
  }
  .buttons a {
    height: 144px;
    font-size: 16px;
  }
}
</style>
