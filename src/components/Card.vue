<template>
  <section class="section-plans" id="section-plans">
    <div class="card animate__animated animate__pulse">
      <div class="card__side card__side--front">
        <p class="card-text">{{ title }}</p>
        <img :src="backgroundImage" class="background-img" alt="" />
      </div>
      <div class="card__side card__side--back" @click="handleClick">
        <div v-if="type === 'design'" class="shape-container">
          <div class="circle">
            <img :src="logo" alt="logo" />
          </div>
        </div>
        <div
          v-else-if="type === 'video'"
          class="shape-container square-container"
        >
          <!-- Square shape content -->
          <div class="square">
            <img :src="logo" alt="Square Image" />
          </div>
        </div>
        <div v-else-if="type === 'code'" class="shape-container">
          <!-- Hexagon shape content -->
          <div class="hexagon-container">
            <div class="hexagon">
              <img :src="logo" alt="Hexagon Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
const emit = defineEmits();

const props = defineProps([
  // "cardImage",
  "title",
  "logo",
  "type",
  "id",
  "projectId",
  "backgroundImage",
]);

const handleClick = () => {
  console.log("Clicked card ID:", props.projectId);
  // Emit the clicked card's id
  emit("handleClick", props.projectId);
};
</script>

<style>
.card {
  /* -webkit-perspective: 150rem;

  -moz-perspective: 150rem; */
  position: relative;
  perspective: 150rem;
  width: 23rem;
  height: 25rem;
  border: none;
}

.card__side {
  height: 25rem;

  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: contain;
  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
}

.card__side--back {
  transform: rotateY(180deg);
  background: #ffebe1;
  object-fit: cover;
}
.card:hover .card__side--front {
  transform: rotateY(-180deg);
}

.card:hover .card__side--back {
  transform: rotateY(0);
}

.card-container {
  position: absolute;
  top: 1.5em;
  left: 1.5em;

  width: 15rem;
  height: 15rem;
  object-fit: cover;
  border-radius: 10px;
  overflow: hidden;
  z-index: 101;
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
img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
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

.circle {
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
}

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
