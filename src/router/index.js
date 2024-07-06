import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Beranda',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Home.vue')
    },
    {
      path: '/jadwal',
      name: 'Jadwal',
      component: () => import('../views/Schedule.vue')
    },
    {
      path: '/masuk',
      name: 'Masuk',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/daftar',
      name: 'Daftar',
      component: () => import('../views/Register.vue')
    }
  ]
})

export default router
