import { createRouter, createWebHistory } from 'vue-router'
import IndexView from "../views/Index.vue"

// import ProfileVue from '@/views/Profile.vue'
// import PortfolioVue from '../views/Portfolio.vue'
import ProjectVue from '../views/Project.vue'
import Projects from '@/views/Projects.vue'

// import Experience from '@/components/Experience.vue'
// import SkwCarousel from '@/components/SkwCarousel.vue'

// Route
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: IndexView,
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
            props: true,
        },
        {
            path: "/projects/",
            name: "projects",
            component: Projects
        },
        // {
        //     path: "/experience/",
        //     name: "experience",
        //     component:  Experience,
        // },
       
     
    ]
})

export default router