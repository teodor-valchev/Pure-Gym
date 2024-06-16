import { createContext, useState } from "react";

import * as authService from "../services/authService";

export const authContext = createContext();

authContext.displayName = "Auth Context";

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    async function loginSubmitHandler(userData) {
        const user = await authService.login(userData);

        localStorage.setItem("user", JSON.stringify(user));
        setAuth(user);
    }

    async function registerSubmitHandler(userData) {
        const user = await authService.register(userData);

        localStorage.setItem("user", JSON.stringify(user));
        setAuth(user);
    }

    async function logoutHandler() {
        const user = await authService.logout();

        localStorage.removeItem("user", user);
        setAuth({});
    }

    const values = {
        user: auth,
        isAuthenticated: auth.accessToken,
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
    };

    return (
        <authContext.Provider value={values}>{children}</authContext.Provider>
    );
};

export default AuthProvider;
