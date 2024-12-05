import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/destination/:id',
      name: 'Destinations',
      component: () => import('../views/DestinationsView.vue')
    },
    {
      path: '/detailDestination/:id',
      name: 'DetailDestinationView',
      component: () => import('../views/DetailDestinationView.vue')
    },
  ]
})

export default router
