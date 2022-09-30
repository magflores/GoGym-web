import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Footer from "@/components/Footer";
import RoutinesView from "@/views/RoutinesView";
import JoinUsView from "@/views/JoinUsView";
import LogInView from "@/views/LogInView";
import RoutineDetailedView from "@/views/RoutineDetailedView";
import ProfileView from "@/views/ProfileView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: 'home',
    name: 'home',
    component: HomeView
  },
  {
    path: "/notfound",
    alias: "*",
    name: "NotFound",
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
  },
  {
    path: '/Settings',
    name: 'SettingsView',
    alias: 'SettingsView',
    component: () => import(/* webpackChunkName: "JoinUsView" */ '../views/SettingsView.vue')
  },
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
        path: '/routines',
        name: 'routines',
        component: RoutinesView
    },
    {
        path: '/register',
        name: 'register',
        component: JoinUsView
    },
    {
        path: '/login',
        name: 'login',
        component: LogInView
    },
    {
        path: '/profile',
        component: ProfileView,
        name: 'profile',
    },
    {
        path: '/routinedetailed',
        name: 'routinedetailed',
        component: RoutineDetailedView
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
