import Path from "./paths";
import { isEmptyObject } from "../utils/helperFunctions";
import {
    commentsValidation,
    validateClassValues,
    validateUserLoginValues,
    validateUserRegisterValues,
} from "../utils/validation";

const buildOptions = (data, url, method) => {
    const id = new URL(url).pathname.split("/")[3];

    const responseBuilder = {};

    responseBuilder.headers = {
        "Content-Type": "application/json",
    };

    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        responseBuilder.headers = {
            ...responseBuilder.headers,
            "X-Authorization": user.accessToken,
        };
    }

    // need to optimize it somehow??
    if (url.includes(Path.Login)) {
        const errors = validateUserLoginValues(data);
        if (!isEmptyObject(errors)) {
            responseBuilder.status = 400;
            responseBuilder.body = JSON.stringify(errors);
            return responseBuilder;
        }
    } else if (url.includes(Path.Register)) {
        const errors = validateUserRegisterValues(data);
        if (!isEmptyObject(errors)) {
            responseBuilder.status = 400;
            responseBuilder.body = JSON.stringify(errors);
            return responseBuilder;
        }
    }

    if (url.endsWith("/classes") && method === "POST") {
        const errors = validateClassValues(data);
        if (!isEmptyObject(errors)) {
            responseBuilder.status = 400;
            responseBuilder.body = JSON.stringify(errors);
            return responseBuilder;
        }
        responseBuilder.body = JSON.stringify(data);

        return responseBuilder;
    } else if (url.includes(id) && method === "PUT") {
        const errors = validateClassValues(data);
        if (!isEmptyObject(errors)) {
            responseBuilder.status = 400;
            responseBuilder.body = JSON.stringify(errors);
            return responseBuilder;
        }
        responseBuilder.body = JSON.stringify(data);

        return responseBuilder;
    } else if (url.endsWith("/comments") && method === "POST") {
        const errors = commentsValidation(data);
        if (!isEmptyObject(errors)) {
            responseBuilder.status = 400;
            responseBuilder.body = JSON.stringify(errors);
            return responseBuilder;
        }
        responseBuilder.body = JSON.stringify(data);

        return responseBuilder;
    }
    if (data) {
        responseBuilder.body = JSON.stringify(data);
    }

    return responseBuilder;
};

const request = async (method, url, data) => {
    const options = buildOptions(data, url, method);
    // inputValidationErrors
    if (options.status === 400) {
        throw JSON.parse(options.body);
    }

    const result = await fetch(url, {
        method,
        ...options,
    });

    if (result.status === 204) {
        return result;
    } else if (result.status === 403 || result.status === 409) {
        //throwing service errors
        const serviceError = {
            invalidAccessToken: "User doesn't exist",
            userAlreadyExists: "A user with the same email already exists!",
        };
        throw serviceError;
    }

    const response = await result.json();

    return response;
};

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const patch = request.bind(null, "PUT");
export const remove = request.bind(null, "DELETE");
