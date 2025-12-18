<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { ref } from "vue";

const faculties = ref([
  {
    title: "John Doe",
    description: "Massachusetts Institute of Technology ",
    image: "/",
  },
  {
    title: "Jane Smith",
    description: "Stanford University",
    image: "/",
  },
  {
    title: "Alice Johnson",
    description: "Harvard University",
    image: "/",
  },
  {
    title: "Bob Brown",
    description: "California Institute of Technology",
    image: "/",
  },
]);
</script>

<template>
  <section class="faculty">
    <div class="container">
      <h2 class="heading">Faculty Members</h2>

      <Swiper :loop="true" class="slider">
        <SwiperSlide
          v-for="(faculty, index) in faculties"
          :key="index"
          class="slide"
        >
          <div class="content">
            <h3 class="title">{{ faculty.title }}</h3>
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
