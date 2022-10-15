import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueResource from 'vue-resource';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { createPinia, PiniaVuePlugin } from 'pinia'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()
Vue.use(VueCompositionAPI)

Vue.use(VueResource);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  pinia,
  render: h => h(App)
}).$mount('#app')
