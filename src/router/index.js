import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Products from '../components/Products.vue'
import Cart from '../components/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    // Add more routes as needed
    {
      path: '/about',
      name: 'about',
      // Example: Lazy load the About component
      component: () => import('../views/AboutView.vue')
    },
  ]
})

export default router

