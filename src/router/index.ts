import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Sitemap from '../views/Sitemap.vue'
import Crawler from '../views/Crawler.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/companies/:company/sitemap',
    name: 'Sitemap',
    component: Sitemap,
    props: true
  },
  {
    path: '/companies/:company/crawler',
    name: 'Crawler',
    component: Crawler,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes
})

export default router
