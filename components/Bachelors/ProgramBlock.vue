<template>
  <section class="program">
    <div class="anchor" id="program"></div>
    <div class="container" ref="programRef">
      <h4 class="title" ref="titleRef">Узнай больше о BMU</h4>
      <div class="grid">
        <div v-for="(program, index) in programs" :key="index" class="item">
          <div class="header" @click="toggleAccordion(index)">
            <h5 class="name">{{ program.name }}</h5>

            <div class="icon">
              <Icon name="lucide:plus" />
            </div>
          </div>
          <transition name="accordion">
            <div v-show="program.isOpen" class="body">
              <div class="txt" v-html="program.description"></div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useNuxtApp } from "#app";

const programRef = ref(null);
let ScrollTriggerPlugin = null;
let gsapContext = null;
let SplitTextPlugin = null;

const programs = ref([
  {
    name: "Программа Foundation",
    description:
      "Программа Foundation разработана в партнёрстве с британским университетом University of Reading, входящим в топ-30 вузов Великобритании. По завершении обучения студенты получают сертификат Foundation, который предоставляет возможность продолжить обучение на уровне бакалавриата как в Узбекистане, так и за рубежом.",
    isOpen: false,
  },
  {
    name: "Программы Бакалавриата",
    description:
      "Программы бакалавриата аккредитованы Министерством высшего образования Республики Узбекистан, а также проходят ежегодную валидацию партнёрским университетом Queen Margaret University (Великобритания). Университет предлагает следующие направления по специальностям:<br><br>• Бухгалтерский учёт и финансы (ACCA)<br>• Банковское дело и финансы (CFA)<br>• Управление проектами (PMI)<br>• Информационные системы управления (IT)<br>• Логистика и управление цепочками поставок<br>• Цифровой маркетинг и электронная коммерция<br>• Коммуникации и связи с общественностью<br>• Экономика и устойчивое развитие<br><br>По окончании обучения студенты получают двойной диплом — международного и национального образца, что значительно повышает их конкурентоспособность на рынке труда.",
    isOpen: false,
  },
  {
    name: "Гранты и стипендии",
    description:
      "Доступны следующие гранты:<br><br>• Грант 20% — предоставляется абитуриентам с результатом IELTS ≥ 6.0.<br>• Грант 50% — предоставляется абитуриентам с результатом IELTS ≥ 7.0, успешно сдавшим внутренний экзамен по математике или имеющим SAT ≥ 550.<br>• Грант 100% — предоставляется талантливым абитуриентам из социально уязвимых семей с результатом IELTS ≥ 6.0, успешно прошедшим экзамен по математике и собеседование, а также предоставившим подтверждающие документы.<br><br>Стипендии для лучших студентов на курсе:<br>• Золотая стипендия — 1 000 000 UZS в месяц<br>• Серебряная стипендия — 500 000 UZS в месяц",
    isOpen: false,
  },
  {
    name: "Общежитие для студентов",
    description:
      "Общежитие British Management University — это современное 9-этажное здание площадью 6 500 м², спроектированное с заботой о комфорте и безопасности студентов. Здесь могут проживать до 376 студентов, включая бакалавриат и магистратуру.<br><br>Что вас ждет:<br>• Современные и удобные комнаты — в большинстве по 3 человека, есть отдельные комнаты для студентов магистратуры<br>• Всё включено: кровати с постельным бельём, шкафы, рабочее место, индивидуальный санузел с душем<br>• Коворкинги для учебы и совместных проектов<br>• Просторные зоны отдыха на первом этаже<br>• Прачечная с удобным графиком<br>• Высокоскоростной Wi-Fi — 24/7<br>• Безопасность и комфорт: жизнь в общежитии курируется резидент-комендантом, который следит за порядком, соблюдением стандартов и помогает решать возникающие вопросы.<br>• Мужчины и женщины проживают на отдельных этажах, что также способствует уважительной и безопасной атмосфере.",
    isOpen: false,
  },
  {
    name: "Cambridge Dream",
    description:
      "При поступлении, каждый абитуриент может стать участником уникального конкурса Cambridge Dream и выиграть поездку в Великобританию, полностью финансируемую университетом. Принимайте участие в перспективном конкурсе BMU и отправляйтесь в сердце британского образования уже в апреле 2027 года – выбор за вами!<br><br>Подробную информацию можно получить на сайте или по номеру телефона (+78)-555-33-33.<br><a href='https://bmu-edu.uz/page/instructions-and-criteria-for-participation-in-the-competition' target='_blank' style='color: white; text-decoration: underline;'>Подробнее о конкурсе</a><br><br>Минимальные критерии приема:<br>• Диплом средней школы/ академического лицея/ профессионального колледжа<br>• IELTS ≥ 5,5 или эквивалент",
    isOpen: false,
  },
]);

