import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Footer from "@/components/Footer";
import RoutinesView from "@/views/RoutinesView";

Vue.use(VueRouter)
const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path:   '/footer',
        name: 'footer',
        component: Footer
    },
    {
        path: '/routines',
        name: 'routines',
        component: RoutinesView
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
