import {defineStore} from "pinia";
import {UserApi} from "@/api/user";
import {Api} from "@/api/api";

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
        async initialize() {
            const token = sessionStorage.getItem("token");
            if (token) {
                this.setToken(token);
                await this.getCurrentUser();
            }
        },
        setUser(user) {
            this.user = user;
        },
        setToken(token) {
            this.token = token;
            Api.token = token;
            sessionStorage.setItem("token", token);
        },
        removeToken() {
            this.setToken(null);
        },
        async login(credentials) {
            const result = await UserApi.login(credentials);
            this.setToken(result.token);
            await this.getCurrentUser();
        },
        async logout() {
            await UserApi.logout();
            this.removeToken();
            this.user = null;
            sessionStorage.removeItem("token");
        },
        async getCurrentUser() {
            if (this.user != null)
                return this.user;

            const result = await UserApi.get();
            this.setUser(result);
            return this.user;
        },
        async register(credentials, userInfo) {
            return await UserApi.register(credentials, userInfo);
        },
        async modifyUser(userInfo, controller) {
            const result = await UserApi.modifyCurrentUser(userInfo, controller);
            // TODO error handling
            this.setUser(result);
            return result;
        }
    }
});