<!-- FilterButtons.vue -->
<template>
  <div class="filter-button-wrapper d-flex justify-content-between">
    <div
      v-for="(button, index) in buttons"
      :key="index"
      class="filter-buttons"
      :class="{ checked: checkedIndex === index }"
    >
      <div class="input-wrapper">
        <label>
          <input
            type="radio"
            class="radio-button"
            name="filter"
            :checked="button.checked"
            @click="handleClick(index)"
          />
          <span class="label-text">{{ button.text }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

const props = defineProps(["filter"]);
const emit = defineEmits();
const buttons = [
  { text: "Everything", value: null, checked: true },
  { text: "Talk is cheap. Show me the code!", value: "code", checked: false },
  { text: "UX UI", value: "design", checked: false },
  { text: "Videos", value: "video", checked: false },
];

let checkedIndex = 0; // initially set to the first button

const handleClick = (index) => {
  checkedIndex = index;
  filterByType(buttons[index].value);
};
// Function to emit selected type
const filterByType = (type) => {
  // Emit the selected type to the parent component
  emit("filter", type);
};
</script>
<style scoped>
.filter-button-wrapper {
  display: flex;
  padding-top: 5em;
  flex-direction: column;
}
.filter-buttons {
  text-align: center;
  transition: all 0.3s ease; /* for smooth transition */
}
.filter-buttons label {
  font-size: 1.6rem;
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Poiret One", sans-serif;
}
.radio-button {
  display: none;
}
.filter-buttons label:hover {
  font-weight: bold;
}
.input-wrapper {
  display: inline-block;
}

.label-text {
  transition: font-size 0.5s;
  cursor: pointer;
}
/* .checked {
  order: 999;
  flex-basis: 100%;
} */
input[type="radio"]:checked + .label-text {
  background-image: var(--goldToRightYellow);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  font-weight: bold;
  font-size: 2em;
  display: inline-block;
  text-align: center;
  cursor: default;
  align-self: center;
}

@media screen and (max-width: 576px) {
  input[type="radio"]:checked + .label-text {
    font-size: 1.5em;
  }
}
</style>
<!-- <style scoped>
.filter-button-wrapper {
  margin: 5em 5em 0em 5em;
  height: 8em;
}

.filter-buttons label {
  font-size: 1.6rem;
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
  background-clip: text;
  font-weight: bold;
  font-size: 2em;
  display: inline-block;
  width: 160%;
  text-align: center;
  position: relative;
  top: 3em; /* Move text down by 3em */
}
input[type="radio"]:checked + .label-text.first {
  left: 30vw;
}
input[type="radio"]:checked + .label-text.second {
  left: -15vw;
}
input[type="radio"]:checked + .label-text.third {
  left: -26vw;
}
input[type="radio"]:checked + .label-text.fourth {
  left: -43vw;
}

.input-wrapper {
  display: inline-block;
}

.label-text {
  transition: font-size 0.5s;
}

@media screen and (max-width: 1300px) {
  input[type="radio"]:checked + .label-text.first {
    left: 25vw;
  }
  input[type="radio"]:checked + .label-text.second {
    left: -18vw;
  }
  input[type="radio"]:checked + .label-text.third {
    left: -29vw;
  }
  input[type="radio"]:checked + .label-text.fourth {
    left: -40vw;
  }
  /* .filter-buttons label {
    font-size: 1.4rem;
  } */
}
</style> -->
