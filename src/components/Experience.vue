<template>
  <section class="experience" id="experience">
    <section class="experience-header" id="experience-header">
      <div class="heading-container" ref="headingContainer">
        <h2 class="heading">Experience</h2>
      </div>
    </section>
    <section class="relative">
      <div class="project-wrapper" id="sticky-projects">
        <div class="project-container container">
          <!-- titles-left -->
          <div class="left-wrapper column">
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
                  <router-link
                    :to="{
                      name: 'project',
                      params: { id: project.id },
                    }"
                    ><div class="project-image-wrapper">
                      <div class="hover-circle"></div>
                      <img
                        class="project-image"
                        :src="project.logo"
                        :class="{ show: selectedProject === project }"
                        alt=""
                      />
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- content-right -->
          <div class="right-wrappper column">
            <div
              class="right-container container d-flex justify-content-center"
            >
              <div v-for="project in projects" :key="project.id" class="this">
                <div
                  v-if="selectedProject === null || selectedProject === project"
                  class="info"
                >
                  <div class="project-title right">
                    <h2 class="heading">{{ project.title }}</h2>
                  </div>
                  <div class="date-container d-flex justify-content-between">
                    <p class="date">{{ project.date }}</p>
                    <div class="link-container d-flex">
                      <a
                        :href="project.link"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Github</a
                      >
                      <router-link
                        class="project-details"
                        :to="{
                          name: 'project',
                          params: { id: project.id },
                        }"
                      >
                        {{
                          project.types.includes("video") ? "Video" : "Design"
                        }}
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
                      <span class="list-item">{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="pagination-button-wrapper row">
            <div
              class="pagination-button-container d-flex justify-content-around py-2"
            >
              <div class="pagination-buttons">
                <button
                  class="btn pagination-buttons d-flex align-items-center"
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
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, nextTick } from "vue";
import axios from "axios";
import { RouterLink } from "vue-router";

const projects = ref([]);

async function getProjects() {
  const axios_result = await axios.get("projects.json");
  console.log(axios_result.data);
  projects.value = axios_result.data;
}

getProjects();

const selectedProject = ref(null);
const headingContainer = ref(null);

const handleTitleClick = (project) => {
  selectedProject.value = project;
  scrollToTop();
};

const scrollToTop = () => {
  if (headingContainer.value) {
    headingContainer.value.scrollTop = 0;
  }
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
/*HEADER*/

#experience-header {
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
}

