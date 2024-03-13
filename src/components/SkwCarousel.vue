<template>
  <section class="skwd-projects" id="sticky-heading">
    <h4 class="more-projects">Showcase</h4>
    <div
      class="skw-pages"
      id="sticky-skw"
      :class="{ sticky: isSticky }"
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
                <h2 class="skw-page__heading">{{ project.title }}</h2>
                <p class="skw-page__description">{{ project.description }}</p>
                <!-- <img class="logo-skw" :src="project.logo" alt="" /> -->
              </div>
            </div>
          </div>
          <div class="skw-page__half skw-page__half--right" v-else>
            <div class="skw-page__skewed">
              <div class="skw-page__content">
                <h2 class="skw-page__heading">{{ project.title }}</h2>
                <p class="skw-page__description">{{ project.description }}</p>
                <!-- <img class="logo-skw" :src="project.logo" alt="" /> -->
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
import { ref, watchEffect } from "vue";

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
    // Shuffle the projects array
    data.sort(() => Math.random() - 0.5);
    // Get the first 5 projects
    projects.value = data.slice(0, 5);
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
// Check if the section is sticky when scrolling
// window.addEventListener("scroll", () => {
//   const sectionTop = document
//     .getElementById("sticky-skw")
//     .getBoundingClientRect().top;
//   isSticky.value = sectionTop <= 0;
// });
// Function to determine if a page is active or inactive
function isPageActive(index) {
  return curPage.value === index + 1 ? "active" : "inactive";
}
</script>
<style>
#sticky-heading {
  position: sticky;
  position: -webkit-sticky;
  top: -500px;
}
.skwd-projects {
  background-color: ivory;
  padding-top: 10em;
  padding-bottom: 15em;
}
h4.more-projects {
  font-family: "Poiret One", sans-serif;
  text-transform: uppercase;
  font-size: 4em;
  margin-bottom: 1em;
  margin-left: 1em;
  background-color: #fbe1d0;
}
.skw-pages {
  overflow: hidden;
  position: relative;
  height: 60vh;
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
  height: 60vh;
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
  top: 5em;
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
  text-transform: uppercase;
  font-family: "Poiret One", sans-serif;
}
button.shuffle:hover {
  background-color: #fbe1d0;
  border: none;
}
button.shuffle:hover p {
  color: black;
}
</style>
