<template>
  <section class="benefits">
    <div class="container">
      <h4 class="title">Why Choose BMU?</h4>
      <div class="grid">
        <div class="item">
          <h5 class="name">British Education</h5>
          <p class="txt">
            Accedited by British Quality Assurance Agency and partnerd with UK.
            International faculty members, modern curriculum, and
            state-of-the-art facilities.
          </p>
          <img src="" />
        </div>
        <div class="item">
          <h5 class="name">Double Degree</h5>
          <p class="txt">
            Earn degrees from both BMU and our prestigious UK partner
            universities, enhancing your global career prospects. Also have a
            great opportunity to build career both in Uzbekistan and UK.
          </p>
          <img src="" />
        </div>
        <div class="item">
          <h5 class="name">Modern Campus</h5>
          <p class="txt">
            Study in a brand new campus equipped with cutting-edge facilities,
            fostering an ideal learning environment. Experience modern
            classrooms, advanced labs, and comfortable study areas.
          </p>
          <img src="" />
        </div>
        <div class="item">
          <h5 class="name">Student Life</h5>
          <p class="txt">
            Enjoy a dynamic student life with a variety of clubs, events, and
            activities that enrich your university experience and foster
            personal growth.
          </p>
          <img src="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.benefits {
  padding: 60px 0;
  overflow: hidden;
}
.title {
  font-size: 24px;
  font-weight: 700;
  color: var(--blue);
  margin-bottom: 24px;
}
.grid {
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  overflow: auto;
  margin: 0 -24px;
  padding: 0 24px;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.item {
  background-color: #023e8a;
  padding: 28px;
  border-radius: 16px;
  min-width: 360px;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
.item:nth-child(2) {
  background: #fb6f92;
}
.item:nth-child(3) {
  background: #9d4edd;
}
.item:nth-child(4) {
  background: #058c42;
}
.name {
  font-size: 32px;
  line-height: 120%;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
}
img {
  width: 100%;
  height: auto;
  position: absolute;
}
.txt {
  font-size: 16px;
  line-height: 150%;
  color: #fff;
}
@media screen and (max-width: 400px) {
  .container {
    padding: 0 16px;
  }
  .grid {
    gap: 16px;
  }
  .item {
    min-width: 300px;
    height: 400px;
    padding: 20px;
  }
}
</style>
