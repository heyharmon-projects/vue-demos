import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'algolia',
    component: () => import('../views/Algolia.vue')
  },
  {
    path: '/fuze',
    name: 'fuze',
    component: () => import('../views/Fuze.vue')
  },
  {
    path: '/algolia-fuze',
    name: 'algolia-fuze',
    component: () => import('../views/AlgoliaFuze.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
