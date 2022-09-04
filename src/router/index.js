import { createRouter, createWebHistory } from 'vue-router'
import Home from "./../views/Home.vue";
import LoginPage from "../auth/LoginPage.vue";
import RegisterPage from "../auth/RegisterPage.vue"


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
    component: LoginPage,
  },
  {
    path: "/register",
    component: RegisterPage
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
