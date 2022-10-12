import {Api} from "@/api/api";

export {ExerciseApi, Exercise}

class ExerciseApi {
    static getUrl(slug) {
        return `${Api.baseUrl}/exercises${slug ? `/${slug}` : ""}`;
    }

    static async getExercises(search, page, size, orderBy, direction, controller) {
        let url = ExerciseApi.getUrl();
        url = `${url}?${search ? `search=${search}` : ""}&page=${page}&size=${size}&orderBy=${orderBy}&direction=${direction || "asc"}`;
        return await Api.get(url, true, controller);
    }

    static async addExercise(exercise, controller) {
        return await Api.post(ExerciseApi.getUrl(), true, exercise, controller);
    }

    static async getExercise(id, controller) {
        return await Api.get(ExerciseApi.getUrl(id), true, controller);
    }

    static async modifyExercise(id, exercise, controller) {
        return await Api.put(ExerciseApi.getUrl(id), true, exercise, controller);
    }

    static async deleteExercise(id, controller) {
        return await Api.delete(ExerciseApi.getUrl(id), true, controller);
    }
}

class Exercise {
    constructor(id, name, detail, type, date, metadata) {
        this.id = id;
        this.name = name;
        this.detail = detail;
        this.type = type;
        this.date = date;
        this.metadata = metadata;
    }
}