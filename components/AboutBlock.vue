<template>
  <section class="about">
    <div class="container">
      <div class="card card-first">
        <div class="img">
          <img src="/img/about-1.jpg" alt="" />
        </div>
      </div>
      <div class="card card-sec">
        <div class="content">
          <h4 class="title">Магистерские программы BMU</h4>
          <h4 class="title">созданы для тех, кто хочет:</h4>
        </div>
      </div>
      <div class="card card-third">
        <p>
          • ускорить карьерный рост<br />
          • получить международную управленческую экспертизу<br />
          • усилить свои позиции на рынке труда в Узбекистане и за его
          пределами<br />
          <br />
          Мы объединяем британские академические стандарты,
          практико-ориентированное обучение и глубокое понимание локального и
          международного бизнес-контекста.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  padding: 0 24px;
}
.card {
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  padding: 20px;
}
.card-first {
  height: 300px;
  margin-bottom: 8px;
}
.card-sec {
  background: var(--black);
  margin-bottom: 8px;
}
.card-third {
  background: #f3f3ee;
  font-size: 18px;
  line-height: 1.4;
  font-weight: 500;
}
.img {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
}
.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
.content {
  position: relative;
  z-index: 2;
}
.title {
  font-size: 32px;
  font-weight: 700;
  line-height: 110%;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #fff;
}
</style>
