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
</script>

<style scoped></style>
