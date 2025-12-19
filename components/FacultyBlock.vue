<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCards } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { ref } from "vue";

const faculties = ref([
  {
    title: "John Doe",
    description: "Massachusetts Institute of Technology ",
    image: "/img/team-1.png",
  },
  {
    title: "Jane Smith",
    description: "Stanford University",
    image: "/img/team-2.png",
  },
  {
    title: "Alice Johnson",
    description: "Harvard University",
    image: "/img/team-3.png",
  },
  {
    title: "Bob Brown",
    description: "California Institute of Technology",
    image: "/img/team-4.png",
  },
  {
    title: "John Doe",
    description: "Massachusetts Institute of Technology ",
    image: "/img/team-1.png",
  },
  {
    title: "Jane Smith",
    description: "Stanford University",
    image: "/img/team-2.png",
  },
  {
    title: "Alice Johnson",
    description: "Harvard University",
    image: "/img/team-3.png",
  },
  {
    title: "Bob Brown",
    description: "California Institute of Technology",
    image: "/img/team-4.png",
  },
]);
</script>

<template>
  <section class="faculty">
    <div class="container">
      <h2 class="title">Faculty Members</h2>

      <Swiper
        :loop="true"
        :effect="'cards'"
        :modules="[EffectCards]"
        class="slider"
      >
        <SwiperSlide
          v-for="(faculty, index) in faculties"
          :key="index"
          class="slide"
        >
          <div class="content">
            <h3 class="name">{{ faculty.title }}</h3>
            <p class="description">{{ faculty.description }}</p>
          </div>
          <div class="image-wrapper">
            <img :src="faculty.image" :alt="faculty.title" class="image" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
.faculty {
  padding: 60px 0;
  overflow: hidden;
}
.title {
  font-size: 24px;
  font-weight: 700;
  color: var(--blue);
  margin-bottom: 24px;
}
.slider {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
.slide {
  display: flex;
  flex-direction: column;
  background: #023e8a;
  border-radius: 16px;
}
.slide:nth-child(even) {
  background: #0077b6;
}
.content {
  margin-bottom: 16px;
  padding: 24px;
}
.name {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 8px;
  color: white;
}
.description {
  font-weight: 300;
  font-size: 16px;
  color: white;
  opacity: 0.8;
}
.image-wrapper {
  width: 100%;
  height: 400px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
}
@media screen and (max-width: 400px) {
  .slider {
    max-width: 300px;
  }
  .image-wrapper {
    height: 300px;
  }
}
</style>
