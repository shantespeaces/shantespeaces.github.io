import { createRouter, createWebHistory } from 'vue-router'
import IndexView from "../views/Index.vue"

// import ProfileVue from '@/views/Profile.vue'
// import PortfolioVue from '../views/Portfolio.vue'
import ProjectVue from '../views/Project.vue'
import Projects from '@/views/Projects.vue'

import About from '@/components/About.vue'
import Experience from '@/components/Experience.vue'
import Portfolio from '@/components/Portfolio.vue'
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
            // Default route for projects with ID 0
            path: '/project/',
            name: "projects",
            redirect: '/project/0'
          },
        {
            path: "/about",
            name: "about",
            component: About,
        },
        {
            path: "/experience",
            name: "experience",
            component: Experience,
        },
        {
            path: "/portfolio",
            name: "portfolio",
            component: Portfolio,
        },
       
     
    ],
    scrollBehavior(to, _from, savedPosition) {
        console.log("Destination route:", to.name);
        if (to.hash) {
            // Return a selector to scroll to the element with the corresponding ID
            return { el: to.hash };
        } else if (to.name === 'experience' || to.name === 'about') {
            console.log("Scrolling to the top of the page...");
            // If navigating to "Experience" or "About", scroll to the top of the page
            return { el: to.hash};
        } else if (savedPosition) {
            // If a savedPosition is available, return it to scroll to the saved position
            return savedPosition;
        } else {
            // If no hash or saved position is available, scroll to the top of the page
            return { top: 0 };
        }
    }
    
})

export default router