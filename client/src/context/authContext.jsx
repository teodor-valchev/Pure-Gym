import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService";
import Path from "../lib/paths";
import useUserState from "../hooks/useUserState";

export const authContext = createContext();

authContext.displayName = "Auth Context";

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useUserState("user", {});
    const navigate = useNavigate();

    async function loginSubmitHandler(userData) {
        const user = await authService.login(userData);

        alert('Successfully logged in!')
        setAuth(user);
        navigate(Path.Classes);
    }

    async function registerSubmitHandler(userData) {
        const user = await authService.register(userData);

        alert("Registration was successful!");
        setAuth(user);
        navigate(Path.Classes);
    }

    function logoutHandler() {
        alert("Successfully logged out!");
        setAuth("");
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
