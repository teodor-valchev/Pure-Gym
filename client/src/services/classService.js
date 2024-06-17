import * as request from "../lib/requester";

const BASE_URL = "http://localhost:3030/data/classes";

export const createClass = async (classData) => {
    const result = await request.post(BASE_URL, classData)

    return result;
}