.experience-header h2.heading {
  text-align: end;
  padding-right: 1rem;
  padding-top: 3em;
  padding-bottom: 1rem;
  /* background-color: #fde8d9; */
  background-color: #fcf4ed;
  margin-right: 6em;
  margin-bottom: 0;
}
.heading-container {
  background-color: #fffdf6;
}
/* PROJECTS */
.relative {
  position: relative;
}
#sticky-projects {
  position: sticky;
  position: -webkit-sticky;
  top: -0px;
}
.project-wrapper {
  /* position: relative; */
  background-image: url("/images/artDeco/artDecoGreen.jpg");
  width: 100vw;
  padding-top: 5em;
  padding-bottom: 5em;
  border-top: solid 2px;
  /* border-bottom: solid 2px; */
  border-image: var(--goldToRight) 1;
  border-image-slice: 1;
}
.project-container {
  /* position: relative; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #fffdf6;
  padding-top: 3em;
  padding-left: 0;
  padding-right: 0;
  margin-top: 5em;
  border-bottom: solid 0px 2px;
  border-top: solid 2px;
  border-image: var(--goldToRight) 1;
  border-image-slice: 1;
}
/* LEFT CONTAINER */
.left-wrapper {
  border-left: solid 2px;
  border-image: var(--goldToBottom) 1;
  border-image-slice: 1;
  max-width: 30em;
  margin: 3em 2em 2em 2em;
}
.column {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.left-container {
  margin-top: 10em;
  flex-direction: column;
}
/* TITLE */
.project-title.container {
  flex-direction: column;
}
.project-title {
  cursor: pointer;
  letter-spacing: 4px;
  padding: 2em;
  color: black;
}

.project-title h3.heading {
  font-size: 1.5rem;
  transition: font-size 0.5s;
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
.project-title h3.heading:hover {
  background-image: var(--goldToRightDark);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-weight: bold;
  transform: translateY(2px);
  font-size: 1.6rem;
}

/* IMAGE */
img.project-image {
  display: none;
  opacity: 0;
  transition: opacity 10s ease;
}

img.project-image.show {
  display: block;
  border-radius: 50%;
  object-fit: contain;
  border: none;
  height: 8em;
  width: 8em;
  opacity: 1;
  transition: height 0.5s, width 0.5s, filter 0.5s;
}

img.project-image:hover {
  height: 10em;
  width: 10em;
  padding: 0.5em;
  background-image: var(--goldToRight);
}
/* RIGHT CONTAINER */

.right-wrapper {
  margin: 2em;
}
.row {
  width: 100%;
  --bs-gutter-x: 0rem;
}
.right-container {
  padding-right: 2em;

  flex-direction: column;
}
.project-title.right {
  padding-left: 0;
  cursor: default;
}
.right h2 {
  font-size: 3em;
}
.date-container {
  height: 50px;
}
.right-container .date {
  font-style: italic;
  text-transform: uppercase;
  margin-bottom: 0;
  letter-spacing: 2px;
  font-weight: bold;
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
  transition: font-size 0.5s;
}
.right-container .link-container a:hover {
  font-size: 1.8rem;
}

.right-container p,
.right-container li {
  color: black;
  letter-spacing: 1px;
  font-size: 1.2rem;
  line-height: 2;
}

.right-container .description {
  margin: 1.5em 0em 1.5em 0em;
}
.right-container .highlights {
  letter-spacing: 2px;
  font-weight: bold;
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
  margin-right: 1em;
}

/* PAGINATION BUTTONS */
.pagination-button-wrapper {
  background-color: #002d40;
  border-bottom: solid 2px;
  border-image: var(--goldToRight) 1;
  border-image-slice: 1;
  height: 100px;
  margin-top: 10em;
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
  transition: font-size 0.5s;
  font-size: 1.4rem;
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
  transition: font-size 0.5s;
}

.pagination-buttons button:disabled {
  color: #999;
  cursor: not-allowed;
  border: none;
}

@media screen and (max-width: 1200px) {
  #sticky-projects {
    top: -500px;
  }
  .experience-header h2.heading {
    margin-right: 3em;
  }
  h3.heading {
    font-size: 1.3rem;
  }
  .left-wrapper {
    max-width: 25em;
  }
  .right-container .link-container a,
  .right-container li,
  .right-container p {
    font-size: 1.2rem;
    line-height: 2;
  }

  .right-container {
    padding-right: 2em;
  }
  .right-container .info {
    margin-left: 1em;
  }
  .link-container {
    width: 70%;
  }
  .project-title.right h2 {
    font-size: 2.5rem;
  }
}
@media screen and (max-width: 992px) {
  #sticky-projects {
    top: -90px;
  }
  .experience-header h2.heading {
    margin-right: 2em;
  }
  h3.heading {
    font-size: 1.5rem;
  }
  .project-container {
    display: flex;
    flex-direction: column;
  }
  .column {
    display: flex;
  }

  .left-wrapper.column {
    order: 1;
  }

  .right-wrapper.column {
    order: 3;
  }

  .pagination-button-wrapper.row {
    display: flex;
    order: 2;
  }
  .left-container {
    margin-left: 0em;
    padding-bottom: 3em;
    margin-top: 3em;
    width: 147%;
  }
  .project-title.container {
    padding-bottom: 1em;
    padding-top: 1em;
  }
  img.project-image.show {
    filter: none;
    background-image: var(--goldToRight);
  }

  .right-container .description,
  .right-container .date,
  .right-container li,
  .date-container {
    font-size: 1.2rem;
    line-height: 2;
  }

  .right-container {
    padding: 0;
    padding-top: 3em;
  }
  .right-container .info {
    margin-left: 2em;
    margin-right: 2em;
  }
  .right-container .link-container a {
    text-align: left;
  }
}

@media screen and (max-width: 768px) {
  #sticky-projects {
    top: -1200px;
  }
  .experience-header h2.heading {
    margin-right: 1.5em;
  }
  h3.heading {
    font-size: 1.3rem;
  }
  .left-wrapper {
    margin-left: 3em;
    margin-right: 3em;
    margin-top: 0;
    border-left: none;
  }
  .left-container {
    padding-bottom: 5em;
    width: 100%;
  }
  .project-title {
    padding-left: 0;
  }

  .right-container .description,
  .right-container .date,
  .right-container li {
    font-size: 1.1rem;
    line-height: 2;
    padding: 0;
  }

  .right-container .link-container a {
    text-align: center;
  }
  .pagination-buttons p {
    display: none;
  }
  .pagination-buttons span {
    font-size: 3.6rem;
  }
}

