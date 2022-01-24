import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home/index.vue';
import About from '@/views/About/index.vue';
import NotFound from '@/views/NotFound/index.vue';

export const routes: RouteRecordRaw[] = [
  { path: '/', alias: '/home', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/:pathMatch(.*)', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
