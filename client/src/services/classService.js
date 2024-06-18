import * as request from "../lib/requester";

const BASE_URL = "http://localhost:3030/data/classes";

export const createClass = async (classData) => {
    const result = await request.post(BASE_URL, classData)

    return result;
}

export const getAllClasses = async () => {
    const result = await request.get(BASE_URL);

    return result;
};

export const getSingleClass = async (id) => {
    const query = new URLSearchParams({
        where: `_id="${id}"`,
        load: `owner=_ownerId:users`,
    });

    //comments?where=recipeId%3D%228f414b4f-ab39-4d36-bedb-2ad69da9c830%22&load=author%3D_ownerId%3Ausers
    const result = await request.get(`${BASE_URL}?${query.toString()}`);

    return result[0];
};
