<template>
  <MainNav />
  <!-- <Feather /> -->

  <section id="project">
    <div class="show-background-container" v-if="project">
      <div class="show-container d-flex">
        <div class="show-container-left">
          <div class="main-content" ref="mainContentRef">
            <div class="main-headings" ref="mainHeadingsRef">
              <q id="quote"> {{ project.quote }}</q>
              <div class="mobile-heading-container d-flex">
                <div class="heading">
                  <h3 id="heading1">{{ project.language }}</h3>
                  <h3 id="heading2">Project</h3>
                  <h1 id="heading3">{{ project.heading3 }}</h1>
                  <h4 id="heading4">{{ project.title }}</h4>
                </div>
                <img class="logo-show-mobile" :src="project.logo" alt="" />
              </div>
              <div class="show-project-description">
                <p>{{ project.description }}</p>
              </div>
              <div class="highlights-container d-flex">
                <h5
                  class="highlights-title"
                  @mouseenter="applyZIndex"
                  @mouseleave="resetZIndex"
                >
                  Highlights
                </h5>
                <div class="show-highlights">
                  <h5>Highlights</h5>

                  <!-- <ul class="">
                  <li
                    v-for="(item, index) in project.cardItems"
                    :key="`${project.id}_${index}`"
                    class="list-item d-flex pb-2"
                  >
                    <span class="bullet">+</span>
                    <p class="content">{{ item }}</p>
                  </li>
                </ul> -->
                  <ul class="">
                    <li
                      v-for="(item, index) in project.items"
                      :key="`${project.id}_${index}`"
                      class="list-item d-flex pb-2"
                    >
                      <span class="bullet">+</span>
                      <p class="content">{{ item }}</p>
                    </li>
                  </ul>
                </div>
                <template v-if="project.link">
                  <div class="github">
                    <a
                      :href="project.link"
                      target="_blank"
                      rel="noopener noreferrer"
                      >View project in Github</a
                    >
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>

        <div
          class="show-container-right d-flex justify-content-center alig-items-center"
        >
          <div class="logo-show-container">
            <template
              v-if="project.videoSource && project.videoSource.videoFile"
            >
              <!-- Render video if videoFile exists -->
              <video
                :src="project.videoSource.videoFile"
                class="background-video"
                controls
                autoplay
                muted
              ></video>
            </template>
            <template
              v-else-if="project.videoSource && project.videoSource.youtubeLink"
            >
              <div class="youtube">
                <iframe
                  width="560"
                  height="315"
                  :src="embedUrl"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
                <!-- <a
                  :href="project.videoSource.youtubeLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img :src="project.logo" alt="YouTube Video" />
                  <p>See youtube video</p>
                </a> -->
              </div>
            </template>

            <template v-else>
              <!-- Fallback content if no valid video source is found -->
              <img class="logo-show" :src="project.logo" alt="" />
            </template>
          </div>
          <template v-if="project.pdfImages"
            ><p class="image-show-title">Guideline Document</p>
            <div class="row pdf-container">
              <div
                class="col-6 mb-3"
                v-for="(pdfImage, index) in project.pdfImages"
                :key="index"
                :style="{
                  position:
                    pdfImage.image === selectedImage ? 'relative' : 'static',
                }"
              >
                <div
                  class="image-pdf-container"
                  @mousemove="updateTextPosition"
                >
                  <img
                    class="image-pdf"
                    :class="{ 'col-12': pdfImage.image === selectedImage }"
                    :src="pdfImage.image"
                    alt=""
                    @click="toggleImageSize(pdfImage.image)"
                  />
                  <div
                    class="cursor-circle-container"
                    ref="circleText"
                    :style="{
                      top: textPosition.y + 'px',
                      left: textPosition.x + 'px',
                    }"
                  >
                    <p class="hover-text">Click Me</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <div
            class="image-show-container"
            v-for="(image, index) in project.projectImages"
            :key="index"
          >
            <p class="image-show-title">{{ image.title }}</p>
            <img class="image-show" :src="image.image" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="pagination">
    <div
      class="show-pagination-container d-flex justify-content-around align-items-center"
    >
      <div class="pagination-button">
        <button
          @click="viewPrevProject"
          class="btn d-flex justify-content-around align-items-center"
        >
          <span class="before material-symbols-outlined mt-1"
            >navigate_before</span
          >

          <p class="mt-3 pt-1">Previous</p>
        </button>
      </div>
      <div class="pagination-button">
        <button
          @click="viewNextProject"
          class="btn d-flex justify-content-around align-items-center"
        >
          <p class="mt-3 pt-1">Next</p>
          <span class="next material-symbols-outlined mt-1">navigate_next</span>
        </button>
      </div>
    </div>
  </section>
  <footer>
    <FooterComponent />
  </footer>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import MainNav from "../components/Nav.vue";
