import { useContext, useEffect } from "react";

import * as authService from "../../../services/authService";
import { authContext } from "../../../context/authContext";

const Logout = () => {
    const { logoutHandler } = useContext(authContext);

    useEffect(() => {
        authService.logout().then(logoutHandler());
    }, []);
};

export default Logout;
