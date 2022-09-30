import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    isLoggedIn: false,
  },
  getters: {
    isLoggedIn(state){
      return state.isLoggedIn
    },
  },
  mutations: {
    setIsLoggedIn(state, bool){
      state.isLoggedIn = bool;
    },

  },
  modules: {
    user,
  }

})