import FooterComponent from "../components/FooterComponent.vue";

// import Feather from "@/components/Feather.vue";

const props = defineProps({
  id: {
    type: [Number, String],
    required: true,
  },
});

const project = ref(null); // Initialize as null or an empty object
const route = useRoute(); // Access route object
let projectId = null; // To keep track of the current project ID
let projectsData = null; // To store the fetched projects data
const videoId = "7IjLz0kg1JE";
const embedUrl = `https://www.youtube.com/embed/${videoId}`;
onMounted(() => {
  console.log("ID prop:", props.id);
  console.log("Project object:", project.value);
});
//FETCH POJECT
onMounted(async () => {
  try {
    const axios_result = await axios.get("/projects.json");
    projectsData = axios_result.data;

    // Convert id to number
    const id = parseInt(route.params.id);
    await getProjectDetails(id);
  } catch (error) {
    console.error("Error fetching projects data:", error);
  }
});
//GET PROJECT DETAILS ASSOCIATED WITH ID
async function getProjectDetails(id) {
  try {
    // Log the ID being searched
    console.log("ID being searched:", id);

    // Find the project with the matching id
    const newProject = projectsData.find((project) => project.id === id);

    if (newProject) {
      // If the project with the matching id is found, assign it to the project ref
      project.value = newProject;
      // Update current project ID
      projectId = id;
      console.log("Project details:", project.value);
    } else {
      console.error("Project not found with id:", id);
    }
  } catch (error) {
    console.error("Error fetching project details:", error);
  }
}

//VIEW NEXT/PREVIOUS PROJECT
const viewNextProject = async () => {
  const lastIndex = projectsData.length - 1;
  projectId = projectId === lastIndex ? 0 : projectId + 1;
  await getProjectDetails(projectId);
  window.scrollTo(0, 0); // Scroll to the top of the page
};

const viewPrevProject = async () => {
  const lastIndex = projectsData.length - 1;
  projectId = projectId === 0 ? lastIndex : projectId - 1;
  await getProjectDetails(projectId);
  window.scrollTo(0, 0); // Scroll to the top of the page
};

//PDF TOGGLE IMAGE SIZE
const selectedImage = ref(null);

const toggleImageSize = (image) => {
  selectedImage.value = image;
  if (selectedImage.value) {
    window.addEventListener("scroll", handleScroll);
  } else {
    window.removeEventListener("scroll", handleScroll);
  }
};
//PUT IMAGE BACK TO ORIGINAL POSITION
const handleScroll = () => {
  const imageContainer = document.querySelector(".image-pdf.col-12");
  if (imageContainer) {
    const topOffset = window.scrollY;
    imageContainer.style.top = `${topOffset}px`;

    // Check if the image is no longer visible in the viewport
    const viewportHeight = window.innerHeight;
    const imageRect = imageContainer.getBoundingClientRect();
    if (
      imageRect.bottom < 0 || // Image is above the viewport
      imageRect.top > viewportHeight // Image is below the viewport
    ) {
      // Reset image size and position
      imageContainer.classList.remove("col-12");
      imageContainer.style.top = ""; // Reset top position
    }
  }
};

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
//APPLY Z-INDEX TO HIGHLIGHTS ON circleText
const mainContentRef = ref(null);

const applyZIndex = () => {
  mainContentRef.value.style.zIndex = "5000";
};

const resetZIndex = () => {
  mainContentRef.value.style.zIndex = "";
};
//PDF CLICK ME CURSOR
const textPosition = ref({ x: 0, y: 0 });
const updateTextPosition = (event) => {
  console.log(event); // Log mousemove event
  textPosition.value = { x: event.clientX, y: event.clientY };
};
</script>

<style>
#project {
  background-color: #fffdf6;
}
.show-container {
  margin-left: 10em;
  margin-right: 10em;
  font-size: 14px;
  font-family: "Montserrat", sans;
  justify-content: center;
  padding-top: 10em;
}
/* LEFT */
.logo-show-mobile {
  display: none;
}
.show-container-left {
  width: 50%;
  position: relative;
  animation: fade-in 1.5s ease, slide-in 1.2s ease;
  -webkit-animation: fade-in 1.5s ease, slide-in 1.2s ease;
  padding-top: 3em;
}

.main-content {
  position: fixed;
  width: 50%;
}
.main-headings {
  align-self: center;
  display: flex;
  flex-direction: column;
  animation: scaleDown 3s ease 2s;
  -webkit-animation: scaleDown 3s ease 2s;
}

