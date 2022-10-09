import { defineStore } from "pinia";
import { UserApi } from "@/api/user";
import { Api } from "@/api/api";

export const useUserStore = defineStore("user", {
    state: () => ({
        user: null,
        token: null
    }),
    getters: {
        isLoggedIn() {
            return this.token != null;
        },
    },
    actions: {
        setUser(user) {
            this.user = user;
        },
        setToken(token) {
            this.token = token;
            Api.token = token;
        },
        removeToken(){
            this.setToken(null);
        },
        async login(credentials) {
            const result = await UserApi.login(credentials);
            this.setToken(result.token);
        },
        async logout() {
            await UserApi.logout();
            this.removeToken();
        },
        async getCurrentUser() {
            if (this.user)
                return this.user;

            const result = await UserApi.get();
            this.setUser(result);
        }
    }
});