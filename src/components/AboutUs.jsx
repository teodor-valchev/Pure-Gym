function AboutUs() {
    return (
        <div className="container-fluid p-5">
            <div className="row gx-5">
                <div
                    className="col-lg-5 mb-5 mb-lg-0"
                    style={{
                        minHeight: "500px",
                    }}
                >
                    <div className="position-relative h-100">
                        <img
                            className="position-absolute w-100 h-100 rounded"
                            src="src/public/img/about.jpg"
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="mb-4">
                        <h5 className="text-primary text-uppercase">
                            About Us
                        </h5>
                        <h1 className="display-3 text-uppercase mb-0">
                            Welcome to Gymster
                        </h1>
                    </div>
                    <div className="rounded bg-dark p-5">
                        <ul className="nav nav-pills justify-content-between mb-3">
                            <li className="nav-item w-50">
                                <a
                                    className="nav-link text-uppercase text-center w-100 active"
                                    data-bs-toggle="pill"
                                    href="#pills-1"
                                >
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item w-50">
                                <a
                                    className="nav-link text-uppercase text-center w-100"
                                    data-bs-toggle="pill"
                                    href="#pills-2"
                                >
                                    Why Choose Us
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div
                                className="tab-pane fade show active"
                                id="pills-1"
                            >
                                <p className="text-secondary mb-0">
                                    Welcome to Gymster, where your fitness
                                    journey begins! We are dedicated to
                                    providing top-notch gym services designed to
                                    help you achieve your health and fitness
                                    goals. Our state-of-the-art facility is
                                    equipped with the latest fitness equipment,
                                    and our team of experienced trainers is
                                    passionate about guiding you every step of
                                    the way. Whether you're a beginner or a
                                    seasoned athlete, we offer a variety of
                                    classes and personalized training programs
                                    to suit your needs. Join us and become part
                                    of a supportive community committed to a
                                    healthier, stronger you.
                                </p>
                            </div>
                            <div className="tab-pane fade" id="pills-2">
                                <p className="text-secondary mb-0">
                                    We offer more than just a place to work out.
                                    Here’s why you should choose us: <br />
                                    Top-Notch Equipment: Access the latest
                                    fitness equipment.
                                    <br /> Expert Trainers: Personalized
                                    programs from certified professionals.
                                    <br />
                                    Diverse Classes: From HIIT to yoga,
                                    something for everyone.
                                    <br /> Friendly Community: A welcoming,
                                    supportive environment. <br />
                                    Clean & Safe: High standards of cleanliness
                                    and safety. <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
