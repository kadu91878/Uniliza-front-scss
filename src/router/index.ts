import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarSelectionView from '../views/CarSelectionView.vue'
import TesteViewVue from '@/views/TesteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/car-section',
      name:'car-section',
      component: CarSelectionView
    },
    {
      path: '/teste',
      name: 'teste',
      component: TesteViewVue
    }

  ]
})

export default router
