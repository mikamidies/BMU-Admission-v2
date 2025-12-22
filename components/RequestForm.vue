<template>
  <section class="request-form">
    <div class="container">
      <h2 class="title">Отправить запрос</h2>
      <form @submit.prevent="submitForm" class="form">
        <input
          v-model="form.name"
          type="text"
          placeholder="Ваше имя"
          required
          class="input"
        />
        <input
          v-model="form.email"
          type="email"
          placeholder="Email"
          required
          class="input"
        />
        <input
          v-model="form.phone"
          type="tel"
          placeholder="Телефон"
          required
          class="input"
        />
        <textarea
          v-model="form.message"
          placeholder="Сообщение"
          required
          class="input textarea"
        ></textarea>
        <button type="submit" class="submit-btn">Отправить</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const submitForm = () => {
  alert("Запрос отправлен!");
  form.value = { name: "", email: "", phone: "", message: "" };
};
</script>

<style scoped>
.request-form {
  background: var(--blue);
  padding: 60px 0 120px 0;
  color: white;
}
.container {
  padding: 0 18px;
  max-width: 600px;
  margin: 0 auto;
}
.title {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.input {
  background: white;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  font-family: var(--main);
}
.input::placeholder {
  color: #999;
}
.textarea {
  resize: vertical;
  min-height: 120px;
}
.submit-btn {
  background: var(--red);
  color: white;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}
.submit-btn:hover {
  background: #cc0000;
}
</style>
