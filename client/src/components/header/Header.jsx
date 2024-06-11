const  Header = () => {
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
                                <i className="fa fa-envelope text-primary me-2" />
                                <h6 className="mb-0">teo.thenx@gmail.com</h6>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0 px-lg-5">
                        <a
                            className="navbar-brand d-block d-lg-none"
                            href="index.html"
                        >
                            <h1 className="m-0 display-4 text-primary text-uppercase">
                                Gymster
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
                        <div
                            className="collapse navbar-collapse justify-content-between"
                            id="navbarCollapse"
                        >
                            <div className="navbar-nav mr-auto py-0">
                                <a
                                    className="nav-item nav-link active"
                                    href="index.html"
                                >
                                    Home
                                </a>
                                <a
                                    className="nav-item nav-link"
                                    href="about.html"
                                >
                                    About
                                </a>
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
                                <div className="nav-item dropdown">
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a
                                            className="dropdown-item"
                                            href="blog.html"
                                        >
                                            Blog Grid
                                        </a>
                                        <a
                                            className="dropdown-item"
                                            href="detail.html"
                                        >
                                            Blog Detail
                                        </a>
                                        <a
                                            className="dropdown-item"
                                            href="testimonial.html"
                                        >
                                            Testimonial
                                        </a>
                                    </div>
                                </div>
                                <a
                                    className="nav-item nav-link"
                                    href="contact.html"
                                >
                                    Contact
                                </a>
                                <a className="nav-item nav-link" href="#">
                                    Register
                                </a>
                                <a className="nav-item nav-link" href="#">
                                    Login
                                </a>
                            </div>
                            <a
                                className="btn btn-primary py-md-3 px-md-5 d-none d-lg-block"
                                href=""
                            >
                                Join Us
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
