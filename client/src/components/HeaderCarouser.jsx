function HeaderCoursel() {
    return (
        <div className="container-fluid p-0">
            <div
                className="carousel slide"
                data-bs-ride="carousel"
                id="header-carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            alt="Image"
                            className="w-100"
                            src="img/carousel-1.jpg"
                        />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div
                                className="p-3"
                                style={{
                                    maxWidth: "900px",
                                }}
                            >
                                <h5 className="text-white text-uppercase">
                                    Best Gym Center
                                </h5>
                                <h1 className="display-2 text-white text-uppercase mb-md-4">
                                    Build Your Body Strong With Pure Gym
                                </h1>
                                <a
                                    className="btn btn-primary py-md-3 px-md-5 me-3"
                                    href=""
                                >
                                    Join Us
                                </a>
                                <a
                                    className="btn btn-light py-md-3 px-md-5"
                                    href=""
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            alt="Image"
                            className="w-100"
                            src="img/carousel-2.jpg"
                        />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div
                                className="p-3"
                                style={{
                                    maxWidth: "900px",
                                }}
                            >
                                <h5 className="text-white text-uppercase">
                                    Best Gym Center
                                </h5>
                                <h1 className="display-2 text-white text-uppercase mb-md-4">
                                    Grow Your Strength With Our Trainers
                                </h1>
                                <a
                                    className="btn btn-primary py-md-3 px-md-5 me-3"
                                    href=""
                                >
                                    Join Us
                                </a>
                                <a
                                    className="btn btn-light py-md-3 px-md-5"
                                    href=""
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    data-bs-slide="prev"
                    data-bs-target="#header-carousel"
                    type="button"
                >
                    <span
                        aria-hidden="true"
                        className="carousel-control-prev-icon"
                    />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    data-bs-slide="next"
                    data-bs-target="#header-carousel"
                    type="button"
                >
                    <span
                        aria-hidden="true"
                        className="carousel-control-next-icon"
                    />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default HeaderCoursel;