const toggleAccordion = (index) => {
  const isCurrentlyOpen = programs.value[index].isOpen;
  programs.value.forEach((prog, i) => {
    prog.isOpen = i === index && !isCurrentlyOpen;
  });
};

const applyNow = () => {
  const element = document.getElementById("faculty");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  window.applyNow = applyNow;

  if (process.server) return;
  (async () => {
    const moduleTrigger = await import("gsap/ScrollTrigger");
    const moduleSplit = await import("gsap/SplitText");
    ScrollTriggerPlugin = moduleTrigger.ScrollTrigger || moduleTrigger.default;
    SplitTextPlugin = moduleSplit.SplitText || moduleSplit.default;

    const { $gsap } = useNuxtApp();
    $gsap.registerPlugin(ScrollTriggerPlugin, SplitTextPlugin);

    await import("vue").then(({ nextTick }) => nextTick());

    const items = programRef.value?.querySelectorAll(".item");
    if (!items || !items.length) return;

    gsapContext = $gsap.context(() => {
      const tl = $gsap.timeline({
        scrollTrigger: {
          trigger: programRef.value,
          start: "top 75%",
          toggleActions: "restart none restart none",
        },
      });
      tl.from(items, {
        y: 32,
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
        stagger: 0.12,
      });

      const title = programRef.value?.querySelector(".title");
      if (title) {
        const split = new SplitTextPlugin(title, { type: "chars" });
        tl.set(split.chars, { opacity: 0 }, 0);
        tl.to(
          split.chars,
          {
            opacity: 1,
            duration: 0.05,
            stagger: 0.05,
            ease: "none",
          },
          0
        );
      }
    }, programRef);
  })();
});

onBeforeUnmount(() => {
  gsapContext && gsapContext.revert();
});
</script>

<style scoped>
.program {
  overflow: hidden;
}
.anchor {
  position: relative;
  height: 1px;
  top: -120px;
}
.container {
  padding: 0 18px;
}
.title {
  font-size: 24px;
  font-weight: 700;
  color: var(--blue);
  margin-bottom: 24px;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}

.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  max-height: 500px;
  overflow: hidden;
}

.item {
  background: var(--palette-5);
  border-radius: 8px;
  margin-bottom: 4px;
}

.header {
  padding: 24px;
  color: white;
  font-size: 18px;
  font-weight: 700;
  line-height: 120%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.body {
  padding: 0 24px 24px 24px;
  color: white;
  font-size: 16px;
  line-height: 150%;
}
.txt {
  opacity: 0.9;
  font-size: 16px;
  font-weight: 500;
}
img {
  width: 100%;
  height: 250px;
  border-radius: 6px;
  object-fit: cover;
  display: none;
}
.apply-btn {
  background: white;
  color: var(--blue);
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 16px;
}
@media screen and (max-width: 400px) {
  .container {
    padding: 0 16px;
  }
  .header {
    padding: 20px;
    font-size: 18px;
  }
  .body {
    padding: 0 20px 20px 20px;
  }
}
</style>
