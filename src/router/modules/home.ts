import type { RouteRecordRaw } from 'vue-router';
import { RouteName } from '@/router/router';

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: RouteName.Home,
    component: () => import('@/views/HomeView.vue'),
  },
];

export default routes;
