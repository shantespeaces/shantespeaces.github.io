<template>
  <HeaderComponent />
  <!-- <NavAnimated /> -->
  <main class="profile">
    <About />

    <Experience />

    <section id="sticky-scrolling-text">
      <ScrollingText />
    </section>
    <div class="horizontal-scroll">
      <section>
        <HorizontalScroll />
      </section>
    </div>
    <section id="sticky-scrolling-text">
      <ScrollingText />
    </section>
    <section>
      <!-- <Portfolio /> -->
      <!-- <Card1Vue /> -->
    </section>
  </main>
  <References />
  <section id="sticky-scrolling-text">
    <ScrollingText />
  </section>
  <Portfolio />
  <footer>
    <FooterComponent />
  </footer>
</template>

<script setup>
// import NavAnimated from "./NavAnimated.vue";
import HorizontalScroll from "../components/HorizontalScroll.vue";
import ScrollingText from "../components/ScrollingText.vue";
import FooterComponent from "../components/FooterComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import About from "../components/About.vue";
import Experience from "../components/Experience.vue";
import References from "../components/References.vue";
import Portfolio from "../components/Portfolio.vue";
// import Card1Vue from "../components/Card1.vue";
</script>
<style>
body {
  background-color: white;
}

#sticky-scrolling-text {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}

/* #sticky-scrolling-text {
  top: 0px;
} */

h2,
h3 {
  font-family: "Poiret One", sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 4rem;
}

p,
q,
h6,
h1,
li {
  font-family: "champagne", sans-serif;
  font-size: 1.4rem;
  /* font-weight: bold; */
  /* letter-spacing: 1px; */
}
</style>
