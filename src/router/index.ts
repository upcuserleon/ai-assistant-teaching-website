import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "@/views/LoginPage.vue";
import MainPage from "@/views/MainPage.vue";
import CoursePage from "@/views/CoursePage.vue";
import LogoutPage from "@/views/LogoutPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:"/", component: MainPage},
    {path: "/login", component: LoginPage},
    {path: "/logout", component: LogoutPage},
    {path:"/course/:id", component:CoursePage}
  ]
})

export default router
