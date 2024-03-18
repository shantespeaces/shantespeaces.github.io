<template>
  <section class="portfolio" ref="portfolioRef">
    <div class="heading-container">
      <h2 class="heading">You might also like</h2>
    </div>
    <section class="portfolio-filter" ref="portfolioRef" Id="sticky-portfolio">
      <DownArrowButton />
      <div class="filter">
        <FilterButtons @filter="filterByType" class="next-viewport" />
      </div>
    </section>
    <div class="card-container-wrapper">
      <div
        class="card-container container d-flex flex-wrap gap-4 justify-content-center"
      >
        <CardVue
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
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
import DownArrowButton from "../components/DownArrowButton.vue";
import axios from "axios";

const portfolioRef = ref(null);

const projects = ref([]);
const filteredProjects = ref([]);

async function getProjects() {
  const axios_result = await axios.get("projects.json");
  console.log(axios_result.data);
  projects.value = axios_result.data;
}

getProjects();

const filterByType = (type) => {
  // Filter projects based on selected type
  if (type) {
    filteredProjects.value = projects.value.filter(
      (project) => project.types && project.types.includes(type)
    );
  } else {
    // by default show all projects
    filteredProjects.value = projects.value;
  }
};

// onMounted(async () => {
//   function debounce(func, delay) {
//     let timeoutId;
//     return function () {
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(() => {
//         func.apply(this, arguments);
//       }, delay);
//     };
//   }
//   try {
//     const observer = new IntersectionObserver(debounce(glide), {
//       threshold: 0,
//     });

//     const cards = portfolioRef.value.querySelectorAll(".col");

//     function glide(entries) {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("visible");
//           observer.unobserve(entry.target);
//         }
//       });
//     }

//     cards.forEach((card, index) => {
//       observer.observe(card);
//       card.style.transitionDelay = `${index * 0.5}s`;
//     });
//   } catch (error) {
//     console.error("Error in onMounted:", error);
//   }
// });
</script>

<style>
#sticky-portfolio {
  position: sticky;
  position: -webkit-sticky;
  top: -1000px;
}
section.portfolio {
  overflow-x: hidden;
  position: relative;
  border-top: solid 2px;
  border-image: var(--goldToRight) 1;
  border-image-slice: 1;

  background-color: ivory;
}

.portfolio h2.heading {
  padding-top: 4em;
  background-color: #fbe1d0;
  margin-left: 6em;
  padding-left: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 0;
}
.portfolio-filter {
  padding-top: 5em;
}
.card-container-wrapper {
}
.card-container-wrapper {
  background-image: url("/images/artDecoGreen.jpg");
}
.card-container {
  background-color: ivory;
  padding-top: 5em;
  padding-bottom: 5em;
}
/* .col {
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
.col {
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 2s ease, transform 2s ease;
}
.col.visible {
  opacity: 1;
  transform: translateX(0);
}
p.fixed {
  font-size: 3rem;
} */
</style>
