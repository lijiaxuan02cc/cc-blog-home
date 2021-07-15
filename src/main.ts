/*
 * @Author: cc
 * @Date: 2021-07-08 16:58:54
 * @Last Modified by:   cc
 * @Last Modified time: 2021-07-08 16:58:54
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import '../sass/index.scss';

const app = createApp(App);

app.use(router);
app.mount('#app');
