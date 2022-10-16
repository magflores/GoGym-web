import {defineStore} from "pinia";
import {RoutineApi} from "@/api/routine";
import {CycleApi} from "@/api/cycle";

export const useCycleStore = defineStore("cycle", {
    state: () => ({
        cycles: [],
    }),
    getters: {
        findIndex() {
            return (cycle) => {
                return this.cycles.findIndex(item => item.id === cycle.id);
            }
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
        async addCycleExercise(cycleId, exerciseId, cycleExercise) {
            return await CycleApi.addExercise(cycleId, exerciseId, cycleExercise);
        },
        async modifyCycleExercise(cycleId, exerciseId, cycleExercise) {
            return await CycleApi.modifyExercise(cycleId, exerciseId, cycleExercise);
        },
        async deleteCycleExercise(cycleId, exerciseId) {
            return await CycleApi.deleteExercise(cycleId, exerciseId);
        },
        async create(routineId, cycle, cycleExercises) {
            const result = await RoutineApi.addCycle(routineId, cycle);
            for (const exercise in cycleExercises) {
                await this.addCycleExercise(result.id, exercise.id, exercise);
                // TODO error handling
            }
            if (!this.findIndex(result))
                this.push(result);
            return result;
        },
        async modify(routineId, cycleId, newCycle, exercises) {
            const result = await RoutineApi.modifyCycle(routineId, cycleId, newCycle);
            for (const exercise in exercises) {
                if (exercise.id === undefined) {
                    await this.addCycleExercise(result.id, exercise.id, exercise);
                } else {
                    await this.modifyCycleExercise(result.id, exercise.id, exercise);
                }
                // TODO error handling
            }
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
            return await RoutineApi.getAllCycles(routineId);
        },
    }
});
