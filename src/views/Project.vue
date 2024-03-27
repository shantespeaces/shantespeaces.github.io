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
    <div class="d-flex justify-content-between align-items-center">
      <button>
        <router-link data-name="home" :to="{ name: 'home' }"
          ><p>Return to Home Page</p></router-link
        >
      </button>

      <button @click="viewPrevProject" class="d-flex">
        <p>View Previous Project</p>
      </button>
      <button @click="viewNextProject" class="d-flex">
        <p>View Next Project</p>
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
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
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
}
.main-headings {
  width: 50%;
  align-self: center;
  display: flex;
  flex-direction: column;
  animation: scaleDown 3s ease 2s;
  -webkit-animation: scaleDown 3s ease 2s;
}

.main-headings #quote {
  width: 60%;
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
  /* flex-wrap: wrap; */
}
.show-highlights h5 {
  margin-left: 0;
}
/* .show-highlights li {
  padding: 1em;
} */
.highlights-title:hover + .show-highlights {
  display: block;
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
  /* font-style: italic; */
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
}

.logo-show-container img {
  width: 100%;
  height: auto;
  position: relative;
  /* object-fit: scale-down; */
}
.image-show-container {
  margin: auto;
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
.more {
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
  /* padding-top: 3.3rem; */
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.more button p:hover {
  transition: font-size 0.5s;
  font-size: 3em;
}
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
@media (min-width: 350px) and (max-width: 529px) {
  * {
    animation-name: none;
  }

  .show-container {
    width: 90%;
    height: 700px;
    margin-left: auto;
    margin-right: auto;
    font-size: 5px;
    margin-bottom: 20px;
  }

  .show-container-left {
    flex-direction: column;
    justify-content: center;
  }

  .main-content,
  .image-show-wrapper {
    flex-basis: 100%;
  }

  .main-content {
    order: 2;
    outline: 1px solid red;
    margin: 0 50px;
  }

  .image-show-wrapper {
    order: 1;
  }

  .heading {
    margin-left: 55px;
  }

  #heading1,
  #heading2 {
    margin: 0;
    margin-top: -5px;
  }

  #heading2 {
    margin-left: 100px;
  }

  #heading3 {
    margin-top: -20px;
  }

  .show-project-description {
    margin-top: -10px;
    margin-left: 60px;
  }

  .more-info {
    height: 150px;
    width: 60%;
    margin: 0;
    align-self: flex-start;
    margin-top: 0px;
    margin-left: 60px;
    font-size: 8px;
  }

  .link {
    display: none;
  }

  .image-show-wrapper {
    order: 1;
    width: 100%;
    height: 100px;
    justify-content: center;
  }

  .logo-show-container {
    width: 100%;
    height: 400px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  img .image-show {
    width: 80%;
    height: auto;
    top: -20px;
    margin-left: auto;
    margin-right: auto;
  }
}
.image-show {
  padding-bottom: 5em;
}
@media (min-width: 530px) and (max-width: 699px) {
  * {
    animation-name: none;
  }

  .show-container {
    width: 90%;
    height: 900px;
    margin-left: auto;
    margin-right: auto;
    font-size: 8px;
  }

  .show-container-left {
    flex-direction: column;
    justify-content: center;
  }

  .main-content,
  .image-show-wrapper {
    flex-basis: 100%;
  }

  .main-content {
    width: 80%;
    order: 2;
    align-self: center;
  }

  .main-headings {
    width: 100%;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  .heading {
    margin-left: 55px;
  }

  #heading1,
  #heading2 {
    margin: 0;
    margin-top: -15px;
  }

  #heading3 {
    margin-top: -30px;
  }

  .show-project-description {
    margin-top: -20px;
    margin-left: 60px;
  }

  .link {
    display: none;
  }

  .more-info {
    height: 150px;
    width: 60%;
    margin: 0;
    align-self: flex-start;
    margin-top: 0px;
    margin-left: 60px;
    text-align: justify;
  }

  .image-show-wrapper {
    order: 1;
    width: 100%;
    height: 400px;
    justify-content: center;
  }

  .logo-show-container {
    width: 100%;
    height: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  img .image-show {
    width: 80%;
    height: auto;
    top: -20px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (min-width: 700px) and (max-width: 1200px) {
  .show-container {
    width: 100%;
    height: auto;
    font-size: 9px;
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
</style>
