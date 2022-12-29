import { createRouter, createWebHistory } from 'vue-router'
import Register from "../views/Register.vue"
import Login from "../views/Login.vue"
import Cookies from 'js-cookie'
import Home from "../views/HomeView.vue"
import SingleProduct from "../views/SingleProduct.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Cookies.get("token") ? Home : Register,
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/single/:id",
      name: "singleProduct",
      component: SingleProduct,
    }
  ]
})

export default router
