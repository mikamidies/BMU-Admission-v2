<template>
  <TheHeader />
  <HeroBlock id="hero" />
  <PartnersBlock id="partners" />
  <AboutBlock id="about" />
  <BenefitsBlock id="benefits" />
  <ProgramBlock id="program" />
  <FacultyBlock id="faculty" />
  <!-- <LifeBlock id="life" /> -->
  <RequestForm id="request" />
  <button class="fixed-button">Узнать больше</button>
</template>

<style scoped>
.fixed-button {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--black);
  color: white;
  border: none;
  padding: 18px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  z-index: 1000;
  width: calc(100% - 40px);
}
</style>
