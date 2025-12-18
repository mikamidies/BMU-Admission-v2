<template>
  <section class="about">
    <div class="container">
      <div class="card">
        <div class="img">
          <img src="/img/about-1.jpg" alt="" />
        </div>
        <div class="content">
          <h4 class="title">What is British Management University?</h4>
          <div class="items">
            <div class="item">
              <div class="icon">
                <Icon name="lucide:book-open" />
              </div>
              <h5 class="name">World Class Education</h5>
            </div>
            <div class="item">
              <div class="icon">
                <Icon name="lucide:graduation-cap" />
              </div>
              <h5 class="name">Double Degree</h5>
            </div>
            <div class="item">
              <div class="icon">
                <Icon name="lucide:building" />
              </div>
              <h5 class="name">Modern Campus</h5>
            </div>
            <div class="item">
              <div class="icon">
                <Icon name="lucide:users" />
              </div>
              <h5 class="name">Vibrant Student Life</h5>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </section>
</template>

<style scoped>
.container {
  padding: 0 24px;
}
.card {
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  padding: 20px;
}
.img {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
}
.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
.content {
  position: relative;
  z-index: 1;
}
.title {
  font-size: 32px;
  font-weight: 700;
  line-height: 110%;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #fff;
  margin-bottom: 24px;
}
.content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  box-shadow: inset 2px 2px 1px 0 rgba(255, 255, 255, 0.3),
    inset -2px -2px 2px 1px rgba(255, 255, 255, 0.3),
    0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s cubic-bezier(0.2, 0.9, 0.3, 1.5);
  cursor: pointer;
  padding: 16px;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.3s ease;
  gap: 4px;
}
.icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}
.icon span {
  width: 24px;
  height: 24px;
  color: var(--blue);
}
.name {
  font-size: 14px;
  line-height: 120%;
  font-weight: 600;
}
</style>
