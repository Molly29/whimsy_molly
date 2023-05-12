import { createRouter, createWebHistory } from 'vue-router';
import AppMain from '@/views/AppMain.vue';
import GenteredColumn from '@/views/gentered/GenteredColumn.vue';
import RowGentered from '@/views/gentered/RowGentered.vue';
import GenteredAll from '@/views/gentered/GenteredAll.vue';

// const paths = new Set<string>();
// const modules = import.meta.glob('./modules/*.ts');

// const loadModules = async () => {
//   for (const path of Object.keys(modules)) {
//     const rts = (await modules[path]()).default as RouteRecordRaw[];
//     rts.forEach((item) => {
//       const path = item.path;
//       if (paths.has(path)) {
//         throw new Error('path have');
//       } else {
//         paths.add(path);
//         children.push(item);
//       }
//     });
//   }
//   console.log('children', children);
// };

// const children = [] as RouteRecordRaw[];
// loadModules();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'appMain',
      component: AppMain,
      children: [
        { path: '/gentered/gentered-column', name: 'GenteredColumn', component: GenteredColumn },
        { path: '/gentered/gentered-row', name: 'GenteredRow', component: RowGentered },
        { path: '/gentered/gentered-all', name: 'GenteredAll', component: GenteredAll },
      ],
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
