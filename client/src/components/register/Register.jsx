import styles from './Register.module.css'

const Register = () => {
    return (
        <div className={`col-lg-5 ${styles["register-form"]}`}>
            <div className={styles["background-image"]}></div>
            <div className={`${styles["register-form"]}`}>
                <form className="bg-dark">
                    <h2 className="d-flex text-light justify-content-center pt-3 ">
                        Register
                    </h2>
                    <div className={styles["register-form-elements"]}>
                        <div className="col-5 p-3">
                            <input
                                type="text"
                                className="form-control bg-light border-0 px-4"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="col-5 p-3">
                            <input
                                type="email"
                                className="form-control bg-light border-0 px-4"
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="col-5 p-3">
                            <input
                                type="text"
                                className="form-control bg-light border-0 px-4"
                                placeholder="Password"
                            />
                        </div>
                        <div className="col-5 p-3">
                            <input
                                type="text"
                                className="form-control bg-light border-0 px-4"
                                placeholder="Repeat password"
                            />
                        </div>
                        <div className="col-5 mt-3">
                            <button
                                className="btn btn-primary w-100 py-3"
                                type="submit"
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register