<!-- FilterButtons.vue -->
<template>
  <div class="filter-button-wrapper d-flex justify-content-between">
    <div class="filter-button-container">
      <div class="filter-buttons">
        <label>
          <input type="radio" name="filter" @click="filterByType(null)" />
          Everything
        </label>
      </div>
    </div>
    <div class="filter-button-container">
      <div class="filter-buttons">
        <label>
          <input type="radio" name="filter" @click="filterByType('design')" />
          UX UI
        </label>
      </div>
    </div>
    <div class="filter-button-container">
      <div class="filter-buttons">
        <label>
          <input type="radio" name="filter" @click="filterByType('code')" />
          Let's see some code!
        </label>
      </div>
    </div>
    <div class="filter-button-container">
      <div class="filter-buttons">
        <label>
          <input type="radio" name="filter" @click="filterByType('video')" />
          Videos
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps(["filter"]);
const emit = defineEmits();

const filterByType = (type) => {
  // Reset animation class on all cards
  document.querySelectorAll(".col").forEach((card) => {
    card.classList.remove("animate__animated", "animate__pulse");
  });

  // Apply animation class to the displayed cards based on the selected type
  const displayedCards = document.querySelectorAll(".col.visible");
  displayedCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("animate__animated", "animate__pulse");
    }, index * 200);
  });

  // Emit the selected type to the parent component
  emit("filter", type);
};
</script>

<style scoped>
.filter-button-wrapper {
  margin: 2.5em 10em;
  z-index: 15;
}
/* .filter-button-container {
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 3;
  justify-content: center;
} */
.filter-buttons button {
  cursor: pointer;
  display: inline-block;
  padding: 24px 32px;
  border: 0;
  text-decoration: none;
  border-radius: 15px;
  background-color: rgba(255, 133, 71, 0.52);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;

  /* border-radius: 8px;
  background: #2d4cc8;
  box-shadow: 6px 6px 13px #2641aa, -6px -6px 13px #3457e6; */
  font-family: "Roboto Mono", monospace;
}
.filter-buttons button:hover {
  background-color: rgba(2255, 133, 71, 0.2);
  transform: translateY(3px);
}

.filter-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  z-index: 200;
}

.filter-buttons button {
  margin: 0 10px;
  padding: 8px 12px;
  cursor: pointer;
}
</style>
