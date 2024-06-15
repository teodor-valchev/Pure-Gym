import * as request from '../requester'

const BASE_URL = "http://localhost:3030/users";

export const login = async (userData) => {
    const result = await request.post(`${BASE_URL}/login`, userData)
    
    return result
};
