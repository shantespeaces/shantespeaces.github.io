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
          <div class="left-wrapper column justify-content-between">
            <div class="left-container container d-flex">
              <div v-for="project in displayedProjects" :key="project.id">
                <div
                  class="project-title container d-flex"
                  @click="handleTitleClick(project)"
                  :class="{ title: selectedProject === project }"
                >
                  <div class="triangle-right"></div>
                  <h3 class="heading">{{ project.title }}</h3>
                </div>
                <div class="mobile-right-wrappper column">
                  <div
                    class="right-container container d-flex justify-content-center"
                    v-show="selectedProject === project"
                  >
                    <div class="info">
                      <div
                        class="date-container d-flex justify-content-between"
                      >
                        <p class="date">{{ project.date }}</p>
                        <div class="link-container d-flex">
                          <a
                            class="github-link"
                            v-if="project.link"
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
                              project.types.includes("video")
                                ? "Video"
                                : "Design"
                            }}
                          </router-link>
                        </div>
                      </div>
                      <router-link
                        :to="{
                          name: 'project',
                          params: { id: project.id },
                        }"
                        ><div class="project-image-wrapper">
                          <img
                            class="project-image"
                            :src="project.skw"
                            :class="{ show: selectedProject === project }"
                            alt="shante nicolaides project image"
                          />
                        </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pagination-wrapper row">
              <div
                class="pagination-container d-flex justify-content-around py-2"
              >
                <div class="pagination-button">
                  <button
                    class="btn d-flex justify-content-around align-items-center"
                    @click="showPreviousProjects"
                    :disabled="currentPage === 0"
                  >
                    <span class="before material-symbols-outlined mt-1"
                      >navigate_before</span
                    >
                    <p class="mt-3 pt-1">Previous</p>
                  </button>
                </div>
                <div class="pagination-button">
                  <button
                    class="btn d-flex justify-content-around align-items-center"
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

          <!-- content-right -->
          <div class="desktop-right-wrappper column">
            <div
              class="right-container container d-flex justify-content-center"
            >
              <div v-for="project in projects" :key="project.id" class="this">
                <div
                  v-if="selectedProject === null || selectedProject === project"
                  class="info"
                >
                  <div
                    class="project-title right d-flex justify-content-between"
                  >
                    <h2 class="heading" @click="toggleProject">
                      {{ project.title }}
                    </h2>
                  </div>
                  <div class="date-container d-flex justify-content-between">
                    <p class="date">{{ project.date }}</p>
                    <div class="link-container d-flex">
                      <template v-if="project.link">
                        <a
                          :href="project.link"
                          target="_blank"
                          rel="noopener
                          noreferrer"
                          >Github</a
                        ></template
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
                  <router-link
                    :to="{
                      name: 'project',
                      params: { id: project.id },
                    }"
                    ><div class="project-image-wrapper">
                      <img
                        class="project-image"
                        :src="project.skw"
                        :class="{ show: selectedProject === project }"
                        alt="shante nicolaides project image"
                      />
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
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
const showProjectDetails = ref(false); // Define showProjectDetails here
const handleTitleClick = (project) => {
  // Toggle the selected project
  selectedProject.value = selectedProject.value === project ? null : project;
  // Toggle the visibility of project details
  showProjectDetails.value = !showProjectDetails.value;
};

// Initialize the visibility state for projects
const initializeShowData = () => {
  projects.value.forEach((project) => {
    project.showDetails = false;
  });
};

initializeShowData();

let projectsPerPage = 5;
const currentPage = ref(0);

// Determine if the screen size is large
const isLargeScreen = computed(() => {
  return window.innerWidth >= 992;
});
const displayedProjects = computed(() => {
  if (isLargeScreen.value) {
    console.log("isLargeScreen:", isLargeScreen.value);
    const startIndex = currentPage.value * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    return projects.value.slice(startIndex, endIndex);
  } else {
    return projects.value; // Show all projects for small screens
  }
});
//pagination
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
  // Set the default project to be displayed on mount
  selectedProject.value = displayedProjects.value[0];
});
</script>

<style>
/*HEADER*/

#experience-header {
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
  border-top: solid 3px;
  border-image: var(--goldToRight) 1;
  border-image-slice: 1;
}

