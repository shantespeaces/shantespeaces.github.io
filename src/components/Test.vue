<!-- Project.vue -->
<template>
  <!-- <Feather /> -->
  <div>
    <h1>Project Details</h1>
  </div>
  <div class="show-container">
    <div class="show-container-inner">
      <div class="main-content" v-if="project" ref="mainContentRef">
        <div class="main-headings" ref="mainHeadingsRef">
          <p id="by-line">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div class="heading">
            <h3 id="heading1">Decouvrez</h3>
            <h3 id="heading2">la Jeune,</h3>
            <h1 id="heading3">{{ project.title }}</h1>
          </div>

          <div class="short-bio">
            <p>{{ project.description }}</p>
          </div>

          <a href="#" class="link" @click="readMore">Read More</a>
        </div>

        <div class="more-info" ref="moreInfoRef">
          <h4>Lorem ipsum dolor sit.</h4>
          <p>{{ project.description }}</p>

          <p>{{ project.description }}</p>

          <p>{{ project.description }}</p>
        </div>
      </div>

      <div class="imageshow-wrapper">
        <div class="image-show-container">
          <img class="image-show" :src="project.circleImage" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
// import Feather from "@/components/Feather.vue";

const projectId = ref(null);
const project = ref(null);

const fetchProjectDetails = async () => {
  try {
    const response = await axios.get(`/src/projects.json`);
    project.value = response.data.find((p) => p.id === Number(projectId.value));
  } catch (error) {
    console.error("Error fetching project details:", error);
  }
};

onMounted(() => {
  const route = useRoute();
  const id = route.params.id;
  projectId.value = id;
  fetchProjectDetails();
});

const mainContentRef = ref(null);
const mainHeadingsRef = ref(null);
const moreInfoRef = ref(null);

// const readMore = () => {
//   if (mainHeadingsRef.value && moreInfoRef.value) {
//     mainHeadingsRef.value.style.transform = "scale(0.7)";
//     moreInfoRef.value.style.height = "350px";
//   }
// };
</script>
<style>
/* Animations */
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slide-in {
  0% {
    top: -300px;
  }
  100% {
    top: 0;
  }
}

@keyframes scaleDown {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.7);
  }
  95% {
    transform: scale(0.7);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes reveal-info {
  0% {
    height: 0;
  }
  5% {
    height: 350px;
  }
  95% {
    height: 350px;
  }
  100% {
    height: 0;
  }
}

/* Body */
body {
  margin: 0;
  padding: 0;
}

.show-container {
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
  height: 700px;
  background-color: #d7ccc8;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
}

.show-container-inner {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
  animation: fade-in 1.5s ease, slide-in 1.2s ease;
  -webkit-animation: fade-in 1.5s ease, slide-in 1.2s ease;
}

.main-content {
  flex-basis: 50%;
  order: 1;
  align-self: center;
  display: flex;
  flex-direction: column;
}

.main-headings {
  width: 100%;
  align-self: center;
  display: flex;
  flex-direction: column;
  animation: scaleDown 6s ease 2s;
  -webkit-animation: scaleDown 6s ease 2s;
}

#by-line {
  width: 60%;
  padding-bottom: 1px;
  padding-left: 3px;
  margin-left: 15px;
  font-size: 85%;
  border-bottom: 1px solid #757575;
  font-style: italic;
}

.heading {
  margin-top: 20px;
  margin-left: 80px;
}

#heading1,
#heading2,
#heading3 {
  margin: 0;
  margin-top: -20px;
}

#heading1,
#heading2 {
  font-size: 500%;
  font-weight: normal;
  letter-spacing: -2px;
}

#heading1 {
  margin-left: 50px;
}

#heading2 {
  margin-left: 150px;
}

#heading3 {
  margin-top: -52px;
  font-size: 1100%;
  font-weight: 800;
  letter-spacing: 2px;
}

.short-bio {
  width: 60%;
  margin-top: -30px;
  margin-left: 90px;
  font-style: italic;
  font-size: 105%;
}

.link {
  margin-left: 92px;
  font-weight: bold;
  font-size: 120%;
  font-family: helvetica;
  text-decoration: none;
  color: black;
}

.link:hover {
  text-decoration: underline;
}

.more-info {
  margin-top: -70px;
  width: 50%;
  height: 0;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}

.image-wrapper {
  flex-basis: 50%;
  order: 2;
}

.image-show-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

img {
  width: 100%;
  height: auto;
  position: relative;
}
</style>
<!-- <template>
  <section
    class="skwd-projects"
    id="sticky-heading"
    :class="{ sticky: isSticky }"
    @mouseover="enableScroll"
    @mouseleave="disableScroll"
  >
    <h4 class="more-projects">Showcase</h4>
    <div class="skw-pages">
      <template v-for="(project, index) in projects" :key="index">
        <div :class="['skw-page', isPageActive(index)]">
          <div
            class="skw-page__half skw-page__half--left"
            v-if="index % 2 === 0"
          >
            <div class="skw-page__skewed">
              <div
                class="skw-page__content"
                :style="{ backgroundImage: `url(${project.skw})` }"
              ></div>
            </div>
          </div>

          <div class="skw-page__half skw-page__half--right" v-else>
            <div class="skw-page__skewed">
              <div
                class="skw-page__content"
                :style="{ backgroundImage: `url(${project.skw})` }"
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
              </div>
            </div>
          </div>
          <div class="skw-page__half skw-page__half--right" v-else>
            <div class="skw-page__skewed">
              <div class="skw-page__content">
                <h2 class="skw-page__heading">{{ project.title }}</h2>
                <p class="skw-page__description">{{ project.description }}</p>
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
    const response = await fetch("/src/projects.json");
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
    curPage.value = 1; // Go to the first page if at the last page
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
window.addEventListener("scroll", () => {
  const sectionTop = document
    .getElementById("sticky-heading")
    .getBoundingClientRect().top;
  isSticky.value = sectionTop <= 0;
});
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
}
.skw-pages {
  overflow: hidden;
  position: relative;
  height: 50vh;
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
  height: 50vh;
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
  background: #000;
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
</style> -->
