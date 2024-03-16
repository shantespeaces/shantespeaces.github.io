<template>
  <section class="portfolio-filter" ref="portfolioRef" Id="sticky-portfolio">
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
      <CardVue
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
      />
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
      (project) => project.type && project.type === type
    );
  } else {
    // If everything is selected, show all projects
    filteredProjects.value = projects.value;
  }
};

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
</script>

<style>
#sticky-portfolio {
  position: sticky;
  position: -webkit-sticky;
  top: -1000px;
}
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
</style>
