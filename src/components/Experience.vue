<template>
  <section class="experience" id="sticky-header">
    <div class="heading-container">
      <h2 class="heading">Experience</h2>
    </div>
  </section>
  <section id="sticky-projects">
    <div class="project-wrapper">
      <div class="project-container container d-flex">
        <!-- titles-left -->
        <div class="left-container container d-flex justify-content-center">
          <div
            v-for="(project, index) in displayedProjects"
            :key="project.id"
            class=" "
          >
            <div
              class="project-title container d-flex"
              @click="handleTitleClick(project)"
              :class="{ title: selectedProject === project }"
            >
              <h3 class="heading">{{ project.title }}</h3>
              <img
                class="project-image"
                :src="project.logo"
                :class="{ show: selectedProject === project }"
                alt=""
              />
            </div>
          </div>
        </div>

        <!-- content-right -->
        <div class="right-container container d-flex justify-content-center">
          <div v-for="project in projects" :key="project.id" class="">
            <div
              v-if="selectedProject === null || selectedProject === project"
              class="info"
            >
              <div class="date-container d-flex justify-content-between">
                <p class="date">{{ project.date }}</p>
                <div class="link-container d-flex">
                  <a
                    :href="project.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Code</a
                  >
                  <router-link
                    class="project-details"
                    :to="{
                      name: 'project',
                      params: { id: project.id },
                    }"
                  >
                    {{ project.types.includes("video") ? "Video" : "Design" }}
                  </router-link>
                </div>
              </div>
              <p class="description">{{ project.description }}</p>
              <p class="highlights">HIGHLIGHTS INCLUDE:</p>
              <ul>
                <li
                  v-for="(item, index) in project.items"
                  :key="`${project.id}_${index}`"
                  class="list-item d-flex pb-2"
                >
                  <span class="bullet">+</span>
                  <span class="content">{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        class="pagination-button-wrapper container d-flex justify-content-around py-2"
      >
        <div class="pagination-buttons">
          <button
            class="btn pagination-buttons d-flex justify-content-around align-items-center"
            @click="showPreviousProjects"
            :disabled="currentPage === 0"
          >
            <span class="before material-symbols-outlined mt-1"
              >navigate_before</span
            >
            <p class="mt-3 pt-1">Previous</p>
          </button>
        </div>
        <!-- 
          <div
            class="pagination-circles d-flex jutify-content-center align-items-center"
          >
            <span class="pagination-circle material-symbols-outlined mt-1"
              >circle</span
            >
            <span class="pagination-circle material-symbols-outlined mt-1"
              >circle</span
            >
            <span class="pagination-circle material-symbols-outlined mt-1"
              >circle</span
            >
          </div> -->

        <div class="pagination-buttons">
          <button
            class="btn pagination-buttons d-flex justify-content-around align-items-center"
            @click="showNextProjects"
            :disabled="currentPage === maxPage"
          >
            <p class="mt-3 pt-1">Next</p>
            <span class="next material-symbols-outlined mt-1"
              >navigate_next</span
            >
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, nextTick } from "vue";
import axios from "axios";

const projects = ref([]);

async function getProjects() {
  const axios_result = await axios.get("projects.json");
  console.log(axios_result.data);
  projects.value = axios_result.data;
}

getProjects();

const selectedProject = ref(null);

const handleTitleClick = (project) => {
  selectedProject.value = project;
};

const projectsPerPage = 3;
const currentPage = ref(0);

const displayedProjects = computed(() => {
  const startIndex = currentPage.value * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  return projects.value.slice(startIndex, endIndex);
});

const maxPage = computed(
  () => Math.ceil(projects.value.length / projectsPerPage) - 1
);

// Set the first project as active when going to nex/previous page
const showPreviousProjects = () => {
  currentPage.value = Math.max(currentPage.value - 1, 0);
  selectedProject.value = displayedProjects.value[0];
};

const showNextProjects = () => {
  currentPage.value = Math.min(currentPage.value + 1, maxPage.value);
  selectedProject.value = displayedProjects.value[0];
};

