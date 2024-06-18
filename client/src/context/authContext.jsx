import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService";
import Path from "../lib/paths";

export const authContext = createContext();

authContext.displayName = "Auth Context";

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('user')
        return {}
    });
    const navigate = useNavigate()

    async function loginSubmitHandler(userData) {
        const user = await authService.login(userData);

        localStorage.setItem("user", JSON.stringify(user));
        setAuth(user);
        navigate(Path.Classes);
    }

    async function registerSubmitHandler(userData) {
        const user = await authService.register(userData);

        localStorage.setItem("user", JSON.stringify(user));
        setAuth(user);
        navigate(Path.Classes)
    }

    async function logoutHandler() {
        const user = await authService.logout();

        localStorage.removeItem("user", user);
        setAuth({});
        navigate(Path.Home);
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
