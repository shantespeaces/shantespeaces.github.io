<!-- FilterButtons.vue -->
<template>
  <div class="filter-button-wrapper d-flex justify-content-between">
    <div class="filter-buttons">
      <label>
        <input
          type="radio"
          class="radio-button"
          name="filter"
          @click="filterByType(null)"
        />
        Everything
      </label>
    </div>

    <div class="filter-buttons">
      <label>
        <input
          type="radio"
          class="radio-button"
          name="filter"
          @click="filterByType('design')"
        />
        UX UI
      </label>
    </div>

    <div class="filter-buttons">
      <label>
        <input
          type="radio"
          class="radio-button"
          name="filter"
          @click="filterByType('code')"
        />
        Let's see some code!
      </label>
    </div>

    <div class="filter-buttons">
      <label>
        <input
          type="radio"
          class="radio-button"
          name="filter"
          @click="filterByType('video')"
        />
        Videos
      </label>
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
  margin: 5em 15em;
  z-index: 15;
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

.radio-button {
  width: 20px;
  height: 20px;
  background-color: black;
}
</style>
