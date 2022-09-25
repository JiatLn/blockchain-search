import type { RouteRecordRaw } from 'vue-router'
import NotFound from '@/pages/Error/NotFound.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/404',
    name: '404',
    component: NotFound,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: '404',
    },
  },
]

export default routes
