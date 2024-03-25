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
            @click="filterByType('code')"
          />
          <span class="label-text"> Talk is cheap. Show me the code!</span>
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
            @click="filterByType('video')"
          />
          <span class="label-text">Videos</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

const props = defineProps(["filter"]);
const emit = defineEmits();

// Function to emit selected type
const filterByType = (type) => {
  // Emit the selected type to the parent component
  emit("filter", type);
};
</script>

<style scoped>
.filter-button-wrapper {
  margin: 5em 15em 0em 15em;
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
</style>