onMounted(async () => {
  // Fetch projects
  await getProjects();

  // Sets the default selected project to the first project if no project is selected
  selectedProject.value = projects.value[0];
  await nextTick();
  // console.log("Selected project after setting:", selectedProject.value);
});
</script>

<style>
/*EXPERIENCE*/

#sticky-header {
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
}
#sticky-projects {
  position: sticky;
  position: -webkit-sticky;
  top: -500px;
}
.experience h2.heading {
  text-align: end;
  padding-right: 1rem;
  padding-top: 3em;
  padding-bottom: 1rem;
  background-color: #fde8d9;
  margin-right: 6em;
  margin-bottom: 0;
}
.heading-container {
  background-color: #fffdf6;
}

.project-wrapper {
  position: relative;
  background-image: url("/images/artDeco/artDecoGreen.jpg");
  width: 100vw;
  padding-top: 5em;
  padding-bottom: 5em;
  border-top: solid 2px;
  border-bottom: solid 2px;
  border-image: var(--goldToRight) 1;
  border-image-slice: 1;
}
.project-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: #fffdf6;
  padding: 10em 5em;
  margin-top: 5em;
  border-bottom: solid 0px 2px;
  border-top: solid 2px;
  border-image: var(--goldToRight) 1;
  border-image-slice: 1;
}
img.project-image {
  display: none;
  opacity: 0;
  transition: opacity 10s ease;
}

img.project-image.show {
  display: block;
  height: 10em;
  width: 10em;
  opacity: 1;
}
.project-title.container {
  flex-direction: column;
}
.project-title {
  cursor: pointer;
  letter-spacing: 4px;
  padding: 2em;
  color: black;
}

h3.heading {
  font-size: 1.5rem;
}
.title {
  border-bottom: solid 2px;
  border-image: var(--goldToRightDark) 1;
  border-image-slice: 1;
  background-image: var(--goldToRightDark);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-weight: bold;
}
.project-title:hover {
  background-image: var(--goldToRightDark);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-weight: bold;
  transform: translateY(2px);
}

.left-container {
  border-left: solid 2px;
  border-image: var(--goldToBottom) 1;
  border-image-slice: 1;
  max-width: 500px;

  flex-direction: column;
}

.right-container {
  padding-top: 2em;
}
.date-container {
  height: 50px;
}

.right-container .link-container a {
  text-decoration: none;
  font-size: 1.3rem;
  letter-spacing: 2px;
  background-image: var(--goldToRightDark);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  text-transform: uppercase;
  width: 200px;
  text-align: right;
  font-family: "Poiret One";
  font-weight: bold;
}
.right-container .link-container a:hover {
  font-size: 1.4rem;
  transition: font-size 0.5s;
}

.right-container p,
.right-container li {
  color: black;
  letter-spacing: 1px;
  font-size: 1.2rem;
}
.right-container .info {
  margin-left: 3em;
}
.right-container .date {
  font-style: italic;
  text-transform: uppercase;
  margin-bottom: 0;
  letter-spacing: 2px;
}
.right-container .description {
  margin: 1.5em 0em 1.5em 0em;
}
.right-container .highlights {
  letter-spacing: 2px;
}

.right-container ul {
  list-style-type: none;
  padding-left: 0;
}

