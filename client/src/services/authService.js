import * as request from "../requester";

const BASE_URL = "http://localhost:3030/users";

export const login = async (userData) => {
    const result = await request.post(`${BASE_URL}/login`, userData);

    return result;
};

export const register = async (userData) => {
    const result = await request.post(`${BASE_URL}/register`, userData);

    return result;
};

export const logout = async () => {
    const result = await request.get(`${BASE_URL}/logout`);

    return result;
};

