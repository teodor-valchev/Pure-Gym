import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { authContext } from "../context/authContext";
import Path from "../lib/paths";

const AuthGuard = () => {
    const { isAuthenticated } = useContext(authContext);

    if (!isAuthenticated) {
        return Navigate({ to: Path.Login });
    }

    return <Outlet />;
};

export default AuthGuard;
