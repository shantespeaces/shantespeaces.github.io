<template>
  <MainNav />
  <!-- <SkwCarousel /> -->
  <div class="art-deco-border">
    <!-- Your content here -->
    <h1>Art Deco Border Example</h1>
    <p>This is an example of an Art Deco-style border created with CSS.</p>
    <div class="corner-circle top-left">
      <div class="corner-circle top-left"></div>
    </div>
    <div class="corner-circle top-right">
      <div class="corner-circle top-right"></div>
    </div>
    <div class="corner-circle bottom-left">
      <div class="corner-circle bottom-left"></div>
    </div>
    <div class="corner-circle bottom-right">
      <div class="corner-circle bottom-right"></div>
    </div>
  </div>
</template>

<script setup>
// import SkwCarousel from "../components/SkwCarousel.vue";

import MainNav from "../components/Nav.vue";
</script>

<style>
.art-deco-border {
  position: relative;
  width: 500px; /* Adjust width as needed */
  height: 200px; /* Adjust height as needed */
  border: 4px solid #000;
  background-color: #fff; /* Optional */
}

.corner-circle {
  position: absolute;
  width: 50px; /* Diameter of the circles */
  height: 50px; /* Diameter of the circles */
  background-color: #fff;
  border-radius: 50%; /* Makes the element a circle */
  border: 4px solid #000;
}

.top-left {
  top: -25px; /* Half the circle height */
  left: -25px; /* Half the circle width */
}

.top-right {
  top: -25px; /* Half the circle height */
  right: -25px; /* Half the circle width */
}

.bottom-left {
  bottom: -25px; /* Half the circle height */
  left: -25px; /* Half the circle width */
}

.bottom-right {
  bottom: -25px; /* Half the circle height */
  right: -25px; /* Half the circle width */
}
</style>
