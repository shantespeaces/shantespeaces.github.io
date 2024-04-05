<template>
  <WordAnimation
    v-if="isLoading && isFirstLoad"
    :remainingSeconds="remainingSeconds"
    @skipAnimation="handleEntry"
  />
  <Home v-else />
  <!-- <WordAnimation />
  <Home /> -->
</template>

<script setup>
import Home from "@/components/Home.vue";
import WordAnimation from "../components/WordAnimation.vue";
import { ref, onBeforeMount } from "vue";
const isLoading = ref(true);
const isFirstLoad = ref(false); // Initialize isFirstLoad as false

// Retrieve isFirstLoad from session storage
const storedIsFirstLoad = sessionStorage.getItem("isFirstLoad");
if (storedIsFirstLoad === null) {
  isFirstLoad.value = true; // Set isFirstLoad to true if it's the first time visiting the website
}

// Simulate loading delay
setTimeout(() => {
  isLoading.value = false;
  if (isFirstLoad.value) {
    sessionStorage.setItem("isFirstLoad", "false"); // Store isFirstLoad in session storage after the first load
  }
}, 25000);

const remainingSeconds = ref(25); // Initial value for countdown

const handleEntry = () => {
  isLoading.value = false;
};

const countdown = () => {
  if (remainingSeconds.value > 0) {
    remainingSeconds.value--;
    setTimeout(countdown, 1000); // Call countdown again after 1 second
  } else {
    isLoading.value = false; // Transition to MainContent when countdown reaches 0
  }
};

onBeforeMount(() => {
  if (isFirstLoad.value) {
    setTimeout(countdown, 1000); // Start the countdown timer when component is mounted
  }
});
</script>

<style>
@font-face {
  font-family: "parkLane";
  src: url("@/assets/fonts/parklane.regular.otf") format("Opentype");
}
@font-face {
  font-family: "cannes";
  src: url("@/assets/fonts/cannes.otf") format("Opentype");
}
@font-face {
  font-family: "lePorsche";
  src: url("@/assets/fonts/lePorsche.otf") format("Opentype");
}
@font-face {
  font-family: "champagne";
  src: url("@/assets/fonts/champagne.ttf") format("Truetype");
}

:root {
  --goldToRight: linear-gradient(
    to right,
    #462523 0,
    #cb9b51 22%,
    #f6e27a 45%,
    #f6f2c0 50%,
    #f6e27a 55%,
    #cb9b51 78%,
    #462523 100%
  );
  --goldToRightDark: linear-gradient(
    to right,
    #462523 0,
    #cb9b51 22%,

    #cb9b51 78%,
    #462523 100%
  );
  --goldToBottom: linear-gradient(
    to bottom,
    #462523 0,
    #cb9b51 22%,
    #f6e27a 45%,
    #f6f2c0 50%,
    #f6e27a 55%,
    #cb9b51 78%,
    #462523 100%
  );
  --goldToBottomDark: linear-gradient(
    to bottom,
    #462523 0,
    #462523 22%,
    #cb9b51 55%,
    #f6e27a 60%,
    #cb9b51 65%,
    #462523 100%
  );
  /* --goldToRightText: 5px -5px 8px rgba(48, 48, 48, 0.452); */

  --goldToBottomYellow: linear-gradient(
    to bottom,

    #cb9b51 22%,
    #f6e27a 45%,
    #f6f2c0 50%,
    #f6e27a 55%,
    #cb9b51 78%
  );

  --goldToRightYellow: linear-gradient(
    to right,

    #cb9b51 22%,
    #f6e27a 45%,
    #f6f2c0 50%,
    #f6e27a 55%,
    #cb9b51 78%
  );
}
body{
  overflow-x: hidden;
}
</style>
