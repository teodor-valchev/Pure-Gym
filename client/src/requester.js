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
    const result = await fetch(url, {
        method,
        ...buildOptions(data),
    });

    const response = await result.json();

    if (response.code === 403) {
        throw new Error(response.message);
    }

    return response;
};

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const patch = request.bind(null, "PUT");
export const remove = request.bind(null, "DELETE");
