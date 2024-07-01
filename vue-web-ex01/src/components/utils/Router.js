import Vue from 'vue';
import VueRouter, { createRouter, createWebHashHistory } from 'vue-router'

import Login from '../login/Login.vue'
import Dashboard from '../dashboard/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'Dashboard',
        component : Dashboard
    },
    {
        path : '/auth/login',
        name : 'Login', 
        component : Login
    }
]

const router = createRouter({
    history : createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router