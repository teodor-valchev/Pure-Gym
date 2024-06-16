import Path from "./paths";
import { isEmptyObject } from "../utils/helperFunctions";
import {
    validateUserLoginValues,
    validateUserRegisterValues,
} from "../utils/validation";

const buildOptions = (data) => {
    const responseBuilder = {};

    responseBuilder.headers = {
        "Content-Type": "application/json",
    };

    if (data) {
        responseBuilder.body = JSON.stringify(data);
    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        responseBuilder.headers = {
            ...responseBuilder.headers,
            "X-Authorization": user.accessToken,
        };
    }

    return responseBuilder;
};

const request = async (method, url, data) => {
    let errors;

    const result = await fetch(url, {
        method,
        ...buildOptions(data),
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

    if (!isEmptyObject(errors)) {
        throw errors;
    }

    return response;
};

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const patch = request.bind(null, "PUT");
export const remove = request.bind(null, "DELETE");
