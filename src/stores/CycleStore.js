import {defineStore} from "pinia";
import {RoutineApi} from "@/api/routine";

export const useCycleStore = defineStore("cycle", {
    state: () => ({
        cycles: [],
    }),
    getters: {
        findIndex(cycle) {
            return this.cycles.findIndex(c => c.id === cycle.id);
        }
    },
    actions: {
        push(cycle) {
            this.cycles.push(cycle);
        },
        replace(index, cycle) {
            this.cycles[index] = cycle;
        },
        splice(index) {
            this.cycles.splice(index, 1);
        },
        async create(routineId, cycle) {
            const result = await RoutineApi.addCycle(routineId, cycle);
            if (!this.findIndex(result))
                this.push(result);
            return result;
        },
        async modify(routineId, cycleId, newCycle) {
            const result = await RoutineApi.modifyCycle(routineId, cycleId, newCycle);
            const index = this.findIndex(result);
            if (index >= 0)
                this.replace(index, result);
            return result;
        },
        async delete(routineId, cycleId) {
            await RoutineApi.deleteCycle(routineId, cycleId);
            const index = this.findIndex(cycleId);
            if (index >= 0)
                this.splice(index);
        },
        async getAll(routineId) {
            return await RoutineApi.getCycles(routineId);
        }
    }
});
