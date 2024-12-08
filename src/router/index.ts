import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'uploadImageTest' }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue')
    },
    {
      path: '/uploadImageTest',
      name: 'uploadImageTest',
      component: ()=> import('@/views/UploadImageTest.vue')
    }
  ],
})

export default router
