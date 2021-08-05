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
        component: () => import('/@/pages/index/index.vue')
    },
    {
        path: '/content',
        component: () => import('/@/pages/content/index.vue'),
        redirect: () => {
            return { path: '/home' };
        },
        children: [
            {
                path: '/home',
                component: () => import('/@/pages/home/index.vue')
            },
            {
                path: '/blog',
                component: () => import('/@/pages/blog/index.vue')
            },
            {
                path: '/project',
                component: () => import('/@/pages/project/index.vue')
            }
        ]
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
