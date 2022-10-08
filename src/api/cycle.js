import { Api } from "./api.js";
import {RoutineApi} from "@/api/routine";

export { CycleApi, Cycle }

class CycleApi {
    static getUrl(routineId, slug) {
        return `${RoutineApi.getUrl(routineId)}/cycles${ slug ? `/${slug}` : ""}`;
    }

    static async getCycles(routineId, page, size, orderBy, direction, controller) {
        let url = CycleApi.getUrl(routineId);
        url = `${url}?page=${page}&size=${size}&orderBy=${orderBy}&direction=${direction || "asc"}`;
        return await Api.get(url, true, controller);
    }

    static async addCycle(routineId, cycle, controller) {
        return await Api.post(CycleApi.getUrl(routineId), true, cycle, controller);
    }

    static async getCycle(routineId, cycleId, controller) {
        return await Api.get(CycleApi.getUrl(routineId, cycleId), true, controller);
    }

    static async modifyCycle(routineId, cycleId, cycle, controller) {
        return await Api.put(CycleApi.getUrl(routineId, cycleId), true, cycle, controller);
    }

    static async deleteCycle(routineId, cycleId, controller) {
        return await Api.delete(CycleApi.getUrl(routineId, cycleId), true, controller);
    }
}

class Cycle {
    constructor(name, detail, type, order, repetitions, metadata) {
        this.name = name;
        this.detail = detail;
        this.type = type;
        this.order = order;
        this.repetitions = repetitions;
        this.metadata = metadata;
    }
}