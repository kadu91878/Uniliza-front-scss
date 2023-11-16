import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarSelectionView from '../views/CarSelectionView.vue'
import TesteViewVue from '@/views/TesteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: HomeView
    },
    {
      path: '/home',
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

  ],
  // scrollBehavior: function (to) {
  //   if (to.hash) {
  //     return {
  //       selector: to.hash
  //     }
  //   }
  // },
})

export default router
