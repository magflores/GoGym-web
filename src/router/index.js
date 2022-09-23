import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
