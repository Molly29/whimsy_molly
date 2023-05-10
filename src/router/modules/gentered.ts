import type { RouteRecordRaw } from 'vue-router';
import { RouteName } from '@/router/router';

const routes: RouteRecordRaw[] = [
  {
    path: '/gentered/gentered-column',
    name: RouteName.GenteredColumn,
    component: () => import('@/views/gentered/GenteredColumn.vue'),
  },
  {
    path: '/gentered/gentered-row',
    name: RouteName.GenteredRow,
    component: () => import('@/views/gentered/GenteredRow.vue'),
  },
  {
    path: '/gentered/gentered-all',
    name: RouteName.GenteredAll,
    component: () => import('@/views/gentered/GenteredAll.vue'),
  },
];

export default routes;
