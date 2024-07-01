import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../login/Login.vue';
import Dashboard from '../dashboard/Dashboard.vue';

const BASE_URL = '/auth/login';
const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: Login
  }
];

const router = createRouter({
  history: createWebHashHistory(BASE_URL),
  routes
});

export default router;