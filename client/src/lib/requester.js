import Path from "./paths";
import { isEmptyObject } from "../utils/helperFunctions";
import {
    validateClassValues,
    validateUserLoginValues,
    validateUserRegisterValues,
} from "../utils/validation";

const buildOptions = (data, url) => {
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

    if (url.endsWith("/classes")) {
        const errors = validateClassValues(data);
        if (!isEmptyObject(errors)) {
            responseBuilder.status = 400;
            responseBuilder.body = JSON.stringify(errors);
            return responseBuilder;
        }
        responseBuilder.body = JSON.stringify(data);

        return responseBuilder;
    }

    responseBuilder.body = JSON.stringify(data);
    return responseBuilder
};

const request = async (method, url, data) => {
    let errors;
    const options = buildOptions(data, url);

    if (options.status === 400) {
        throw JSON.parse(options.body)
    }

    const result = await fetch(url, {
        method,
        ...options
    });

    if (result.status === 204) {
        return result;
    }

    const response = await result.json();

    if (url.includes(Path.Login)) {
        errors = validateUserLoginValues(response.message);
    } else if (url.includes(Path.Register)) {
        errors = validateUserRegisterValues(response.message, data);
    }

    if (errors) {
        throw errors;
    }

    return response;
};

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const patch = request.bind(null, "PUT");
export const remove = request.bind(null, "DELETE");
