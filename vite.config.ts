/*
 * @Author: cc
 * @Date: 2021-07-08 16:58:42
 * @Last Modified by: cc
 * @Last Modified time: 2021-07-08 17:11:37
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: [
            {
                find: /\/@\//,
                replacement: process.cwd() + '/src/'
            },
            {
                find: /\/@components\//,
                replacement: process.cwd() + '/src/components/'
            }
        ]
    }
});
