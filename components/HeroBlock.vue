<template>
  <div class="hero-block">
    <div class="content">
      <img src="/img/hero.jpg" alt="" />

      <h1>Apply to BMU. Become a professional Expert</h1>

      <div class="buttons">
        <NuxtLink to="/" class="button">
          Postgraduate Programs
          <div class="icon">
            <Icon name="lucide:arrow-right" />
          </div>
        </NuxtLink>
        <NuxtLink to="/" class="button">
          Undergraduate Programs
          <div class="icon">
            <Icon name="lucide:arrow-right" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-block {
  height: 100vh;
  display: flex;
  align-items: flex-end;
  padding: 24px;
  position: relative;
  margin-top: -106px;
}
img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
.content h1 {
  font-size: 40px;
  line-height: 110%;
  font-weight: 700;
  margin-bottom: 24px;
  color: white;
}
.buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.buttons a {
  width: 100%;
  height: 160px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  box-shadow: inset 2px 2px 1px 0 rgba(255, 255, 255, 0.3),
    inset -2px -2px 2px 1px rgba(255, 255, 255, 0.3),
    0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.8);
  font-size: 5vmin;
  transition: all 0.3s cubic-bezier(0.2, 0.9, 0.3, 1.5);
  cursor: pointer;
  padding: 16px;

  font-size: 18px;
  line-height: 130%;
  font-weight: 600;
  position: relative;
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
</style>
