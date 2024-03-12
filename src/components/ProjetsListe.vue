<template>
  <MainNav />
  <!-- <h1 class="liste">School project</h1> -->

  <div class="details-card-list container">
    <div
      class="details-card-container"
      v-for="projet in projets"
      :key="projet.id"
    >
      <div class="wrapper-image container">
        <img class="image-fluid" :src="projet.cardImage" width="150px" alt="" />
      </div>
      <div class="project-info">
        <h2 class="project-title">{{ projet.title }}</h2>
        <p class="description my-3 mx-3 py-3 px-3">
          {{ projet.description }}
        </p>
        <router-link class="lien-show" :to="{ name: 'project' }">
          {{ projet.type }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import MainNav from "../components/Nav.vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  projets: {
    type: Array,
    default: () => [],
  },
});
</script>

<style>
.details-card-list {
  display: flex;
  width: 100%;
  position: relative;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100vh;
  align-items: center;
  margin-top: 5em;
}

.details-card-container {
  width: 25rem;
  height: 45rem;
  background-color: black;
  /* min-width: 300px; */
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 25px;
  margin-top: 50px;
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.082),
    -6px -6px 10px rgba(255, 255, 255, 0.37);
}

.wrapper-image {
  width: 185px;
  height: 185px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #fff7f2;
  box-shadow: 5px 5px 10px #e0d9d5, -5px -5px 10px #ffffff;
  border-radius: 50%;
  margin-bottom: 100px;
}

.details-card-container img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  object-position: center;
}

.description {
  font-size: 12px;
  margin: 3em;
}

.neumorphisme1,
.neumorphisme2,
.neumorphisme3,
.neumorphisme4,
.neumorphisme5,
.neumorphisme6,
.neumorphisme7,
.neumorphisme8,
.neumorphisme9,
.neumorphisme10,
.neumorphisme11,
.neumorphisme12 {
  position: absolute;
  /* z-index: 1; */
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background: linear-gradient(315deg, #333436, #2b2c2d);
  box-shadow: -16px -16px 33px #222223, 16px 16px 33px #3e4041;
}
.neumorphisme13,
.neumorphisme14,
.neumorphisme15,
.neumorphisme16,
.neumorphisme17,
.neumorphisme18,
.neumorphisme19,
.neumorphisme20 {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background: #303132;
  box-shadow: 16px 16px 33px #222223, -16px -16px 33px #3e4041;
}

.neumorphisme21,
.neumorphisme22,
.neumorphisme23,
.neumorphisme24,
.neumorphisme25,
.neumorphisme26,
.neumorphisme27,
.neumorphisme21,
.neumorphisme28,
.neumorphisme29,
.neumorphisme30 {
  position: absolute;
  /* z-index: 1; */
  width: 100px;
  height: 100px;

  border-radius: 8px;
  background: linear-gradient(145deg, #272829, #202122);
  box-shadow: 14px 14px 28px #131414, -14px -14px 28px #353638;
}

a.lien-show {
  width: 150px;
  text-decoration: none;
  color: rgb(37, 40, 87);
  text-transform: uppercase;
  padding: 5px 75px;
  border-radius: 25px;
  font-family: "Bebas Neue";
  font-size: 25px;
  background: #fff7f2;
  box-shadow: 5px 5px 10px #c7c7c7, -5px -5px 10px #f9f9f9;
  transition: 0.2s ease-in-out;
}

a.lien-show:hover {
  background: white;
  color: rgb(37, 40, 87);
}

h2.project-title {
  font-size: 30px;
  margin-top: -150px;
  color: rgb(37, 40, 87);
}
</style>
