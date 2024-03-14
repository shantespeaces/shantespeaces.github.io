<template>
  <section class="portfolio-filter" ref="portfolioRef">
    <div class="neumorphisme-container">
      <div class="container">
        <h2 class="showcase mt-3">You might also like</h2>

        <DownArrowButton />
        <div class="filter">
          <FilterButtons @filter="filterByType" class="next-viewport" />
        </div>
      </div>
    </div>
  </section>

  <section class="neumorphisme-container" ref="portfolioRef">
    <div
      class="portfolio-container mt-3 container d-flex flex-wrap gap-4 justify-content-start"
    >
      <div
        v-for="(card, index) in cards"
        :key="card.id"
        v-show="!selectedType || card.type === selectedType"
        class="col mb-5 mx-3 align-self-start"
        :class="{ 'row-1': index % 2 === 0, 'row-2': index % 2 !== 0 }"
      >
        <!-- <CardVue /> -->
        <CardVue
          :id="card.id"
          :logo="card.logo"
          :title="card.title"
          :type="card.type"
          :index="index"
          :projectId="card.id"
          @handleClick="handleCardClick"
          :backgroundImage="card.backgroundImage"
        />
      </div>
    </div>
  </section>

  <!-- <CustomCursor /> -->
</template>

<script setup>
import FilterButtons from "../components/FilterButtons.vue";
import { ref, onMounted } from "vue";
import CardVue from "@/components/Card.vue";
// import cardData from "/src/projects.json";
import DownArrowButton from "../components/DownArrowButton.vue";
import { useRouter } from "vue-router";
import axios from "axios";

const cardData = await axios.get(`/projects.json`);
const portfolioRef = ref(null);
const router = useRouter();
const cards = ref(cardData);
const selectedType = ref(null);

const filterByType = (type) => {
  // Update the selectedType value
  selectedType.value = type === selectedType.value ? null : type;
};

// const handleCardClick = async (projectId) => {
//   try {
//     const response = await axios.get(`/src/projects.json`);
//     const selectedProject = response.data.find(
//       (project) => project.id === Number(projectId)
//     );

//     // Use selectedProject for some logic (example: log some information)
//     if (selectedProject) {
//       console.log("Selected Project:", selectedProject);
//     }

//     // Navigate to the project page
//     router.push({ name: "project", params: { id: projectId } });
//   } catch (error) {
//     console.error("Error handling card click:", error);
//   }
// };

onMounted(async () => {
  function debounce(func, delay) {
    let timeoutId;
    return function () {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    };
  }
  try {
    const observer = new IntersectionObserver(debounce(glide), {
      threshold: 0,
    });

    const cards = portfolioRef.value.querySelectorAll(".col");

    function glide(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }

    cards.forEach((card, index) => {
      observer.observe(card);
      card.style.transitionDelay = `${index * 0.5}s`;
    });
  } catch (error) {
    console.error("Error in onMounted:", error);
  }
});
onMounted(() => {
  const setRandomPosition = () => {
    const neumorphismeElements = document.querySelectorAll(
      '.portfolio-container > div[class^="neumorphisme"]'
    );

    neumorphismeElements.forEach((element) => {
      const randomTop = Math.random() * 100;
      const randomLeft = Math.random() * 100;

      element.style.top = `calc(${randomTop}% - 50px)`;
      element.style.left = `calc(${randomLeft}% - 50px)`;
    });
  };

  setRandomPosition();
});
</script>

<style>
.portfolio-filter {
  overflow-x: hidden;
}
.neumorphisme-container {
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  flex-direction: row;
  /* background: #fff7f2; */
  background: white;
  position: relative;
}
.neumorphisme-container.container h2 {
  margin-top: 3em;
}
.col {
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 2s ease, transform 2s ease;
}
.row-1 {
  transform: translateX(50px);
}

.row-2 {
  transform: translateX(-50px);
}
.col.visible {
  opacity: 1;
  transform: translateX(0);
}
p.fixed {
  font-size: 3rem;
}
.neumorphisme31,
.neumorphisme32 {
  position: absolute;
  /* z-index: 1; */
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(145deg, #fffbf1, #e6d4cb);
  box-shadow: 8px 8px 10px #e0cfc6, -8px -8px 10px #fffffc;
}

.neumorphisme33,
.neumorphisme34,
.neumorphisme35,
.neumorphisme36 {
  position: absolute;
  /* z-index: 1; */
  width: 100px;
  height: 100px;

  border-radius: 50%;
  background: #fff7f2;
  box-shadow: 8px 8px 10px #e0d9d5, -8px -8px 10px #ffffff;
}
.neumorphisme37,
.neumorphisme38,
.neumorphisme39,
.neumorphisme40 {
  position: absolute;
  /* z-index: 1; */
  width: 50px;
  height: 50px;

  border-radius: 50%;
  background: #fff7f2;
  box-shadow: 8px 8px 10px #e0d9d5, -8px -8px 10px #ffffff;
  /* border-radius: 50%;
  background: #fff7f2;
  box-shadow: 20px 20px 17px #d9d2ce, -20px -20px 17px #ffffff; */
}
</style>
