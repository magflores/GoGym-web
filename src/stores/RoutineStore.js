import {defineStore} from "pinia";
import {RoutineApi} from "@/api/routine";

export const useRoutineStore = defineStore("routine", {
    state: () => ({
        routines: [],
    }),
    getters: {
        findIndex() {
            return (routine) => {
                return this.routines.findIndex(item => item.id === routine.id);
            }
        }
    },
    actions: {
        push(routine) {
            this.routines.push(routine);
        },
        replace(index, routine) {
            this.routines[index] = routine;
        },
        splice(index) {
            this.routines.splice(index, 1);
        },
        async create(routine) {
            const result = await RoutineApi.addRoutine(routine);
            if (!this.findIndex(result))
                this.push(result);
            return result;
        },
        async modify(routine) {
            const result = await RoutineApi.modifyRoutine(routine);
            const index = this.findIndex(result);
            if (index >= 0)
                this.replace(index, result);
            return result;
        },
        async delete(routine) {
            await RoutineApi.deleteRoutine(routine.id);
            const index = this.findIndex(routine);
            if (index >= 0)
                this.splice(index);
        },
        async get(routine) {
            const index = this.findIndex(routine);
            if (index >= 0)
                return this.routines[index];

            const result = await RoutineApi.getRoutine(routine.id);
            this.push(result);
            return result;
        },
        async search(categoryId, userId, difficulty, score, search, page, size, orderBy, direction, controller) {
            return await RoutineApi.getRoutines(categoryId, userId, difficulty, score, search, page, size, orderBy, direction, controller);
        },
        async getAll(controller) {
            return await RoutineApi.getAll(controller);
        },
        async getAllFavorites(controller) {
            return await RoutineApi.getAllFavorites(controller);
        },
        async addFavorite(routine) {
            await RoutineApi.addFavorite(routine.id);
        },
        async removeFavorite(routine) {
            await RoutineApi.removeFavorite(routine.id);
        }
    }
});