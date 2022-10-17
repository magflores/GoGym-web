import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunckName: "home" */ '@/views/HomeView')
    },
    {
        path: '/footer',
        name: 'footer',
        component: () => import(/* webpackChunckName: "footer" */ '@/components/Footer')

    },
    {
        path: '/routines',
        name: 'routines',
        component: () => import(/* webpackChunckName: "routines" */ '@/views/RoutinesView')

    },
    {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunckName: "register" */ '@/views/JoinUsView')

    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunckName: "login" */ '@/views/LogInView')

    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunckName: "profile" */ '@/views/ProfileView')

    },
    {
        path: '/routinedetailed/:id',
        name: 'routinedetailed',
        component: () => import(/* webpackChunckName: "routineDetailed" */ '@/views/RoutineDetailedView')

    },
    {
        path: "/notfound",
        alias: "*",
        name: "NotFound",
        component: () => import("../views/NotFound.vue")
    },
    {
        path: "/comingsoon",
        name: "ComingSoon",
        component: () => import(/* webpackChunckName: "forgotPassword" */ '@/views/ComingSoonView')
    },
    {
    path: "/aboutus",
    name: "AboutUs",
    component: () => import(/* webpackChunckName: "forgotPassword" */ '@/views/AboutUsView')
    },
    {
        path: '/newroutine',
        name: 'newroutine',
        component: () => import(/* webpackChunckName: "routineDetailed" */ '@/views/NewRoutineView')

    },
    {
        path: '/newexercise',
        name: 'newexercise',
        component: () => import(/* webpackChunckName: "routineDetailed" */ '@/views/NewExerciseView')

    },
    {
        path: '/editroutine/:id',
        name: 'editroutine',
        component: () => import(/* webpackChunckName: "routineDetailed" */ '@/views/EditRoutineView')

    },
    {
        path: '/editexercise/:id',
        name: 'editexercise',
        component: () => import(/* webpackChunckName: "routineDetailed" */ '@/views/EditExerciseView')

    },
    {
        path: '/editexercise',
        component: () => import(/* webpackChunckName: "editexercise" */ '@/views/EditExerciseView')
    },
    {
        path: '/exercisedetailed/:id',
        name: 'exercisedetailed',
        component: () => import(/* webpackChunckName: "exerciseDetailed" */ '@/views/ExerciseDetailedView')

    },
    {
        path: '/verify/:email/:code',
        component: () => import(/* webpackChunckName: "verifyEmail" */ '@/views/VerificationView')
    },
    {
        path: '/verify',
        name: 'verifyEmail',
        component: () => import(/* webpackChunckName: "verifyEmail" */ '@/views/VerificationView')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
