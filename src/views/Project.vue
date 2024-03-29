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

              <div class="heading">
                <h3 id="heading1">{{ project.language }}</h3>
                <h3 id="heading2">Project</h3>
                <h1 id="heading3">{{ project.heading3 }}</h1>
                <h4 id="heading4">{{ project.title }}</h4>
              </div>

              <div class="show-project-description">
                <p>{{ project.description }}</p>
              </div>
              <h5 class="highlights-title">Highligts</h5>
              <div class="show-highlights">
                <h5>Highligts</h5>
                <ul class="">
                  <li
                    v-for="(item, index) in project.cardItems"
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

        <div
          class="show-container-right d-flex justify-content-center alig-items-center"
        >
          <div class="logo-show-container">
            <template v-if="project.video">
              <video
                :src="project.video"
                class="background-video"
                controls
                autoplay
                muted
              ></video>
            </template>

            <img class="logo-show" :src="project.logo" alt="" />
          </div>
          <template v-if="project.pdfImages"
            ><p>Guideline Document</p>
            <div class="row">
              <div
                class="col-4 mb-3"
                v-for="(pdfImage, index) in project.pdfImages"
                :key="index"
              >
                <img class="image-pdf" :src="pdfImage.image" alt="" />
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
  <section class="more">
    <div
      class="more-container d-flex justify-content-around align-items-center"
    >
      <!-- <button>
        <router-link data-name="home" :to="{ name: 'home' }"
          ><p>Home</p></router-link
        >
      </button> -->

      <button
        @click="viewPrevProject"
        class="btn d-flex justify-content-around align-items-center"
      >
        <span class="before material-symbols-outlined mt-1"
          >navigate_before</span
        >
        <span class="before material-symbols-outlined mt-1"
          >navigate_before</span
        >
        <p class="mt-1 pt-1">Previous</p>
      </button>
      <button
        @click="viewNextProject"
        class="btn d-flex justify-content-around align-items-center"
      >
        <p class="mt-1 pt-1">Next</p>
        <span class="next material-symbols-outlined mt-1">navigate_next</span>
        <span class="next material-symbols-outlined mt-1">navigate_next</span>
      </button>
    </div>
  </section>
  <footer>
    <FooterComponent />
  </footer>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
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

onMounted(() => {
  console.log("ID prop:", props.id);
  console.log("Project object:", project.value);
});

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

const viewNextProject = async () => {
  const lastIndex = projectsData.length - 1;
  projectId = projectId === lastIndex ? 0 : projectId + 1;
  await getProjectDetails(projectId);
};

const viewPrevProject = async () => {
  const lastIndex = projectsData.length - 1;
  projectId = projectId === 0 ? lastIndex : projectId - 1;
  await getProjectDetails(projectId);
};
</script>

<style>
.show-background-container {
  background-color: #fffdf6;
}
.show-container {
  margin-left: 15em;
  margin-right: 15em;
  font-size: 14px;
  font-family: "Montserrat", sans;
  justify-content: center;
}
/* LEFT */
.show-container-left {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
  animation: fade-in 1.5s ease, slide-in 1.2s ease;
  -webkit-animation: fade-in 1.5s ease, slide-in 1.2s ease;
  padding-top: 15em;
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
  margin-left: 80px;
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
.show-highlights {
  display: none;
  padding: 2em;
  background-color: #fffdf6;
  border: solid 2px;
  border-image: var(--goldToBottomYellow) 1;
  border-image-slice: 1;
  position: relative;
  left: 20em;
  top: -25em;
}
.show-highlights h5 {
  margin-left: 0;
}
.highlights-title:hover + .show-highlights {
  display: block;
}
h5.highlights-title,
.github a {
  padding-top: 1em;
  padding-bottom: 1em;
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
  font-size: 1100%;
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
  margin-left: 90px;
}
.show-project-description p {
  font-size: 1.3rem;
}
.github a {
  margin-left: 92px;
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
  padding-top: 2em;
}
.show-container-right p {
  text-align: center;
}
.logo-show-container {
  max-width: 100%;
  padding-bottom: 10em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo-show-container img {
  width: 100%;
  height: auto;
  position: relative;
  /* object-fit: scale-down; */
}
.image-show-container {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image-show {
  max-width: 100%;
  object-fit: cover;
  align-self: center;
}
.background-video {
  height: 40em;
  margin-top: 15em;
}
.image-show-title {
  text-align: center;
}
button.pdf {
  margin-bottom: 10em;
}
section.more {
  height: 8em;
  background-color: white;
  z-index: 100;
  position: fixed;
  border-top: solid 3px;
  bottom: 0;
  width: 100%;
  border-image: var(--goldToRight) 1;
  border-image-slice: 1;
}
.more-container {
  margin-top: 2em;
}
.more button {
  border: none;
  background-image: var(--goldToBottom);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}
.more button p {
  background-image: var(--goldToRightYellow);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0;
}
.more span {
  font-size: 2.6rem;
}
.more button p:hover {
  transition: font-size 0.5s;
  font-size: 2.5em;
}
/* .more p:hover.material-symbols-outlined {
  background-image: var(--goldToRightYellow);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
} */
.image-pdf {
  height: 20em;
  width: 14em;
}
.image-pdf:hover {
  transform: scale(1.2);
  transition: transform 0.3s ease-in-out;
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
@media (max-width: 1600px) {
  .show-container {
    font-size: 11.5px;
    margin-left: 15em;
    margin-right: 15em;
  }
  .main-content {
    width: 40%;
  }
  .image-show-container {
    width: 100%;
  }
  .show-project-description {
    width: 80%;
    padding-right: 5em;
  }
  .main-headings #quote {
    width: 85%;
  }
}
@media (max-width: 1200px) {
  .show-container {
    font-size: 9px;
    margin-left: 10em;
    margin-right: 10em;
  }
  .main-content {
    width: 40%;
  }
  .show-container-left {
    width: 40%;
  }
  .show-container-right {
    width: 60%;
  }
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

  .more-info {
    margin-top: -40px;
  }
}
@media (max-width: 992px) {
  .show-container {
    flex-direction: column;
    margin: 0;
    width: 100%;
  }
  .main-content,
  .main-headings {
    width: 100%;
  }
  .show-project-description {
    width: 75%;
  }
  .show-container-left {
    width: 100%;
    padding-left: 20em;
    padding-right: 20em;
  }
  .show-container-right {
    width: 100%;
    padding-left: 20em;
    padding-right: 20em;
  }
  .image-show-container {
    margin: 0;
    width: 100%;
  }
  .main-content {
    position: relative;
  }
}
@media (max-width: 768px) {
  .show-container-right,
  .show-container-left {
    padding-left: 5em;
    padding-right: 5em;
  }
}
@media (max-width: 576px) {
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
  h5.highlights-title,
  .github a {
    margin-left: 2em;
  }
  .show-highlights {
    display: block;
    left: 0;
    top: 0em;
  }
  .show-highlights ul {
    padding: 0;
  }
  .show-highlights h5 {
    display: none;
  }
}
</style>
