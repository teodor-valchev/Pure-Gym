import { useContext, useEffect } from "react";

import * as authService from "../../../services/authService";
import { authContext } from "../../../context/authContext";

import Alert from "react-bootstrap/Alert";

const Logout = () => {
    const { logoutHandler } = useContext(authContext);

    useEffect(() => {
        authService.logout().then(logoutHandler());
    }, []);

    return <Alert variant="info">Successfully logged out!</Alert>;
};

export default Logout;
