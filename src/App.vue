<template>
  <RouterView />

  <!-- <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <Component :is="Component" />
    </transition>
  </RouterView> -->
</template>
<script setup>
import { RouterView } from "vue-router";
import { onMounted } from "vue";

const addEventListeners = () => {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const label = event.target.innerText || event.target.value || "button";
      if (typeof gtag !== "undefined") {
        gtag("event", "click", {
          event_category: "button",
          event_label: label,
        });
      }
    });
  });
};

onMounted(() => {
  addEventListeners();
});
</script>

<style scoped></style>