.experience-header h2.heading {
  padding-left: 1rem;
  padding-top: 4em;
  padding-bottom: 1rem;
  background-color: #fcf4ed;
  margin-left: 5em;
  margin-bottom: 0;
}
.heading-container {
  background-color: #fffdf6;
}
/* PROJECTS */
.relative {
  position: relative;
}
/* #sticky-projects {
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
} */
.project-wrapper {
  background-image: url("/images/artDeco/artDecoGreen.jpg");
  width: 100vw;
  padding-top: 5em;
  padding-bottom: 5em;
  border-top: solid 2px;
  border-image: var(--goldToRight) 1;
  border-image-slice: 1;
}
.project-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #fffdf6;
  padding-top: 5em;
  padding-left: 0;
  padding-right: 0;
  margin-top: 5em;
  border-bottom: solid 0px 2px;

  border-image: var(--goldToRight) 1;
  border-image-slice: 1;
}
/* LEFT CONTAINER */
.left-wrapper {
  border-left: solid 2px;
  border-image: var(--goldToBottom) 1;
  border-image-slice: 1;
  max-width: 30em;
  margin: 2em 2em 2em 2em;
}
.column {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.left-container {
  flex-direction: column;
  margin-top: 5em;
}
/* TITLE */

.project-title {
  cursor: pointer;
  letter-spacing: 4px;
  padding: 2em;
  color: black;
}

.project-title h3.heading {
  font-size: 1.3rem;
  transition: font-size 0.5s, font-weight 0.5s;
  margin-bottom: 0;
  margin-top: 1.6em;
  margin-left: 1em;
}
.triangle-right {
  margin-top: 2em;
  position: relative;
  width: 0;
  height: 0;
  border-left: 1em solid transparent;
  border-right: 1em solid #004152;
  border-bottom: 1em solid transparent;
  transition: transform 0.2s;
  transform: rotate(45deg);
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
}

/* RIGHT CONTAINER */
.mobile-right-wrappper.column {
  display: none;
}
.small-right-wrapper,
.large-right-wrapper {
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
  font-size: 1.5rem;
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

/* IMAGE */
.project-image-wrapper {
  height: 15em;
  width: 25em;
  object-fit: cover;
  text-align: center;
  margin: auto;
  margin-bottom: 3em;
}

.project-image-wrapper img {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
}

.project-image-wrapper:hover img {
  transform: scale(1.1);
}
/* PAGINATION BUTTONS */

.pagination-container {
  display: flex;
  margin: 1em;
  max-width: 25em;
  margin-bottom: 3em;
}

.pagination-button button {
  position: relative;
  width: 10.5em;
  height: 3em;
}
.pagination-button button p {
  font-size: 1.5rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: "Poiret One", sans-serif;
  text-decoration: none;
  position: relative;
  z-index: 1;
}
.pagination-button button::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0;
  background-color: #fcf4ed;
  transform-origin: bottom;
  transition: height 0.3s ease-in;
  border-radius: 1rem;
}

.pagination-button button:hover::after {
  height: 100%;
}
.pagination-button button:hover p {
  background-image: var(--goldToRightDark);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-weight: bold;
}

.pagination-button span {
  font-size: 2.6rem;
  background-image: var(--goldToRightDark);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  z-index: 1;
}

.pagination-button button:disabled {
  color: #999;
  cursor: not-allowed;
  border: none;
}

@media screen and (max-width: 1200px) {
  /* #sticky-projects {
    top: -500px;
  } */

  .right-container .link-container a,
  .right-container li,
  .right-container p {
    font-size: 1.2rem;
    line-height: 2;
  }

  .right-container {
    padding-right: 2em;
  }

  .link-container {
    width: 70%;
  }
  .project-title.right h2 {
    font-size: 2.5rem;
  }
  .left-wrapper {
    max-width: 22em;
  }
}
@media screen and (max-width: 992px) {
  /* #sticky-projects {
    top: -90px;
  } */
  .experience-header h2.heading {
    margin-left: 2.5em;
  }

  .project-container {
    display: flex;
    flex-direction: column;
  }
  .project-container {
    margin-top: 0;
    padding-top: 0;
    border: none;
  }
  .date-container {
    margin-bottom: 3em;
    margin-left: 1em;
    flex-direction: column;
  }
  .project-title h3.heading {
    margin: 0;
  }
  .project-title {
    background-color: #fcf4ed;
  }
  .column {
    display: flex;
  }
  .left-wrapper {
    border: none;
    max-width: 100%;
    margin: 0;
  }
  .left-container {
    margin-top: 1em;
  }
  .mobile-right-wrappper.column {
    display: block;
  }
  .info {
    display: none;
  }
  /* Show project details when its title is clicked */
  .project-title.title + .mobile-right-wrappper .info {
    display: block;
  }
  .desktop-right-wrappper.column .right-container {
    display: none !important;
  }

  .project-title h3.heading {
    margin-bottom: 0;
    padding: 2rem;
  }

  .pagination-wrapper.row {
    display: none;
  }

  .project-title.container {
    padding: 0;
  }

  .date-container {
    font-size: 1.2rem;
    line-height: 2;
  }

  .right-container {
    padding: 0;
    padding-top: 1em;
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
    margin-left: 1.5em;
  }
  h3.heading {
    font-size: 1.3rem;
  }

  .right-container .date {
    font-size: 1.1rem;
    line-height: 2;
    padding: 0;
  }
}

@media screen and (max-width: 576px) {
  #sticky-projects {
    top: -1000px;
  }
  .experience-header h2.heading {
    padding-top: 3em;
    margin: 0;
    text-align: center;
  }
  h3.heading {
    font-size: 1.2rem;
  }
}
@media screen and (max-width: 450px) {
  #sticky-projects {
    top: -1000px;
  }
  .right-container .info {
    margin: 0;
  }
  .project-image-wrapper {
    width: 20em;
    height: 13em;
  }
}
@media screen and (max-width: 360px) {
  #sticky-projects {
    top: -1800px;
  }
}
</style>
