<template>
  <nav>
    <div class="nav-container">
      <div class="brand">
        <!-- <img class="logo" src="/images/artDeco3.jpg" alt="" /> -->
        <router-link
          data-name="home"
          class="navbar-brand"
          :to="{ name: 'home' }"
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
    <transition name="slide">
      <ul v-if="isOpen" class="menu">
        <li class="menu-item">
          <router-link data-name="home" :to="{ name: 'home' }"
            >Home</router-link
          >
        </li>
        <!-- <li class="menu-item">
          <router-link data-name="Experience" :to="{ name: 'experience' }"
            >Experience</router-link
          >
        </li> -->
        <li class="menu-item">
          <router-link data-name="projects" :to="{ name: 'projects' }">
            Projects</router-link
          >
        </li>
        <li class="menu-item">
          Contact
          <!-- <router-link data-name="contact" :to="{ name: 'contact' }"
          >Contact</router-link
        > -->
        </li>
      </ul>
    </transition>
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
  background-color: white;
  box-shadow: -5px -5px 8px #13131344, 5px -5px 8px rgba(48, 48, 48, 0.452);
  position: fixed;
  top: 0;
  margin: auto;
  z-index: 1000;
  width: 100%;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 2em;
}
.brand {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a.navbar-brand {
  font-family: "Poiret One", sans-serif;
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
  border-top: solid 2px;
  border-bottom: solid 2px;
  border-image: var(--goldToRight) 1;
  border-image-slice: 1;
  height: 100vh;
  justify-content: center;
  background-size: 55em;
  background-position: right;
  background-image: url("/images/artDeco/feather4.png");
  flex-direction: column;
  position: fixed;
  top: 5em;
  width: 100%;
  opacity: 1;
}

.menu li {
  margin-bottom: 2em;
  font-family: "Poiret One", sans-serif;
  text-transform: uppercase;
  background-image: var(--goldToRightDark);
  color: transparent;
  -webkit-background-clip: text;
  font-size: 2em;
  letter-spacing: 4px;
  font-weight: bold;
}
.menu li:hover {
  color: black;
  text-decoration: underline;
}
.close-icon {
  font-size: 2rem;
  background-image: var(--goldToRightDark);
  -webkit-background-clip: text;
  color: transparent;
  font-family: "Poiret One", sans-serif;
}
.close-icon:hover {
  color: black;
}
.slide-leave-active {
  animation: slideOut 1.8s ease-in-out forwards;
}
@keyframes slideOut {
  0% {
    opacity: 1;
  }

  85% {
    opacity: 0.9;
  }

  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
}
.slide-enter-active {
  animation: slideIn 1.5s ease-in-out backwards;
}
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
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
  .menu {
    top: 4.5em;
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
