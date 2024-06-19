import { Link } from "react-router-dom";

import Path from "../../lib/paths";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div>
            <div className="container-fluid bg-dark text-secondary">
                <div className={`row ${styles["footer-links"]}`}>
                    <div className="col-lg-10 col-md-6">
                        <div className="row gx-5">
                            <div className="col-lg-4 col-md-12 pt-5 mb-5">
                                <h4 className="text-uppercase text-light mb-4">
                                    Get In Touch
                                </h4>
                                <div className="d-flex mb-2">
                                    <i className="bi bi-geo-alt text-primary me-2" />
                                    <p className="mb-0">Bulgaria, Haskovo</p>
                                </div>
                                <div className="d-flex mb-2">
                                    <i className="bi bi-envelope-open text-primary me-2" />
                                    <p className="mb-0">teo.valxev@gmail.com</p>
                                </div>
                                <div className="d-flex mt-4">
                                    <a
                                        className="btn btn-primary btn-square rounded-circle me-2"
                                        href="https://www.linkedin.com/in/teodor-valchev/"
                                    >
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                    <a
                                        className="btn btn-primary btn-square rounded-circle"
                                        href="https://www.instagram.com/teo_thenx/"
                                    >
                                        <i className="fab fa-instagram" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                <h4 className="text-uppercase text-light mb-4">
                                    Quick Links
                                </h4>
                                <div className="d-flex flex-column justify-content-start">
                                    <Link
                                        className="text-secondary mb-2"
                                        to={Path.Home}
                                    >
                                        <i className="bi bi-arrow-right text-primary me-2" />
                                        Home
                                    </Link>
                                    <Link
                                        className="text-secondary mb-2"
                                        to={Path.About}
                                    >
                                        <i className="bi bi-arrow-right text-primary me-2" />
                                        About Us
                                    </Link>
                                    <Link
                                        className="text-secondary mb-2"
                                        to={Path.Classes}
                                    >
                                        <i className="bi bi-arrow-right text-primary me-2" />
                                        Classes
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="container-fluid py-4 py-lg-0 px-5"
                style={{
                    background: "#111111",
                }}
            >
                <div className={`row ${styles["footer-text"]}`}>
                    <div className="col-lg-8">
                        <div className="py-lg-4 text-center">
                            <p className="text-secondary mb-0">
                                ©
                                <a className="text-light fw-bold" href="#">
                                    Pure Gym
                                </a>
                                . All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <a className="btn btn-dark py-3 fs-4 back-to-top" href="#">
                <i className="bi bi-arrow-up" />
            </a>
        </div>
    );
};

export default Footer;
