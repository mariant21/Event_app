import { createRouter, createWebHistory } from 'vue-router'
import Home from "./../views/Home.vue";
import Login from "../auth/LoginPage.vue";


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
