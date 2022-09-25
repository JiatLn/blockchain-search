import type { RouteRecordRaw } from 'vue-router'
import Home from '@/pages/Home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home',
    },
  },
]

export default routes
