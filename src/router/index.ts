/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      
      component: () => import('@/pages/index.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/pages/about.vue'),
    },
  ],
})

export default router