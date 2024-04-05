<template>
  <div class="card-wrapper">
    <div class="card mb-4">
      <div
        class="card__side card__side--front"
        :style="{ backgroundImage: `url(${project.backgroundImage})` }"
      >
        <div class="circle-container">
          <div class="circle">
            <div class="title">
              <h4>{{ project.cardTitle }}</h4>
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
          <template v-if="project.videoSource">
            <!-- Display video if it exists -->
            <!-- <video
              :src="project.videoSource.videoFile"
              class="background-video"
              controls
              autoplay
              muted
            ></video> -->
            <iframe
              width="560"
              height="315"
              :src="project.videoSource.youtubeLink"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </template>
          <template v-else>
            <!-- Display images if video doesn't exist -->
            <img :src="project.skw" class="background-img" alt="" />
          </template>
          <p class="highlights">HIGHLIGHTS INCLUDE:</p>
          <ul>
            <li
              v-for="(item, index) in project.cardItems"
              :key="`${project.id}_${index}`"
              class="list-item d-flex pb-2"
            >
              <span class="bullet">+</span>
              <p class="content">{{ item }}</p>
            </li>
          </ul>
          <p class="see-project">See project</p>
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
  perspective: 150rem;
  -webkit-perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  width: 23rem;
  height: 46rem;
  border: none;
}

.card__side {
  height: 46rem;
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  border: solid 2px;
  border-image: var(--goldToBottomYellow) 1;
  border-image-slice: 1;
}
.card__side--front {
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
  bottom: -12em;
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
  font-size: 3.5em;
}
.circle .title {
  border-bottom: none;
}
.card__side--back {
  transform: rotateY(180deg);
  background: #fcf4ed;
  object-fit: cover;
  flex-direction: column;
}
.card__side--back p,
.card__side--back span {
  color: black;
}
.card__side--back p {
  font-size: 1.1rem;
  padding-top: 0.3rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
.card__side--back .highlights {
  padding-left: 1em;
  padding-top: 1em;
  letter-spacing: 2px;
}
.card__side--back ul {
  padding-left: 1em;
}
.card:hover .card__side--front {
  transform: rotateY(-180deg);
}

.card:hover .card__side--back {
  transform: rotateY(0);
}

.card {
  transform: translateY(3px);
  transition: transform ease-in-out 0.1s;
}
.card__side video.background-video {
  margin-top: 0;
  height: 400px;
}
.see-project {
  display: none;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: var(--goldToRightDark);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-size: 1.6rem;
}
/* @media screen and (max-width: 992px) {
  .card-wrapper {
    height: 15em;
  }
  .card,
  .card__side {
    height: 15em;
    width: 10em;
  }

  .circle {
    height: 9em;
    width: 9em;
    bottom: -3em;
    left: 0.3em;
  }
  .circle h4 {
    font-size: 2em;
  }
} */
@media screen and (max-width: 450px) {
  .card__side--back {
    height: fit-content;
  }
}
@media screen and (max-width: 360px) {
  /* .card-wrapper, */
  .card,
  .card__side {
    width: 19rem;
    height: 40em;
  }

  .circle {
    height: 18em;
    width: 18em;
    bottom: -10em;
    left: 0.5em;
  }
  .see-project {
    display: block;
  }
}
</style>
<!-- .card:hover .card__side { -->
<!-- /* transform: translateY(-3px) scale(1.2); */
  /* height: 46rem;
  width: 30em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000; */ -->
<!-- } -->
