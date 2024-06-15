import { isEmptyObject } from "./utils/helperFunctions";
import { validateUserLoginValues, validateUserRegisterValues } from "./utils/validation";

const buildOptions = (data) => {
    const responseBuilder = {};

    responseBuilder.headers = {
        "Content-Type": "application/json",
    };

    if (data) {
        responseBuilder.body = JSON.stringify(data);
    }

    return responseBuilder;
};

const request = async (method, url, data) => {
    //need to optimize this if
    const isLogin = url.endsWith('/login')
    let errors;

    const result = await fetch(url, {
        method,
        ...buildOptions(data),
    });

    const response = await result.json();

    if (isLogin) {
        errors = validateUserLoginValues(response.message);
    } else {
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
