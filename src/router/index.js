import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Footer from "@/components/Footer";
import LogInView from '../views/LogInView.vue'
import JoinUsView from "@/views/JoinUsView";

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path:   '/footer',
        name: 'footer',
        component: Footer
    },
    {
        path: '/login',
        name: 'login',
        component: LogInView
    },
    {
        path: '/register',
        name: 'register',
        component: JoinUsView
    }
    // ,
    // {
    //     path: "/notfound",
    //     alias: "*",
    //     name: "NotFound",
    //     component: () => import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue")
    // }
]

const router = new VueRouter ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