@media screen and (max-width: 576px) {
  #sticky-projects {
    top: -1000px;
  }
  .experience-header h2.heading {
    padding-top: 2em;
  }
  h3.heading {
    font-size: 1.2rem;
  }
  .project-container {
    padding: 0em;
    flex-wrap: nowrap;
  }
  .left-container {
    padding-top: 0em;
    margin-top: 0em;
    padding-bottom: 0em;
    width: 100%;
  }
  .date-container {
    margin-bottom: 3em;
  }

  .project-title.container {
    padding: 0;
  }

  .project-title {
    flex-direction: column;
    margin-bottom: 1em;
  }

  .project-title img.project-image.show {
    height: 7em;
    width: 7em;
    margin-top: 1em;
    margin-bottom: 1em;
  }
  .right-container {
    margin-bottom: 1em;
  }
  .right-container .description,
  .right-container li {
    font-size: 1.2rem;
    margin-left: 0;
    padding-right: 0em;
    line-height: 2;
  }
  .project-title.right h2 {
    font-size: 2em;
  }
  .date-container {
    flex-direction: column;
  }
  .link-container {
    width: 140%;
  }
  p.description {
    padding-top: 2em;
  }
  .right-container ul {
    padding-top: 0;
  }

  .right-container .date {
    padding-bottom: 1rem;
  }
  .right-container .link-container a {
    text-align: left;
  }
  .right-container {
    margin-bottom: 1em;
  }

  .pagination-button-wrapper {
    margin-top: 5em;
  }
}
@media screen and (max-width: 450px) {
  #sticky-projects {
    top: -1000px;
  }
  .experience-header h2.heading {
    padding-top: 2em;
    margin-right: 1em;
  }
  .experience-header h2.heading {
    margin-right: 0;
  }
  .left-wrapper {
    margin-left: 1em;
    margin-right: 1em;
  }
  .left-container {
    padding-left: 0;
    padding-right: 0;
    margin: 1.5em;
    border-left: none;
    width: 86%;
  }
  .project-title {
    padding-left: 0;
    padding-right: 0;
  }

  .project-title img.project-image.show {
    height: 5em;
    width: 5em;
    margin-top: 1em;
    margin-bottom: 1em;
  }
  .project-title h3 {
    font-size: 1.1rem;
  }

  .right-container {
    padding: 0;
    border-left: none;
  }
  .right-container .info {
    margin: 1.5em;
  }
  .right-container .link-container a,
  .right-container .date {
    font-size: 1.1rem;
  }
  .right-container .content {
    margin: 0;
  }

  .pagination-button-wrapper {
    margin-top: 3em;
  }
  .pagination-buttons button {
    width: 100px;
  }
}
@media screen and (max-width: 360px) {
  #sticky-projects {
    top: -1800px;
  }
}
</style>
