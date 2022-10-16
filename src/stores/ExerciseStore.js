import {defineStore} from "pinia";
import {ExerciseApi} from "@/api/exercise";

export const useExerciseStore = defineStore("exercise", {
    state: () => ({
        exercises: [],
    }),
    getters: {
        findIndex() {
            return (exercise) => {
                return this.exercises.findIndex(item => item.id === exercise.id)
            }
        }
    },
    actions: {
        push(exercise) {
            this.exercises.push(exercise);
        },
        replace(index, exercise) {
            this.exercises[index] = exercise;
        },
        splice(index) {
            this.exercises.splice(index, 1);
        },
        async create(exercise) {
            const result = await ExerciseApi.addExercise(exercise);
            if (!this.findIndex(result))
                this.push(result);
            return result;
        },
        async modify(exercise) {
            const result = await ExerciseApi.modifyExercise(exercise.id,
                {name: exercise.name,
                detail: exercise.detail,
                type: exercise.type,
                metadata: exercise.metadata});
            const index = this.findIndex(result);
            if (index >= 0)
                this.replace(index, result);
            return result;
        },
        async delete(exercise) {
            await ExerciseApi.deleteExercise(exercise.id);
            const index = this.findIndex(exercise);
            if (index >= 0)
                this.splice(index);
        },
        async get(exercise) {
            const index = this.findIndex(exercise);
            if (index >= 0)
                return this.exercises[index];

            console.log(`Loading exercise ${exercise.id}`);
            const result = await ExerciseApi.getExercise(exercise.id);
            this.push(result);
            return result;
        },
        async search(search, page, size, orderBy, direction, controller) {
            return await ExerciseApi.getExercises(search, page, size, orderBy, direction, controller);
        },
        async getAll(controller) {
            return await ExerciseApi.getAll(controller);
        }
    }
});