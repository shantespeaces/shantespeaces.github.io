<template>
  <MainNav />
  <!-- <Feather /> -->
  <section id="project">
    <div class="show-background-container" v-if="project">
      <div class="show-container d-flex">
        <div class="show-container-left">
          <div class="main-content" ref="mainContentRef">
            <div class="main-headings" ref="mainHeadingsRef">
              <q id="quote"> a random quote related to programming. </q>

              <div class="heading">
                <h3 id="heading1">{{ project.language }}</h3>
                <h3 id="heading2">Project,</h3>
                <h1 id="heading3">{{ project.heading3 }}</h1>
                <h4 id="heading4">{{ project.title }}</h4>
              </div>

              <div class="show-project-description">
                <p>{{ project.description }}</p>
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
                type="video/mp4"
                ref="videoRef"
                class="video"
                @mouseover="playVideo"
                loop
                controls
              ></video>
            </template>

            <img class="logo-show" :src="project.logo" alt="" />
          </div>

          <div
            class="image-show-container"
            v-for="(image, index) in project.projectImages"
            :key="index"
          >
            <p class="image-show-title">{{ image.title }}</p>
            <img class="image-show" :src="image.image" alt="" />
          </div>
          <!-- <template v-if="project.pdf"
          ><button class="pdf">
            click me to see pdf of client document guide
            <iframe :src="project.pdf"></iframe>
          </button>
        </template> -->
        </div>
      </div>
    </div>
  </section>
  <section class="more">
    <div>
      <button>
        <router-link data-name="home" :to="{ name: 'home' }"
          >Return to Home Page</router-link
        >
      </button>

      <button @click="viewPrevProject">View Previous Project</button>
      <button @click="viewNextProject">View Another Project</button>
    </div>
  </section>
  <section>
    <!-- <SkwCarousel /> -->
    <!-- <Portfolio /> -->
  </section>
  <footer>
    <FooterComponent />
  </footer>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import MainNav from "../components/Nav.vue";
import FooterComponent from "../components/FooterComponent.vue";

// import SkwCarousel from "@/components/SkwCarousel.vue";
// import Portfolio from "../components/Portfolio.vue";
// import Feather from "@/components/Feather.vue";

const playVideo = (event) => {
  event.target.play();
};

const props = defineProps({
  id: {
    type: [Number, String],
    required: true,
  },
});

const project = ref(null); // Initialize as null or an empty object
const route = useRoute(); // Access route object
let projectId = null; // To keep track of the current project ID

onMounted(() => {
  console.log("ID prop:", props.id);
  console.log("Project object:", project.value);
});

onMounted(async () => {
  const projectId = parseInt(route.params.id); // Convert id to number
  await getProjectDetails(projectId);
});

async function getProjectDetails(id) {
  try {
    console.log("ID being searched:", id); // Log the ID being searched

    const axios_result = await axios.get("/portfolio/projects.json");
    console.log("Axios response:", axios_result.data); // Log the entire response data

    const projectsData = axios_result.data;

    // Log each project's ID in the data array
    console.log(
      "Projects data IDs:",
      projectsData.map((project) => project.id)
    );

    // Find the project with the matching id
    const newProject = projectsData.find((project) => project.id === id);

    if (newProject) {
      // If the project with the matching id is found, assign it to the project ref
      project.value = newProject;
      projectId = id; // Update current project ID
      console.log("Project details:", project.value);
    } else {
      console.error("Project not found with id:", id);
    }
  } catch (error) {
    console.error("Error fetching project details:", error);
  }
}

const viewNextProject = async () => {
  projectId++; // Increment project ID
  await getProjectDetails(projectId);
};

const viewPrevProject = async () => {
  projectId--; // Decrement project ID
  await getProjectDetails(projectId);
};
</script>

<style>
.show-background-container {
  background-color: ivory;
}
.show-container {
  padding-top: 20em;
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
  font-size: 85%;
  border-bottom: 1px solid #757575;
  font-style: italic;
}
.main-headings .heading {
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
  background-image: var(--goldToBottomDark);
  color: transparent;
  -webkit-background-clip: text;
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
  font-style: italic;
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
video {
  height: 30em;
  margin-top: 10em;
}
.image-show-title {
  text-align: center;
}
button.pdf {
  margin-bottom: 10em;
}
.more {
  height: 10em;
  background-color: blue;
  z-index: 100;
  position: sticky;
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
/*

@include tablet {
  .show-container {
    width: 100%;
    height: auto;
    font-size: 7px;
  }
  #heading3 {
    margin-top: -35px ;
  }
  .link {
    margin-left: 30px;
  }
  .more-info {
    margin-top: -40px ;
  }
}
*/
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
