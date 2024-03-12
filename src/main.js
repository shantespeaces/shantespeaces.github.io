import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { Swipe, SwipeItem } from 'vswipe'; 
import 'animate.css';


const app = createApp(App)

app.use(router)
// app.component('Swipe', Swipe) 
// app.component('SwipeItem', SwipeItem)

app.mount('#app')