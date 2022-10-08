import { Api } from "./api"

export { RoutineApi, Routine }

class RoutineApi {
    static getUrl(slug) {
        return `${Api.baseUrl}/routines${ slug ? `/${slug}` : ""}`;
    }

    static async addRoutine(routine, controller) {
        return await Api.post(RoutineApi.getUrl(), true, routine, controller);
    }

    static async getRoutines(categoryId, userId, difficulty, score, search, page, size, orderBy, direction, controller) {
        let url = RoutineApi.getUrl();
        url = `${url}?categoryId=${categoryId}
        &userId=${userId}
        &difficulty=${difficulty}
        &score=${score}
        ${search ? `&search=${search}` : ""}
        &page=${page}
        &size=${size}
        &orderBy=${orderBy}
        &direction=${direction || "asc"}`;
        return await Api.get(url, true, controller);
    }

    static async getRoutine(id, controller) {
        return await Api.get(RoutineApi.getUrl(id), true, controller);
    }

    static async modifyRoutine(id, routine, controller) {
        return await Api.put(RoutineApi.getUrl(id), true, routine, controller);
    }

    static async deleteRoutine(id, controller) {
        return await Api.delete(RoutineApi.getUrl(id), true, controller);
    }
}

class Routine {
    constructor(id, name, detail, date, score, isPublic, difficulty, user, category, metadata) {
        this.id = id;
        this.name = name;
        this.detail = detail;
        this.date = date;
        this.score = score;
        this.isPublic = isPublic;
        this.difficulty = difficulty;
        this.user = user;
        this.metadata = metadata;
    }
}
