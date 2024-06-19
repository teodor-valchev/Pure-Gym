import * as request from "../lib/requester";

const BASE_URL = "http://localhost:3030/data/comments";

export const createComment = async (commentData) => {
    const result = await request.post(BASE_URL, commentData);

    return result;
};

export const getAllComments = async () => {
    const result = await request.get(BASE_URL);

    return result;
};

export const deleteComment = async (id) => {
    const result = await request.remove(`${BASE_URL}/${id}`);

    return result;
};
