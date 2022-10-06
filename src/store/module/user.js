import {defineStore} from 'pinia'

export const useStore = defineStore("store", {
    state: {
        name: '',
        isLoggedIn: false,
    },

    getters: {
        isLoggedIn(state){
            return state.isLoggedIn
        },
        getName(state){
            return state.name;
        },

    },

    actions: {                                      //traer los prod de la api y actualizar el estado
        // update({dispatch}, {user}) {
        //     if (user) {
        //         dispatch("updateId", {user: user});
        //     } else {
        //         dispatch("removeId");
        //     }
        // },
        // async updateId({commit}, {user}) {
        //     localStorage.setItem("USER", user.uid);
        //     commit('user/setIsLoggedIn', true);
        // },

        setIsLoggedIn({commit}, bool) {
            commit("setIsLoggedIn", bool);
        },
        // removeId({commit}) {
        //     localStorage.removeItem("USER");
        //     commit("setId", null);
        //     commit('user/setIsLoggedIn', false);
        // },

    },

})

