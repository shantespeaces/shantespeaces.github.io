<template>
  <section class="portfolio" ref="portfolioRef" Id="portfolio">
    <div Id="sticky-header">
      <div class="heading-container">
        <h2 class="heading">You might also like</h2>
      </div>
    </div>
    <div class="portfolio-filter" ref="portfolioRef">
      <DownArrowButton />
      <div class="filter">
        <FilterButtons @filter="filterByType" class="next-viewport" />
      </div>
    </div>
  </section>
  <section Id="sticky-cards">
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
import { ref } from "vue";
import CardVue from "@/components/Card.vue";
import DownArrowButton from "../components/DownArrowButton.vue";
import axios from "axios";

const portfolioRef = ref(null);

const projects = ref([]);
const filteredProjects = ref([]);

async function getProjects() {
  try {
    const axios_result = await axios.get("projects.json");
    console.log("Projects fetched:", axios_result.data);
    projects.value = axios_result.data;
    // Initialize filteredProjects with all projects
    filteredProjects.value = projects.value;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
}

getProjects();

const filterByType = (type) => {
  console.log("Filtering by type:", type);
  // Filter projects based on selected type
  if (type) {
    filteredProjects.value = projects.value.filter(
      (project) => project.types && project.types.includes(type)
    );
  } else {
    // by default show all projects
    filteredProjects.value = projects.value;
    console.log("Filtered projects:", filteredProjects.value);
  }
};
</script>

<style>
#sticky-header {
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
}
#sticky-cards {
  position: sticky;
  position: -webkit-sticky;
}
section.portfolio {
  position: relative;
  border-top: solid 3px;
  border-image: var(--goldToRight) 1;
  border-image-slice: 1;
  background-color: #fffdf6;
}

.portfolio h2.heading {
  padding-top: 4em;
  background-color: #fde8d9;
  margin-left: 6em;
  padding-left: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 0;
}
.portfolio-filter {
  height: 40em;
  position: relative;
  background-color: #fffdf6;
}

.card-container-wrapper {
  background-image: url("/images/artDeco/artDecoGreen.jpg");
  background-color: #fffdf6;
}
.card-container {
  background-color: #fffdf6;
  padding-top: 5em;
  padding-bottom: 5em;
}

.selected {
  animation: pulse 2s;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
@media screen and (max-width: 1400px) {
  .card-container-wrapper {
    padding-left: 6em;
    padding-right: 6em;
  }
}
@media screen and (max-width: 1200px) {
  .portfolio h2.heading {
    margin-left: 3.5em;
  }
}
@media screen and (max-width: 992px) {
  .card-container-wrapper {
    padding: 0;
  }
  .portfolio h2.heading {
    margin-left: 2.5em;
    font-size: 3rem;
  }
}
@media screen and (max-width: 768px) {
  .card-container-wrapper {
    padding: 0;
  }
  .portfolio h2.heading {
    font-size: 2.5rem;
  }
}
@media screen and (max-width: 576px) {
  .card-container-wrapper {
    padding: 0;
  }
  .portfolio h2.heading {
    margin-left: 1em;
    padding-top: 3em;
    font-size: 3rem;
  }
}
@media screen and (max-width: 430px) {
  .portfolio-filter {
    height: 43em;
  }
}
</style>
