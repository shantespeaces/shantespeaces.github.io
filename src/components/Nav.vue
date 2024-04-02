<template>
  <nav>
    <div class="nav-container">
      <div class="brand">
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
          <router-link
            data-name="home"
            :to="{ name: 'home' }"
            @click="toggleMenu"
            >Home</router-link
          >
        </li>

        <li class="menu-item">
          <router-link
            data-name="projects"
            :to="{ name: 'projects' }"
            @click="toggleMenu"
          >
            Projects</router-link
          >
        </li>
        <router-link
          :to="{ name: 'home', hash: '#about' }"
          @click="toggleMenu"
          class="menu-item"
          >about</router-link
        >
        <router-link
          :to="{ name: 'home', hash: '#experience' }"
          @click="toggleMenu"
          class="menu-item"
          >Experience</router-link
        >
        <router-link
          :to="{ name: 'home', hash: '#references' }"
          @click="toggleMenu"
          class="menu-item"
          >References</router-link
        >
        <router-link
          :to="{ name: 'home', hash: '#portfolio' }"
          @click="toggleMenu"
          class="menu-item"
          >portfolio</router-link
        >
        <li class="menu-item"><a :href="emailLink">Contact</a></li>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import ScrollingAnimation from "../components/ScrollingAnimation.vue";
import { defineProps } from "vue";

const props = defineProps({});
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
const emailAddress = "shantespeaces@gmail.com";
const subject = "";
const body = "";
const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
  subject
)}&body=${encodeURIComponent(body)}`;
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
  background-clip: text;
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
  width: 100%;
  opacity: 1;
}

.menu-item,
.menu-item a,
.close-icon {
  padding-bottom: 2em;
  font-family: "Poiret One", sans-serif;
  text-transform: uppercase;
  background-image: var(--goldToRightDark);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  letter-spacing: 4px;
  font-weight: bold;
  transition: font-size 0.5s;
  transform: scale(1.2);
  cursor: pointer;
}
.menu-item:hover,
.close-icon:hover {
  font-size: 2.5em;
}
.menu-item a:hover {
  font-size: 1em;
}
.menu-item,
.close-icon {
  font-size: 2em;
}
.menu-item {
  /* height: 6em; */
  display: inline-block;
}
.close-icon {
  padding-bottom: 0;
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
</style>
