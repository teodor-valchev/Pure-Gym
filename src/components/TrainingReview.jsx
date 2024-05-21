function TrainingReview() {
    return (
        <div className="container-fluid bg-dark facts p-5 my-5">
            <div className="row gx-5 gy-4 py-5">
                <div className="col-lg-3 col-md-6">
                    <div className="d-flex">
                        <div
                            className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
                            style={{
                                height: "60px",
                                width: "60px",
                            }}
                        >
                            <i className="fa fa-star fs-4 text-white" />
                        </div>
                        <div className="ps-4">
                            <h5 className="text-secondary text-uppercase">
                                Experience
                            </h5>
                            <h1
                                className="display-5 text-white mb-0"
                                data-toggle="counter-up"
                            >
                                12345
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="d-flex">
                        <div
                            className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
                            style={{
                                height: "60px",
                                width: "60px",
                            }}
                        >
                            <i className="fa fa-users fs-4 text-white" />
                        </div>
                        <div className="ps-4">
                            <h5 className="text-secondary text-uppercase">
                                Our Trainers
                            </h5>
                            <h1
                                className="display-5 text-white mb-0"
                                data-toggle="counter-up"
                            >
                                12345
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="d-flex">
                        <div
                            className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
                            style={{
                                height: "60px",
                                width: "60px",
                            }}
                        >
                            <i className="fa fa-check fs-4 text-white" />
                        </div>
                        <div className="ps-4">
                            <h5 className="text-secondary text-uppercase">
                                Complete Project
                            </h5>
                            <h1
                                className="display-5 text-white mb-0"
                                data-toggle="counter-up"
                            >
                                12345
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="d-flex">
                        <div
                            className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
                            style={{
                                height: "60px",
                                width: "60px",
                            }}
                        >
                            <i className="fa fa-mug-hot fs-4 text-white" />
                        </div>
                        <div className="ps-4">
                            <h5 className="text-secondary text-uppercase">
                                Happy Clients
                            </h5>
                            <h1
                                className="display-5 text-white mb-0"
                                data-toggle="counter-up"
                            >
                                12345
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrainingReview;
