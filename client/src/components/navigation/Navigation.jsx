import { useState } from "react";
import { Link } from "react-router-dom";
//css.module
const Navigation = () => {
    const [linkClass, setLinkClass] = useState({
        Home: true,
        About: false,
        Register: false,
    });

    const onLinkChangeHandler = (e) => {
        const linkName = e.target.textContent;

        setLinkClass(() => ({ [linkName]: true }));
    };

    return (
        <div className="container-fluid bg-dark px-0">
            <div className="row gx-0">
                <div className="col-lg-3 bg-dark d-none d-lg-block">
                    <a
                        className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
                        href="index.html"
                    >
                        <h1 className="m-0 display-4 text-primary text-uppercase">
                            Pure Gym
                        </h1>
                    </a>
                </div>
                <div className="col-lg-9">
                    <div className="row gx-0 bg-secondary d-none d-lg-flex">
                        <div className="col-lg-7 px-5 text-start">
                            <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                <i className="fa fa-user-circle text-primary me-2" />
                                <h6 className="mb-0">
                                    Welcome teo.thenx@gmail.com
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
                                    onClick={onLinkChangeHandler}
                                    className={`nav-item nav-link ${
                                        linkClass.Home && "active"
                                    }`}
                                    to="/"
                                >
                                    Home
                                </Link>
                                <Link
                                    onClick={onLinkChangeHandler}
                                    className={`nav-item nav-link ${
                                        linkClass.About && "active"
                                    }`}
                                    to="/about"
                                >
                                    About
                                </Link>
                                <a
                                    className="nav-item nav-link"
                                    href="class.html"
                                >
                                    Classes
                                </a>
                                <a
                                    className="nav-item nav-link"
                                    href="team.html"
                                >
                                    Trainers
                                </a>
                                <a
                                    className="nav-item nav-link"
                                    href="contact.html"
                                >
                                    Contact
                                </a>
                                <Link
                                    onClick={onLinkChangeHandler}
                                    className="nav-item nav-link"
                                    to="/register"
                                >
                                    Register
                                </Link>
                                <a className="nav-item nav-link" href="#">
                                    Login
                                </a>
                                <a className="nav-item nav-link" href="#">
                                    Logout
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
