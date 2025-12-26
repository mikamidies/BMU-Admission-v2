<template>
  <section class="about">
    <div class="container">
      <!-- <div class="card card-first">
        <div class="img">
          <img src="/img/about-1.jpg" alt="" />
        </div>
      </div> -->
      <div class="card card-sec">
        <div class="content">
          <h4 class="title">
            Магистерские программы BMU созданы для тех, кто хочет:
          </h4>
        </div>
      </div>
      <div class="card card-third">
        <div class="card card-third" ref="aboutRef">
          <p class="fade-item">
            <Icon name="lucide:check-circle" />
            студентов, которые хотят уверенно подготовиться к университетскому
            обучению
          </p>
          <p class="fade-item">
            <Icon name="lucide:check-circle" />
            развить академические навыки на английском языке и получить
            международно признанный путь к бакалавриату.
          </p>
          <p class="fade-item">
            <Icon name="lucide:check-circle" />
            кто хочет повысить уровень владения английским языком до
            университетского уровня
          </p>
        </div>
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
}
.card p {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  margin-bottom: 4px;
}
.card span {
  transform: translateY(8px);
  color: var(--palette-2);
}
.card-first {
  height: 300px;
  margin-bottom: 8px;
}
.card-third {
  font-size: 18px;
  line-height: 1.4;
  font-weight: 500;
  color: var(--black);
  opacity: 0.9;
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
  z-index: 2;
}
.title {
  font-size: 32px;
  font-weight: 700;
  line-height: 110%;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--black);
  margin-bottom: 16px;
}
@media screen and (max-width: 400px) {
  .container {
    padding: 0 18px;
  }
}
</style>
