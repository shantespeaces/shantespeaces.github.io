<template>
  <div class="card-wrapper">
    <div
      class="card-container animate__animated animate__pulse"
      @click="handleClick"
      :style="backgroundStyle"
    >
      <!-- <img :src="cardImage" class="" alt="..." /> -->
      <div v-if="type === 'design'" class="shape-container">
        <div class="circle">
          <img :src="circleImage" alt="Circle Image" />
          <div class="back">
            <p class="card-text">{{ title }}</p>
          </div>
        </div>
      </div>
      <div
        v-else-if="type === 'video'"
        class="shape-container square-container"
      >
        <!-- Square shape content -->
        <div class="square">
          <img :src="circleImage" alt="Square Image" />
          <div class="back">
            <p class="card-text">{{ title }}</p>
          </div>
        </div>
      </div>
      <div v-else-if="type === 'code'" class="shape-container">
        <!-- Hexagon shape content -->
        <div class="hexagon-container">
          <div class="hexagon">
            <img :src="circleImage" alt="Hexagon Image" />
            <div class="back">
              <p class="card-text">{{ title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
const emit = defineEmits();

const props = defineProps([
  // "cardImage",
  "title",
  "circleImage",
  "type",
  "id",
  "projectId",
  "backgroundStyle",
]);

const handleClick = () => {
  console.log("Clicked card ID:", props.projectId);
  // Emit the clicked card's id
  emit("handleClick", props.projectId);
};
</script>

<style>
.card-wrapper {
  width: 18rem;
  height: 23rem;
  /* background-color: #faf9f6; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  /* background: #fff7f2; */
  background-color: #ddc0b4;
  box-shadow: 5px 5px 10px #e0d9d5, -5px -5px 10px #ffffff;
  z-index: 100;
}
.card-wrapper:hover {
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}
/* .card__side--back-3 {
  background: linear-gradient(-45deg, #9a4eff, #24ff72);
} */
.card-container {
  position: relative;
  width: 15rem;
  height: 20rem;
  object-fit: cover;
  border-radius: 10px;
  overflow: hidden;
  z-index: 101;
  background: #ffebe1;
  box-shadow: 24px 24px 48px #bca399, -24px -24px 48px #feddcf;
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

.shape-container,
.square-container,
.hexagon-container {
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
  /* transition: transform 2.0s ease-in-out; */
  /* transition: transform 2s ease;
  transform-style: preserve-3d; */
}

.circle img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.circle .back {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotateY(180deg);
  background-color: black;
  color: white;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.circle:hover {
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}

.circle:hover .back {
  display: flex;
  -webkit-transform: rotateY(0);
  transform: rotateY(0);
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

.square .back {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotateX(180deg);
  background-color: #ef402f;
  color: black;
  text-align: center;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
}

.square:hover .back {
  display: flex;
}

.square:hover {
  transform: rotateX(180deg);
  border-radius: 10px;
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

.hexagon .back {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotateX(180deg);
  background-color: rgba(255, 133, 71);
  color: white;
  text-align: center;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
}

.hexagon:hover .back {
  display: flex;
}

.hexagon:hover {
  transform: rotateX(180deg);
}
p.card-text {
  font-family: "Major Mono Display", monospace;
  font-weight: bold;
  color: white;
}
</style>
