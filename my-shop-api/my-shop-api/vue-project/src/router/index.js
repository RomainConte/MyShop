import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import admin from '../views/admin.vue'
import login from '../views/login2.vue'
import register from '../views/register.vue'
import products from '../views/products.vue'
import users from '../views/users.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/products',
      name: 'products',
      component: products
    }
    ,
    {
      path: '/users',
      name: 'users',
      component: users
    }
  ]
})

export default router