import { createRouter, createWebHistory } from 'vue-router';
import Login from '../login/Login.vue';
import Dashboard from '../dashboard/Dashboard.vue';

const routes = [
  {
    path: '/',
    redirect: '/login', 
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  
    if (authRequired && !token) {
      // Redirect to login if not authenticated
      next('/login');
    } else {
      next();
    }
  });

export default router;
