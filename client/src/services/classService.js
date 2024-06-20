import * as request from "../lib/requester";

const BASE_URL = "http://localhost:3030/data/classes";

export const createClass = async (classData) => {
    const result = await request.post(BASE_URL, classData);

    return result;
};

export const getAllClasses = async () => {
    const result = await request.get(BASE_URL);

    return result;
};

export const getSingleClass = async (classId) => {
    const query = new URLSearchParams({
        where: `_id="${classId}"`,
        load: `author=_ownerId:users`,
    });

    const result = await request.get(`${BASE_URL}/${classId}?${query.toString()}`);

    return result[0];
};

export const deleteClass = async (id) => {
    const result = await request.remove(`${BASE_URL}/${id}`);

    return result;
};

export const ediClass = async (id, editData) => {
    const result = await request.patch(`${BASE_URL}/${id}`, editData);

    return result;
};
