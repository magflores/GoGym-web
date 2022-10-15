import {defineStore} from "pinia";

export const useRouterStore = defineStore("router", {
    state: () => ({
        finalRoute: null,
    }),
    getters: {
        getFinalRoute() {
            let aux = this.finalRoute;
            this.finalRoute = null;
            return aux;
        }
    },
    actions: {
        setFinalRoute(route) {
            this.finalRoute = route;
        }
    }
});
