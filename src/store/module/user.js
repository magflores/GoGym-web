
export default {
    namespaced: true,
    state: {
        name: '',
        isLoggedIn: false,
    },
    getters: {
        isUserLoggedIn(state) {
            return state.isLoggedIn;
        },
        getName(state){
            return state.name;
        },

    },
    mutations: {
        setIsLoggedIn(state, bool){
          state.isLoggedIn = bool;
        },

        setName(state, name){
            state.name = name;
        },
    },

    actions: {
        update({dispatch}, {user}) {
            if (user) {
                dispatch("updateId", {user: user});
            } else {
                dispatch("removeId");
            }
        },
        async updateId({commit}, {user}) {
            localStorage.setItem("USER", user.uid);
            commit('user/setIsLoggedIn', true);
        },

        setIsLoggedIn({commit}, bool) {
            commit("setIsLoggedIn", bool);
        },
        removeId({commit}) {
            localStorage.removeItem("USER");
            commit("setId", null);
            commit('user/setIsLoggedIn', false);
        },

    },


}