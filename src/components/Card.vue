<template>
  <div class="card-wrapper">
    <div class="card animate__animated animate__pulse">
      <div
        class="card__side card__side--front"
        :style="{ backgroundImage: `url(${project.backgroundImage})` }"
      >
        <div class="circle-container">
          <div class="circle">
            <!-- <img :src="project.logo" alt="logo" /> -->
            <div class="title">
              <h4>{{ project.title }}</h4>
            </div>
          </div>
        </div>
      </div>
      <router-link
        class="project-details"
        :to="{
          name: 'project',
          params: { id: project.id },
        }"
      >
        <div class="card__side card__side--back d-flex">
          <img :src="project.skw" class="background-img" alt="" />
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

          <!-- <div v-if="type === 'design'" class="shape-container">
            <div class="circle">
              <img :src="project.logo" alt="logo" />
            </div>
          </div>
          <div
            v-else-if="type === 'video'"
            class="shape-container square-container"
          >
           
            <div class="square">
              <img :src="project.logo" alt="Square Image" />
            </div>
          </div>
          <div v-else-if="type === 'code'" class="shape-container">
           
            <div class="hexagon-container">
              <div class="hexagon">
                <img :src="project.logo" alt="Hexagon Image" />
              </div>
            </div> -->
          <!-- </div> -->
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  project: Object, // Define 'project' prop as an Object type
});
</script>

<style>
.card-wrapper {
  height: 50em;
}

.card {
  /* -webkit-perspective: 150rem;

  -moz-perspective: 150rem; */
  position: relative;
  perspective: 150rem;
  width: 23rem;
  height: 45rem;
  border: none;
}

.card__side {
  height: 45rem;

  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  backface-visibility: hidden;
  /* border-radius: 3px; */
  overflow: hidden;
  border: solid 2px;
  border-image: var(--goldToBottomYellow) 1;
  border-image-slice: 1;
}
.card__side--front {
  /* background-size: cover; Ensure background image covers the whole area */
  background-size: 800px 800px;
}
.circle-container {
  position: relative;
}
.circle {
  background-color: white;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 50%;
  position: relative;
  bottom: -5em;
  left: 1em;
  height: 21em;
  width: 21em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.circle h4 {
  text-transform: uppercase;
  font-family: "parklane";
  letter-spacing: 2px;
  font-size: 2.5em;
}
.circle .title {
  border-bottom: none;
}
.card__side--back {
  transform: rotateY(180deg);
  background: #ffebe1;
  object-fit: cover;
  flex-direction: column;
}
.card:hover .card__side--front {
  transform: rotateY(-180deg);
}

.card:hover .card__side--back {
  transform: rotateY(0);
}

.card-container {
  /* position: absolute;
  top: 1.5em;
  left: 1.5em;

  width: 15rem;
  height: 15rem;
  object-fit: cover;
  border-radius: 10px;
  overflow: hidden;
  z-index: 101; */
  /* background: #ffebe1; */
  /* box-shadow: 24px 24px 48px #bca399, -24px -24px 48px #feddcf; */
}
/* .card-container:hover { */
/* background-color: #faf9f6; */
/* transform: translateY(3px);
  transition: transform ease-in-out 0.1s; */
/* } */
/* Add Animate.css classes */
/* .card-container.animate__animated {
  animation-duration: 1s;
}

.card-container.animate__pulse {
  animation-name: animate__pulse;
} */

.card__side img.background-img {
  width: 100%;
  height: 100%;
}
.shape-container {
  display: flex;
  flex-direction: column;
}
.shape-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;
}

/* .circle {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.circle img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
} */

.square {
  width: 175px;
  height: 175px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: transform 2s ease-in-out;
  overflow: hidden;
  transform-origin: center center;
  transform-style: preserve-3d;
}

.square img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hexagon {
  position: relative;
  width: 180px;
  height: 200px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: transform 1.3s ease-in-out;
  overflow: hidden;
  transform-style: preserve-3d;
}

.hexagon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

p.card-text {
  font-family: "Major Mono Display", monospace;
  font-weight: bold;
  color: black;
}
</style>
