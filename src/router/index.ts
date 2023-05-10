import { defineAsyncComponent } from 'vue';
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  type Router,
  type RouteRecordRaw,
} from 'vue-router';
import AppMain from '../views/AppMain.vue';

const paths = new Set<string>();
const modules = import.meta.glob('./modules/*.ts');

const loadModules = async () => {
  for (const path of Object.keys(modules)) {
    const rts = (await modules[path]()).default as RouteRecordRaw[];
    rts.forEach((item) => {
      const path = item.path;
      if (paths.has(path)) {
        throw new Error('path have');
      } else {
        paths.add(path);
        children.push(item);
      }
    });
  }
  console.log('children', children);
};

const children = [] as RouteRecordRaw[];
loadModules();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'appMain',
      component: AppMain,
      children,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router;
