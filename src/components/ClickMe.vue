<template>
  <div class="click-container" @mousemove="updateTextPosition">
    <div
      class="hover-text-container"
      ref="hoverText"
      :style="{
        top: textPosition.y + 'px',
        left: textPosition.x + 'px',
      }"
    >
      <p class="hover-text">Click Me</p>
    </div>
  </div>
</template>
<script setup>
//PDF CLICK ME CURSOR
import { ref } from "vue";
const textPosition = ref({ x: 0, y: 0 });
const updateTextPosition = (event) => {
  console.log(event); // Log mousemove event
  textPosition.value = { x: event.clientX, y: event.clientY };
};
</script>
<style>
.image-container {
  position: relative;
  display: inline-block;
}

.hover-text-container {
  position: fixed;
  opacity: 0;
  pointer-events: none; /* Ensure the text doesn't interfere with clicks */
  transition: opacity 0.3s ease-in-out;
  border: solid 2px;
  border-image: var(--goldToRight) 1;
  border-image-slice: 1;
  background-color: white;
  margin-top: 1.5em;
  margin-left: 1.5em;
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
  padding-top: 0.5em;
  padding-left: 0.5em;
  padding-right: 0.5em;
}

.image-container:hover .hover-text-container {
  opacity: 1;
}
</style>
