import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { authContext } from "../../context/authContext";
import Path from "../../lib/paths";
import styles from "./Navigation.module.css";

const Navigation = () => {
    const { isAuthenticated, user } = useContext(authContext);
    const [linkClass, setLinkClass] = useState({
        Home: true,
        About: false,
        Register: false,
        Login: false,
        Classes: false,
        Create: false,
    });

    const onLinkChangeHandler = (e) => {
        const linkName = e.target.dataset.link;

        setLinkClass(() => ({ [linkName]: true }));
    };

    return (
        <div className="container-fluid bg-dark px-0">
            <div className="row gx-0">
                <div className="col-lg-3 bg-dark d-none d-lg-block">
                    <Link
                        className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
                        to={Path.Home}
                    >
                        <h1 className="m-0 display-4 text-primary text-uppercase">
                            Pure Gym
                        </h1>
                    </Link>
                </div>
                <div className="col-lg-9">
                    <div className="row gx-0 bg-secondary d-none d-lg-flex">
                        <div className="col-lg-7 px-5 text-start">
                            <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                <i className="fa fa-user-circle text-primary me-2" />
                                <h6 className="mb-0">
                                    Welcome{" "}
                                    {!user.username ? "Guest" : user.username}
                                </h6>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0 px-lg-5">
                        <a
                            className="navbar-brand d-block d-lg-none"
                            href="index.html"
                        >
                            <h1 className="m-0 display-4 text-primary text-uppercase">
                                Pure Gym
                            </h1>
                        </a>
                        <button
                            className="navbar-toggler"
                            data-bs-target="#navbarCollapse"
                            data-bs-toggle="collapse"
                            type="button"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <Link
                                    data-link="Home"
                                    onClick={onLinkChangeHandler}
                                    className={`nav-item nav-link ${
                                        linkClass.Home && "active"
                                    }`}
                                    to={Path.Home}
                                >
                                    Home
                                </Link>
                                <Link
                                    onClick={onLinkChangeHandler}
                                    className={`nav-item nav-link ${
                                        linkClass.About && "active"
                                    }`}
                                    data-link="About"
                                    to={Path.About}
                                >
                                    About
                                </Link>
                                <Link
                                    onClick={onLinkChangeHandler}
                                    className={`nav-item nav-link ${
                                        linkClass.Classes && "active"
                                    }`}
                                    data-link="Classes"
                                    to={Path.Classes}
                                >
                                    Classes
                                </Link>

                                {isAuthenticated ? (
                                    <div className={styles.user}>
                                        <Link
                                            onClick={onLinkChangeHandler}
                                            className={`nav-item nav-link 
                                                ${
                                                    linkClass.Create && "active"
                                                }`}
                                            data-link="Create"
                                            to={Path["Class_Create"]}
                                        >
                                            Create Class
                                        </Link>
                                        <Link
                                            className="nav-item nav-link"
                                            to={Path.Logout}
                                            data-link="Logout"
                                        >
                                            Logout
                                        </Link>
                                    </div>
                                ) : (
                                    <>
                                        <Link
                                            onClick={onLinkChangeHandler}
                                            className={`nav-item nav-link ${
                                                linkClass.Register && "active"
                                            }`}
                                            data-link="Register"
                                            to={Path.Register}
                                        >
                                            Register
                                        </Link>
                                        <Link
                                            onClick={onLinkChangeHandler}
                                            className={`nav-item nav-link ${
                                                linkClass.Login && "active"
                                            }`}
                                            data-link="Login"
                                            to={Path.Login}
                                        >
                                            Login
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
