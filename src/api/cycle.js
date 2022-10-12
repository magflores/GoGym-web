import {Api} from "./api.js";

export {CycleApi, Cycle, CycleExercise}

class CycleApi {
    static getUrl(cycleId, slug) {
        return `${Api.baseUrl}/cycles/${cycleId}/exercises${slug ? `/${slug}` : ""}`;
    }
    static async getExercises(cycleId, page, size, orderBy, direction, controller) {
        let url = CycleApi.getUrl(cycleId);
        url = `${url}?page=${page}&size=${size}&orderBy=${orderBy}&direction=${direction || "asc"}`;
        return await Api.get(url, true, controller);
    }

    static async getExercise(cycleId, exerciseId, controller) {
        return await Api.get(CycleApi.getUrl(cycleId, exerciseId), true, controller);
    }

    static async addExercise(cycleId, exerciseId, cycleExercise, controller) {
        return await Api.post(CycleApi.getUrl(cycleId, exerciseId), true, cycleExercise, controller);
    }

    static async modifyExercise(cycleId, exerciseId, cycleExercise, controller) {
        return await Api.put(CycleApi.getUrl(cycleId, exerciseId), true, cycleExercise, controller);
    }

    static async deleteExercise(cycleId, exerciseId, controller) {
        return await Api.delete(CycleApi.getUrl(cycleId, exerciseId), true, controller);
    }
}

class Cycle {
    constructor(id, name, detail, type, order, repetitions, metadata) {
        this.id = id;
        this.name = name;
        this.detail = detail;
        this.type = type;
        this.order = order;
        this.repetitions = repetitions;
        this.metadata = metadata;
    }
}

class CycleExercise {
    constructor(exercise, order, duration, repetitions) {
        this.exercise = exercise;
        this.order = order;
        this.duration = duration;
        this.repetitions = repetitions;
    }
}
