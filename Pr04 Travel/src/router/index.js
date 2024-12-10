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
      component: () => import('../views/DestinationsView.vue'),
      children: [
        {
          path: ':experienceSlug',
          name: 'Experience',
          component: () => import('../views/ExperiencesView.vue'),
        }
      ]
    } 
  ]
})

export default router
