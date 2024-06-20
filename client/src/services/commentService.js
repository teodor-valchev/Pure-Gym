import * as request from "../lib/requester";

const BASE_URL = "http://localhost:3030/data/comments";

export const createComment = async (classId, commentData) => {
    const data = {
        classId,
        username: commentData.username,
        text: commentData.comment,
    };
    const result = await request.post(BASE_URL, data);

    return result;
};

export const getAllComments = async (classId) => {
    const query = new URLSearchParams({
        where: `classId="${classId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${BASE_URL}?${query.toString()}`);

    return result;
};

export const deleteComment = async (id) => {
    const result = await request.remove(`${BASE_URL}/${id}`);

    return result;
};
