<template>
  <section
    class="skwd-projects animate__animated animate__fadeInDown animate__slow 1s animate__delay-0.5s"
  >
    <div class="heading-container" id="skwd-projects">
      <h2 class="skwd-projects">Showcase</h2>
    </div>
    <div
      class="skw-pages"
      @mouseover="enableScroll"
      @mouseleave="disableScroll"
    >
      <template v-for="(project, index) in projects" :key="index">
        <div :class="['skw-page', isPageActive(index)]">
          <div
            class="skw-page__half skw-page__half--left"
            v-if="index % 2 === 0"
          >
            <div class="skw-page__skewed">
              <div
                class="skw-page__content"
                :style="{
                  backgroundImage: `url(${project.skw})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }"
              ></div>
            </div>
          </div>

          <div class="skw-page__half skw-page__half--right" v-else>
            <div class="skw-page__skewed">
              <div
                class="skw-page__content"
                :style="{
                  backgroundImage: `url(${project.skw})`,
                  backgroundPosition: '50% 50%',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }"
              ></div>
            </div>
          </div>
          <div
            class="skw-page__half skw-page__half--left"
            v-if="index % 2 !== 0"
          >
            <div class="skw-page__skewed">
              <div class="skw-page__content">
                <h4 class="skw-page__heading">{{ project.title }}</h4>
                <p class="skw-page__description">{{ project.description }}</p>
                <router-link
                  class="project-details"
                  :to="{
                    name: 'project',
                    params: { id: project.id },
                  }"
                >
                  See Project Details
                </router-link>
              </div>
            </div>
          </div>
          <div class="skw-page__half skw-page__half--right" v-else>
            <div class="skw-page__skewed">
              <div class="skw-page__content">
                <h2 class="skw-page__heading">{{ project.title }}</h2>
                <p class="skw-page__description">{{ project.description }}</p>
                <router-link
                  class="project-details"
                  :to="{
                    name: 'project',
                    params: { id: project.id },
                  }"
                >
                  See Project Details
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <button class="shuffle" @click="shuffleProjects">
      <p>Shuffle and Display Random</p>
    </button>
  </section>
</template>
<script setup>
import { ref } from "vue";

let curPage = ref(1);
let numOfPages = ref(0);
const animTime = 1000;
let scrolling = ref(false);
let skwScrolling = ref(false); // Flag to indicate skw page scrolling
const pgPrefix = ".skw-page-";

// fetch data from json
const projects = ref([]);

async function fetchData() {
  try {
    const response = await fetch(`/projects.json`);
    const data = await response.json();
    projects.value = data;
    numOfPages.value = projects.value.length;

    console.log("Projects:", projects.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

function pagination() {
  scrolling.value = true;

  setTimeout(() => {
    scrolling.value = false;
  }, animTime);
}

function navigateUp() {
  if (curPage.value === 1) return;
  console.log("Current Page (Before):", curPage.value);
  curPage.value--;
  console.log("Current Page (After):", curPage.value);
  pagination();
}

function navigateDown() {
  if (curPage.value === numOfPages.value) {
  } else {
    curPage.value++;
  }
  pagination();
}

function shuffleProjects() {
  // Shuffle the projects array
  projects.value.sort(() => Math.random() - 0.5);
}
function enableScroll() {
  // Enable scrolling when mouse is over the skw pages
  skwScrolling.value = true;
  scrolling.value = false;
  // Set event listeners for scrolling
  document.onmousewheel = document.onwheel = (e) => {
    if (skwScrolling.value) {
      e.preventDefault(); // Prevent default scroll behavior
      if (e.deltaY > 0) {
        navigateDown();
      } else {
        navigateUp();
      }
    }
  };

  document.onkeydown = (e) => {
    if (skwScrolling.value) {
      e.preventDefault(); // Prevent default scroll behavior
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        navigateDown();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        navigateUp();
      }
    }
  };
}

function disableScroll() {
  // Disable scrolling when mouse leaves the skw pages
  skwScrolling.value = false;
  // Remove event listeners for scrolling
  document.onmousewheel = document.onwheel = null;
  document.onkeydown = null;
}

function isPageActive(index) {
  return curPage.value === index + 1 ? "active" : "inactive";
}
</script>
<style>
section.skwd-projects {
  background-color: #fffdf6;
  z-index: 500;
}
section.skwd-projects .heading-container {
  position: relative;
  padding-top: 14em;
  background-color: #fde8d9;
  margin-left: 25em;
}
.skwd-projects h2 {
  padding-left: 1rem;
  padding-bottom: 1rem;
  font-family: "Poiret One", sans-serif;
  text-transform: uppercase;
  margin-bottom: 0;
}

.skw-pages {
  overflow: hidden;
  position: relative;
  height: 55vh;
}

.skw-page {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
}
.skw-page__half {
  position: absolute;
  top: 0;
  width: 50%;
  height: 55vh;
  transition: transform 1s, opacity 1s;
}
.skw-page__half--left {
  left: 0;
  transform: translate3d(-32.4vh, 100%, 0);
}
.skw-page__half--right {
  left: 50%;
  transform: translate3d(32.4vh, -100%, 0);
  /* right: 0; */
}

.skw-page__skewed {
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 140%;
  height: 100%;
  transform: skewX(-18deg);
  background-color: #002d40;
}
.skw-page__half--left .skw-page__skewed {
  left: -40%;
}
.skw-page__half--right .skw-page__skewed {
  right: -40%;
}
.skw-page__content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0 30%;
  color: #fff;
  transform: skewX(18deg);
  transition: transform 1s, opacity 1s;
  background-size: cover;
}
.skw-page__half--left .skw-page__content {
  padding-left: 30%;
  padding-right: 30%;
  transform-origin: 100% 0;
}
.skw-page__half--right .skw-page__content {
  padding-left: 30%;
  padding-right: 30%;
  transform-origin: 0 100%;
}
/* .skw-page .skw-page__half {
  transform: translate3d(0, 0, 0);
} */
.skw-page.active .skw-page__half {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
.skw-page.inactive .skw-page__content {
  opacity: 0.5;
  /* transform: translateY(100%) skewX(18deg) scale(0.95); */
  transform: skewX(18deg) scale(0.95);
}

.skw-page__heading {
  margin-bottom: 15px;
  text-transform: uppercase;
  font-size: 25px;
  text-align: center;
}
.skw-page__description {
  font-size: 18px;
  text-align: center;
}
/* .logo-skw {
  height: 2em;
  width: 8em;
} */
button.shuffle {
  border-left: solid 2px;
  border-image: var(--goldToRightDark) 1;
  border-image-slice: 1;
  background-color: transparent;
  padding: 1em;
  padding-top: 2em;
  cursor: pointer;
  background-color: white;
  position: relative;
  top: 1em;
  left: 50%;
  transform: translateX(-50%);
}
button.shuffle p {
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 2px;
  background-image: var(--goldToRightDark);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-transform: uppercase;
  font-family: "Poiret One", sans-serif;
}
button.shuffle:hover {
  background-color: #fcf4ed;
  border: none;
}
button.shuffle:hover p {
  color: black;
}
</style>
