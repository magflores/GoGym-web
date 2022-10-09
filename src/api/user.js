import { Api } from "./api.js";

export { UserApi, Credentials, User }

class UserApi {
    static getUrl(slug) {
        return `${Api.baseUrl}/users${ slug ? `/${slug}` : ""}`;
    }

    static async login(credentials, controller) {
        return await Api.post(UserApi.getUrl('login'), false, credentials, controller);
    }

    static async logout(controller) {
        await Api.post(UserApi.getUrl('logout'), true, controller);
    }

    static async get(controller) {
        return await Api.get(UserApi.getUrl('current'), true, controller);
    }

    static async register(credentials, userInfo, controller) {
        return await Api.post(UserApi.getUrl(), false, {
            username: credentials.username,
            password: credentials.password,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            gender: userInfo.gender,
            birthdate: userInfo.birthdate,
            email: userInfo.email,
            phone: userInfo.phone,
            metadata: userInfo.metadata
        }, controller);
    }

    static async verifyEmail(email, code, controller) {
        return await Api.post(UserApi.getUrl('verify_email'), false, {
            email: email,
            code: code
        }, controller);
    }

    static async resendVerificationEmail(email, controller) {
        return await Api.post(UserApi.getUrl('resend_verification'), false, {
            email: email
        }, controller);
    }

    static async currentUser(controller) {
        return await Api.get(UserApi.getUrl('current'), true, controller);
    }

    static async deleteCurrentUser(controller) {
        return await Api.delete(UserApi.getUrl('current'), true, controller);
    }


    static async modifyCurrentUser(user, controller) {
        return await Api.put(UserApi.getUrl('current'), true, user, controller);
    }
}

class Credentials {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

class User {
    constructor(id, username, firstName, lastName, gender, birthdate, email, phone, avatarUrl, metadata, date, lastActivity, verified){
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.birthdate = birthdate;
        this.email = email;
        this.phone = phone;
        this.avatarUrl = avatarUrl;
        this.metadata = metadata;
        this.date = date;
        this.lastActivity = lastActivity;
        this.verified = verified;
    }
}
