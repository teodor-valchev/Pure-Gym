import { createContext, useState } from "react";

import * as authService from "../services/authService";

export const authContext = createContext();

authContext.displayName = "Auth Context";

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    async function loginSubmitHandler(userData) {
        const user = await authService.login(userData);
        setAuth(user);
    }

    console.log(auth);

    const values = {
        user: auth,
        loginSubmitHandler,
    };

    return (
        <authContext.Provider value={values}>{children}</authContext.Provider>
    );
};

export default AuthProvider;
