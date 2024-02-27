import { createApp, nextTick } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import routes from './routes';
import './assets/css/style.css';
import './assets/css/icons.css';

const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.afterEach((to, _) => {
    nextTick(() => {
        document.title = (to.meta.title as string) ?? "DineEase";
    });
});
const app = createApp(App);
app.use(router);
app.mount('#app');
