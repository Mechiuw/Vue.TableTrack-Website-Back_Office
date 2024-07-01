import Vue from 'vue';
import VueRouter from 'vue-router'

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

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router