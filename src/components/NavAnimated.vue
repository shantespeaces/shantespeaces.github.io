<template>
  <nav>
    <div class="nav-container">
      <div class="brand">
        <!-- <img class="logo" src="/images/artDeco3.jpg" alt="" /> -->
        <router-link
          data-name="accueil"
          class="navbar-brand"
          :to="{ name: 'accueil' }"
        >
          Shanté
        </router-link>
      </div>
      <ScrollingAnimation />

      <button
        @click="toggleMenu"
        class="hamburger"
        :class="{ 'is-active': isOpen }"
      >
        <span v-if="!isOpen" class="bar"></span>
        <span v-if="!isOpen" class="bar"></span>
        <span v-if="!isOpen" class="bar"></span>
        <span v-if="isOpen" class="close-icon">X</span>
      </button>
    </div>

    <ul v-if="isOpen" class="menu">
      <li class="menu-item">
        Home
        <!-- <router-link data-name="accueil" :to="{ name: 'accueil' }"
          >Home</router-link
        > -->
      </li>
      <li class="menu-item">
        Portfolio
        <!-- <router-link data-name="portfolio" :to="{ name: 'portfolio' }"
          >Portfolio</router-link
        > -->
      </li>
      <li class="menu-item">
        Contact
        <!-- <router-link data-name="contact" :to="{ name: 'contact' }"
          >Contact</router-link
        > -->
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import ScrollingAnimation from "../components/ScrollingAnimation.vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style>
nav {
  background-color: #feddcf;
  box-shadow: 8px -8px 15px #bca399, -8px -8px 15px #feddcf;
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  bottom: 1rem;
}
.nav-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1.6em;
  padding-bottom: 1.6em;
}
.brand {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a.navbar-brand {
  font-family: "parkLane", sans-serif;
  text-transform: uppercase;
  background-image: var(--goldToRightDark);
  color: transparent;
  -webkit-background-clip: text;
  font-size: 2rem;
  letter-spacing: 4px;
  font-weight: bold;
}
.logo {
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  margin-right: 1em;
}
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3em;
  height: 2.5em;
  cursor: pointer;
  border: none;
  background: transparent;
  padding: 0;
}

.bar {
  width: 3em;
  height: 0.2rem;
  background-image: var(--goldToRightYellow);
  color: transparent;
}
.bar:hover {
  color: black;
}
.menu {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1em 10em;
  border-top: solid 2px;
  border-image: var(--goldToRight) 1;
  border-image-slice: 1;
}

.menu li {
  margin-bottom: 10px;
  font-family: "Poiret One", sans-serif;
  text-transform: uppercase;
  background-image: var(--goldToRightDark);
  color: transparent;
  -webkit-background-clip: text;
  font-size: 1.6rem;
  letter-spacing: 4px;
  font-weight: bold;
}
.menu li:hover {
  color: black;
}
.close-icon {
  font-size: 2rem;
  background-image: var(--goldToRightDark);
  -webkit-background-clip: text;
  color: transparent;
  font-family: "parkLane", sans-serif;
}
.close-icon:hover {
  color: black;
}
@media screen and (max-width: 1200px) {
  a.navbar-brand {
    font-size: 1.3rem;
  }
}
@media screen and (max-width: 768px) {
  a.navbar-brand {
    font-size: 1.6rem;
  }
}
@media screen and (max-width: 576px) {
  .menu {
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    background-size: 55em;
    background-position: right;
    background-image: url("/images/feather.png");
  }
  .menu li {
    padding-bottom: 2em;
    font-size: 3rem;
  }
  .close-icon {
    font-size: 3rem;
    background-image: var(--goldToRightYellow);
    -webkit-background-clip: text;
    color: transparent;
  }
}
</style>
