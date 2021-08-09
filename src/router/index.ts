/*
 * @Author: cc
 * @Date: 2021-07-08 16:59:03
 * @Last Modified by: C.C.
 * @Last Modified time: 2021-07-14 17:55:28
 */
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('/@/pages/index/index.vue'),
        children: [
            {
                path: '/home',
                component: () => import('/@/pages/home/index.vue')
            },
            {
                path: '/article',
                component: () => import('/@/pages/article/index.vue')
            },
            {
                path: '/share',
                component: () => import('/@/pages/share/index.vue')
            }
        ]
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
