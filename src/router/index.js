import { createRouter, createWebHistory } from 'vue-router'
import IndexView from "../views/Index.vue"

// import ProfileVue from '@/views/Profile.vue'
// import PortfolioVue from '../views/Portfolio.vue'
import ProjectVue from '../views/Project.vue'
import ProjetsVue from '../views/Projets.vue'

// Route
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "accueil",
            component: IndexView
        },
     
        // {
        //     path: "/portfolio",
        //     name: "portfolio",
        //     component: PortfolioVue
        // },
        {
            path: "/project/:id",
            name: "project",
            component: ProjectVue, 
        },
        {
            path: "/projets/",
            name: "projets",
            component: ProjetsVue, 
        },
       
     
    ]
})

export default router