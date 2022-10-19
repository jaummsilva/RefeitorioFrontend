import { createRouter, createWebHistory } from 'vue-router'
import CardapioDay from '../views/CardapioDay.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'CardapioDay',
      component: CardapioDay
    }
  ]
})

export default router