.right-container .bullet {
  background-image: var(--goldToRight);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
.right-container .content {
  margin-left: 1em;
}

/* PAGINATION BUTTONS */
.pagination-button-wrapper {
  background-color: #002d40;
  border-bottom: solid 2px;
  border-image: var(--goldToRight) 1;
  border-image-slice: 1;
  height: 100px;
  margin-bottom: 5em;
}

.pagination-buttons button {
  cursor: pointer;
  width: 200px;
  height: 65px;
  background-image: var(--goldToRight);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  margin-top: 0.7em;
}
.pagination-buttons p {
  text-transform: uppercase;
  letter-spacing: 2px;
}
.pagination-buttons button:hover {
  transform: translateY(2px);
  background-image: var(--goldToRight);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
.pagination-buttons button:hover p {
  font-size: 1.6rem;
  font-weight: bold;
}
.pagination-buttons span {
  font-size: 2.6rem;
}

.pagination-buttons button:disabled {
  color: #999;
  cursor: not-allowed;
  border: none;
}

@media screen and (max-width: 1200px) {
  #sticky-projects {
    top: -330px;
  }
  .experience h2.heading {
    margin-right: 3em;
  }
  h3.heading {
    font-size: 1.3rem;
  }

  .right-container .link-container a,
  .right-container li,
  .right-container p {
    font-size: 1.1rem;
  }
  .right-container .link-container {
    width: 175px;
  }
}
@media screen and (max-width: 992px) {
  #sticky-projects {
    top: -500px;
  }
  .experience h2.heading {
    margin-right: 2em;
  }
  h3.heading {
    font-size: 1.5rem;
  }
  .right-container .description,
  .right-container .date,
  .right-container li {
    font-size: 1.2rem;
  }
  .project-container {
    flex-direction: column;
  }
  .project-title.container {
    padding-bottom: 1em;
    padding-top: 1em;
  }

  .left-container {
    margin-left: 0;
  }
  .right-container {
    padding-top: 3em;

    border-left: solid 2px;
    border-image: var(--goldToBottom) 1;
    border-image-slice: 1;
  }
  .right-container .info {
    margin-left: 2em;
  }
  .right-container .link-container a {
    text-align: left;
  }
}

@media screen and (max-width: 768px) {
  #sticky-projects {
    top: -600px;
  }
  .experience h2.heading {
    margin-right: 1.5em;
  }
  h3.heading {
    font-size: 1.3rem;
  }

  .pagination-buttons p {
    display: none;
  }
  .pagination-buttons span {
    font-size: 3.6rem;
  }
  .left-container,
  .right-container {
    max-width: 420px;
    margin: auto;
  }
  h3.heading {
    font-size: 1.3rem;
  }
  .right-container .description,
  .right-container .date,
  .right-container li {
    font-size: 1.1rem;
  }

  .right-container .link-container a {
    text-align: center;
  }
}

@media screen and (max-width: 576px) {
  #sticky-projects {
    top: -600px;
  }
  .experience h2.heading {
    font-weight: bold;
    padding-top: 2em;
  }
  h3.heading {
    font-size: 1.2rem;
  }
  .right-container {
    margin-bottom: 1em;
  }
  .left-container {
    padding-top: 4em;
    margin-top: 1em;
  }

  .right-container .description,
  .right-container .date,
  .right-container li {
    font-size: 1rem;
  }

  .right-container ul {
    padding-top: 0;
  }
  .project-title.container {
    padding-bottom: 0;
  }
  .project-container {
    padding: 1em;
  }
  .right-container .date-container {
    flex-direction: column;
  }
  .right-container .date {
    padding-bottom: 1rem;
  }
  .right-container .link-container a {
    text-align: left;
  }
  .project-title {
    flex-direction: column;
    margin-bottom: 1em;
  }

  .project-title img.project-image.show {
    height: 7em;
    width: 100%;
    margin-top: 1em;
    margin-bottom: 1em;
  }
}
@media screen and (max-width: 450px) {
  #sticky-projects {
    top: -650px;
  }
  .experience h2.heading {
    font-weight: bold;
    padding-top: 2em;
    margin-right: 1em;
  }
  .right-container,
  .left-container {
    border-left: none;
  }
  .project-title img.project-image.show {
    height: 5em;
    width: 5em;
    margin-top: 1em;
    margin-bottom: 1em;
  }
}
@media screen and (max-width: 360px) {
  #sticky-projects {
    top: -1000px;
  }
  .experience h2.heading {
    margin-right: 0;
  }

  .right-container .description,
  .right-container li {
    font-size: 1.3rem;
    margin-left: 0;
    padding-right: 0.5em;
  }
  .right-container .link-container a,
  .right-container .date {
    font-size: 1.1rem;
  }
  .project-title h3 {
    font-size: 1.1rem;
  }

  p.description {
    margin: 1em 1em;
  }

  .project-container {
    padding: 1em;
  }
  .pagination-buttons button {
    width: 100px;
  }
}
</style>
