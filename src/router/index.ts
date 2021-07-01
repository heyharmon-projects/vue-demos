import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    /**
     * Search
     * --------------
     */
    {
        path: '/',
        name: 'algolia',
        component: () => import('../views/search/Algolia.vue')
    },
    {
        path: '/fuze',
        name: 'fuze',
        component: () => import('../views/search/Fuze.vue')
    },
    {
        path: '/algolia-fuze',
        name: 'algolia-fuze',
        component: () => import('../views/search/AlgoliaFuze.vue')
    },

    /**
     * Content
     * --------------
     */
     {
         path: '/fuze/:kbid',
         name: 'fuze-item',
         component: () => import('../views/content/FuzeItem.vue')
     },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
