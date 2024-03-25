<template>
  <MainNav />
  <SkwCarousel />
  <!-- <div class="list-wrapper">
        <ProjetsListe :projets="filteredProjets" />
    </div> -->
</template>

<script setup>
import SkwCarousel from "../components/SkwCarousel.vue";
import MainNav from "../components/Nav.vue";

// import axios from 'axios'
// import ProjetsListe from '@/components/ProjetsListe.vue'
// import { ref, onBeforeMount, computed, watch } from 'vue'
// import { useRouter } from 'vue-router'

// const projets = ref([])
// const router = useRouter()
// const routeId = ref(0) // Default route id value
// // const selectedProject = ref({})

// onBeforeMount(() => {
//     axios('/src/projects.json').then((response) => {
//         projets.value = response.data
//         updateFilteredProjets()
//     })
// })

// watch(() => router.currentRoute, () => {
//     updateFilteredProjets()
// })

// const updateFilteredProjets = () => {
//     const id = parseInt(router.currentRoute.value.params.id, 10) || 0
//     routeId.value = id

//     // selectedProject.value = projets.value.find(proj => proj.type === getTypeFromId(routeId.value)) || {}
//     // console.log(selectedProject.value)

// }

// const filteredProjets = computed(() => {
//     const targetTypes = getTypeFromId(routeId.value)
//     return projets.value.filter((projets) => targetTypes.includes(projets.type))
// })

// const getTypeFromId = (id) => {
//     switch (id) {
//         case 0:
//             return ['code']
//         case 1:
//             return ['design']
//         case 2:
//             return ['video']
//         default:
//             return []
//     }
// }
</script>

<style></style>
