<template>
  <section id="request" class="request-form">
    <div class="container">
      <h2 class="title">
        Хотите больше узнать о BMU курсах? Оставьте заявку и мы перезвоним:
      </h2>
      <form @submit.prevent="submitForm" class="form">
        <div class="form-item">
          <div class="icon">
            <Icon name="lucide:user" />
          </div>
          <input
            v-model="form.name"
            type="text"
            placeholder="Ваше имя"
            required
            class="input"
          />
        </div>
        <div class="form-item">
          <div class="icon">
            <Icon name="lucide:user" />
          </div>
          <input
            v-model="form.surname"
            type="text"
            placeholder="Ваша фамилия"
            required
            class="input"
          />
        </div>
        <div class="form-item">
          <div class="icon">
            <Icon name="lucide:mail" />
          </div>
          <input
            v-model="form.email"
            type="text"
            placeholder="Ваше email"
            required
            class="input"
          />
        </div>
        <div class="form-item numberer">
          <div>
            <div class="icon">
              <Icon name="lucide:phone" />
            </div>
            <input
              v-model="form.number"
              type="number"
              placeholder="Телефон"
              required
              class="input"
            />
          </div>
          <button class="send-sms">Получить SMS</button>
        </div>
        <div class="form-item">
          <div class="icon">
            <Icon name="lucide:message-circle" />
          </div>
          <input
            v-model="form.smsCode"
            type="text"
            placeholder="Код с SMS"
            required
            class="input"
          />
        </div>
        <div class="form-item">
          <div class="icon">
            <Icon name="lucide:lock" />
          </div>
          <input
            v-model="form.password"
            type="password"
            placeholder="Пароль"
            required
            class="input"
          />
        </div>
        <div class="form-item">
          <div class="icon">
            <Icon name="lucide:lock" />
          </div>
          <input
            v-model="form.confirmPassword"
            type="password"
            placeholder="Подтвердите пароль"
            required
            class="input"
          />
        </div>

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
  background: var(--palette-1);
  padding: 40px 0 80px 0;
  color: white;
}
.container {
  padding: 0 18px;
  max-width: 600px;
  margin: 0 auto;
}
.title {
  font-size: 20px;
  line-height: 130%;
  font-weight: 700;
  margin-bottom: 24px;
}
.sub {
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 40px;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.form-item {
  position: relative;
}
.icon {
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  color: #999;
}
.input {
  background: white;
  border: none;
  padding: 16px 16px 16px 48px;
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
  background: var(--palette-5);
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
.numberer {
  display: grid;
  grid-template-columns: 1fr 120px;
}
.numberer input {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.send-sms {
  background: var(--palette-3);
  color: white;
  border: none;
  border-radius: 8px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  padding: 0 12px;
}
</style>
