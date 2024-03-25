<!-- FilterButtons.vue -->
<template>
  <div class="filter-button-wrapper d-flex justify-content-between">
    <div class="filter-buttons">
      <div class="input-wrapper">
        <label>
          <input
            type="radio"
            class="radio-button"
            name="filter"
            @click="filterByType(null)"
            checked
          />
          <span class="label-text"> Everything</span>
        </label>
      </div>
    </div>

    <div class="filter-buttons">
      <div class="input-wrapper">
        <label>
          <input
            type="radio"
            class="radio-button"
            name="filter"
            @click="filterByType('design')"
          />
          <span class="label-text">UX UI</span>
        </label>
      </div>
    </div>

    <div class="filter-buttons">
      <div class="input-wrapper">
        <label>
          <input
            type="radio"
            class="radio-button"
            name="filter"
            @click="filterByType('code')"
          />
          <span class="label-text"> Let's see some code!</span>
        </label>
      </div>
    </div>

    <div class="filter-buttons">
      <div class="input-wrapper">
        <label>
          <input
            type="radio"
            class="radio-button"
            name="filter"
            @click="filterByType('video')"
          />
          <span class="label-text">Videos</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps(["filter"]);
const emit = defineEmits();

// Function to emit selected type and apply animation to cards
const filterByType = (type) => {
  // Emit the selected type to the parent component
  emit("filter", type);

  // // Reset animation class on all cards
  // document.querySelectorAll(".card").forEach((card) => {
  //   card.classList.remove("animate__animated", "animate__pulse");
  // });

  // Apply animation class to the displayed cards based on the selected type
  // const displayedCards = document.querySelectorAll(".card.visible");
  // displayedCards.forEach((card, index) => {
  //   setTimeout(() => {
  //     card.classList.add("animate__animated", "animate__pulse");
  //   }, index * 200);
  // });
};
</script>

<style scoped>
.filter-button-wrapper {
  margin: 5em 15em;
  height: 8em;
}

.filter-buttons label {
  font-size: 1.8rem;
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Poiret One", sans-serif;
}

.filter-buttons label:hover {
  font-weight: bold;
}

input[type="radio"] {
  display: none;
}

input[type="radio"]:checked + .label-text {
  background-image: var(--goldToRightYellow);
  color: transparent;
  -webkit-background-clip: text;
  font-weight: bold;
  font-size: 2em;
}
.input-wrapper {
  display: inline-block;
}

.label-text {
  transition: font-size 0.5s;
}
/* .col {
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 2s ease, transform 2s ease;
}
.card.visible {
  opacity: 1;
  transform: translateX(0);
} */
</style>