.main-headings #quote {
  width: 65%;
  padding-bottom: 1px;
  padding-left: 3px;
  margin-left: 15px;
  font-size: 1.1rem;
  border-bottom: 1px solid #757575;
  font-style: italic;
}
.main-headings .heading {
  margin-top: 20px;
  margin-left: 3em;
}
.main-headings h5 {
  letter-spacing: 2px;
  background-image: var(--goldToRight);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-transform: uppercase;
  margin-left: 4em;
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
  padding-top: 1rem;
  margin-top: -52px;
  font-size: 1000%;
  font-weight: 800;
  letter-spacing: 2px;
  background-image: var(--goldToBottomDark);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}
#heading4 {
  padding-bottom: 1.5em;
}
.show-project-description {
  width: 60%;
  margin-top: -30px;
  margin-left: 3em;
  line-height: 2;
}
.show-project-description p {
  font-size: 1.2rem;
}
/* HIGHLIGHTS */
.highlights-container {
  display: flex;
  flex-direction: column;
}
.show-highlights {
  position: fixed;
  display: none;
  opacity: 0;
  padding: 4em;
  background-color: #fffdf6;
  border: solid 2px;
  border-image: var(--goldToBottomYellow) 1;
  border-image-slice: 1;
  width: fit-content;
  height: fit-content;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.show-highlights span {
  padding-right: 1em;
}
.show-highlights h5 {
  margin-left: 1.5em;
  padding-bottom: 1em;
}
.show-highlights ul {
  padding-left: 0;
}
.highlights-title:hover + .show-highlights {
  opacity: 1;
  display: block;
}
.highlights-title:hover + .show-highlights .main-content {
  z-index: 5000;
}

h5.highlights-title,
.github a {
  padding-top: 1em;
  padding-bottom: 1em;
  margin-left: 2em;
}

.github a {
  font-weight: bold;
  font-size: 120%;
  text-decoration: none;
  color: black;
}
.github a:hover {
  text-decoration: underline;
}
/* RIGHT */
.show-container-right {
  width: 50%;
  flex-direction: column;
}
.show-container-right p {
  text-align: center;
}
.logo-show-container {
  margin-bottom: 5em;
  margin-top: 5em;
  align-self: center;
}
.logo-show-container img {
  width: 25em;
  height: 25em;
  object-fit: contain;
  position: relative;
}
.youtube {
  margin-top: 5em;
}
.youtube a {
  text-decoration: none;
}
.youtube p {
  background-image: var(--goldToRightDark);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-size: 1.6rem;
  font-family: "Poiret One", sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  text-decoration: none;
}
.youtube p:hover {
  font-size: 1.65rem;
  color: #fcf4ed;
}
.youtube img {
  margin-bottom: 2em;
}
.background-video {
  width: 100%;
  margin-top: 5em;
}
.image-show-container {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 8em;
}
.image-show {
  width: 100%;
  object-fit: contain;
  align-self: center;
}

.image-show-title {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
}

/* CURSOR CIRCLE */
.cursor-circle-container {
  position: fixed;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
  background-color: white;
  margin-top: 1.5em;
  margin-left: 1.5em;
  z-index: 300;
  border-radius: 50%;
  height: 8em;
  width: 8em;
}
p.hover-text {
  background-image: var(--goldToRightDark);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-size: 1.6rem;
  font-family: "Poiret One", sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  padding-top: 0.8em;
  padding-left: 0.5em;
  padding-right: 0.5em;
}
/* PDF IMAGES */
.image-pdf-container {
  position: relative;
  display: inline-block;
  margin: 1em;
}
.image-pdf-container {
  position: relative;
}

/* .image-pdf-container:hover {
  z-index: 1;
} */
.image-pdf-container:hover .cursor-circle-container {
  opacity: 1;
}

.image-pdf {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.image-pdf.col-6:hover {
  transform: scale(1.2);
  z-index: 2;
}

.col-12 {
  height: 57em;
  width: 57em;
  object-fit: contain;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}
.col-12:hover + .cursor-circle-container {
  opacity: 0;
}
section.pagination {
  height: 6em;
  background-color: white;
  z-index: 100;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: -5px 5px 8px #13131344, 5px 5px 8px rgba(48, 48, 48, 0.452);
}
.show-pagination-container {
  /* margin-top: 0.4em; */
  width: 100%;
  height: 6em;
}
.show-pagination-container .pagination-button button {
  border: none;
  background-image: var(--goldToBottomDark);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}
.show-pagination-container .pagination-button button:hover::after {
  height: 0;
  width: 0;
}
.show-pagination-container .pagination-button button:hover p,
.show-pagination-container .pagination-button button:hover span {
  color: #fcf4ed;
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
@keyframes slide-in {
  0% {
    top: -300px;
  }
  100% {
    top: 0;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
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
@media (max-width: 1800px) {
  .show-container {
    padding-top: 8em;
  }
}
@media (max-width: 1600px) {
  .show-container {
    font-size: 11.5px;
    margin-left: 10em;
    margin-right: 10em;
    padding-top: 12em;
  }
  .main-content {
    width: 40%;
  }

  .image-show-container {
    width: 100%;
  }
  .show-project-description {
    width: 80%;
  }
  .main-headings #quote {
    width: 85%;
  }
  .github a {
    margin-left: 2.5em;
  }
  .cursor-circle-container {
    height: 8em;
    width: 8em;
  }
  p.hover-text {
    font-size: 1.5rem;
    padding-top: 0.5em;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
  .col-12 {
    height: 67em;
    width: 67em;
  }
}

@media (max-width: 1200px) {
  .show-container {
    font-size: 9px;
    margin-left: 10em;
    margin-right: 5em;
    padding-top: 12em;
  }
  /* .main-content {
    width: 40%;
  } */
  /* .show-container-left {
    width: 40%;
  }
  .show-container-right {
    width: 60%;
  } */

  .image-show-container {
    width: 75%;
  }
  #heading1 {
    margin-bottom: 10px;
  }
  #heading3 {
    margin-top: -35px;
  }

  .link {
    margin-left: 30px;
  }

  .pagination-info {
    margin-top: -40px;
  }
  .github a {
    font-size: 175%;
  }
  .cursor-circle-container {
    height: 10em;
    width: 10em;
  }
  .col-12 {
    height: 85em;
    width: 85em;
  }
}
@media (max-width: 992px) {
  .logo-show-mobile {
    display: block;
    height: 15em;
    width: 15em;
    margin-top: 5em;
    margin-left: 5em;
  }
  .cursor-circle-container {
    display: none;
  }
  .show-container {
    flex-direction: column;
    margin: 0;
    width: 100%;
  }
  .main-content,
  .main-headings {
    width: 100%;
  }
  .main-headings #quote {
    width: 94%;
  }
  .show-project-description {
    width: 90%;
  }
  .show-container-left {
    width: 100%;
    padding-left: 15em;
    padding-right: 15em;
  }
  .show-container-right {
    width: 100%;
    padding-left: 15em;
    padding-right: 15em;
  }
  .image-show-container {
    margin: 0;
    width: 100%;
  }
  .main-content {
    position: relative;
  }

  .highlights-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .show-highlights {
    position: static;
    display: block;
    width: 100%;
    opacity: 1;
    top: 0;
    left: 0;
    transform: none;
    z-index: 1;
    margin-bottom: 5em;
  }
  .show-highlights h5 {
    display: none;
  }
  .github {
    margin-top: 1em;
  }
}

@media (max-width: 768px) {
  .show-container-right,
  .show-container-left {
    padding-left: 5em;
    padding-right: 5em;
  }
  p.content,
  .show-project-description p {
    font-size: 1.2rem;
  }
}
@media (max-width: 576px) {
  .logo-show-mobile {
    height: 10em;
    width: 10em;
  }
  .show-container-right,
  .show-container-left {
    padding-left: 5em;
    padding-right: 5em;
  }
  .main-headings .heading,
  .show-project-description {
    margin-left: 0;
  }
  .show-project-description {
    width: 100%;
    padding-right: 0;
  }

  h5.highlights-title {
    margin-left: 0;
  }
  .show-highlights {
    position: static;
    border: none;
    padding: 0;
  }
  .show-container-right {
    padding: 0;
  }
  .col-12 {
    width: 100%;
  }
}
@media (max-width: 450px) {
  .pagination-button button p {
    font-size: 1.5rem;
  }
  .logo-show-mobile {
    display: none;
  }
}
@media (max-width: 360px) {
  .show-container-left {
    padding-left: 1.5em;
    padding-right: 1.5em;
  }
  #heading1 {
    margin-left: 30px;
  }
  #heading2 {
    margin-left: 90px;
  }
  h5.highlights-title {
    padding-top: 1em;
    padding-bottom: 1em;
    font-size: 1.6rem;
  }

  .github a {
    font-size: 200%;
  }

  .github a {
    margin-left: 2em;
  }

  .show-highlights ul {
    padding: 0;
  }
}
</style>
