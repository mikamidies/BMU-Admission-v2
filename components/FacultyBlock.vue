<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
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
]);
</script>

<template>
  <section class="faculty">
    <div class="container">
      <h2 class="title">Faculty Members</h2>

      <Swiper :loop="true" class="slider">
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
  padding: 40px 0;
  background-color: #f9f9f9;
}
.title {
  font-size: 24px;
  font-weight: 700;
  color: var(--blue);
  margin-bottom: 24px;
}
</style>
