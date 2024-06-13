import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";

import { validateRegistrationValues } from "../../utils/validation";
import styles from "./Register.module.css";

const RegisterKeys = {
    Username: "username",
    Email: "email",
    Password: "password",
    RepeatPass: "repeatPass",
};

const Register = () => {
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        [RegisterKeys.Username]: "",
        [RegisterKeys.Email]: "",
        [RegisterKeys.Password]: "",
        [RegisterKeys.RepeatPassword]: "",
    });
    const [submitting, setSubmitting] = useState(false);

        useEffect(() => {
            if (Object.keys(errors).length === 0 && submitting) {
                setValues({
                    [RegisterKeys.Username]: "",
                    [RegisterKeys.Email]: "",
                    [RegisterKeys.Password]: "",
                    [RegisterKeys.RepeatPassword]: "",
                });
            }
        }, [errors]);

    const onChange = (e) => {
        const { name, value } = e.target;
        setValues((state) => ({ ...state, [name]: value }));
    };

    const OnFormSubmit = (e) => {
        e.preventDefault();
        setErrors(validateRegistrationValues(values));
        setSubmitting(true);
    };


    return (
        <div className={`col-lg-5 ${styles["register-form"]}`}>
            <div className={styles["background-image"]}></div>
            <div className={`${styles["register-form"]}`}>
                {Object.keys(errors).length === 0 && submitting ? (
                    <Alert className={styles["success-msg"]} variant="success">
                        Registration is successful!
                    </Alert>
                ) : null}

                <form className="bg-dark h-auto" onSubmit={OnFormSubmit}>
                    <h2 className="d-flex text-light justify-content-center pt-3 ">
                        Register
                    </h2>
                    <div className={styles["register-form-elements"]}>
                        <div className="col-5 pb-3 pt-3">
                            {errors.Username && (
                                <p className={styles.error}>
                                    {errors.Username}
                                </p>
                            )}
                            <input
                                type="text"
                                className="form-control bg-light border-0 px-4"
                                name={RegisterKeys.Username}
                                placeholder="Username..."
                                onChange={onChange}
                                value={values[RegisterKeys.Username]}
                            />
                        </div>
                        <div className="col-5 pb-3 pt-3">
                            {errors.Email && (
                                <p className={styles.error}>{errors.Email}</p>
                            )}
                            <input
                                type="email"
                                className="form-control bg-light border-0 px-4"
                                name={RegisterKeys.Email}
                                placeholder="Email..."
                                onChange={onChange}
                                value={values[RegisterKeys.Email]}
                            />
                        </div>
                        <div className="col-5 pb-3 pt-3">
                            {errors.Password && (
                                <p className={styles.error}>
                                    {errors.Password}
                                </p>
                            )}
                            <input
                                type="password"
                                className="form-control bg-light border-0 px-4"
                                name={RegisterKeys.Password}
                                placeholder="Password..."
                                onChange={onChange}
                                value={values[RegisterKeys.Password]}
                            />
                        </div>
                        <div className="col-5 pb-3 pt-3">
                            {errors.Password && (
                                <p className={styles.error}>
                                    {errors.Password}
                                </p>
                            )}
                            <input
                                type="password"
                                className="form-control bg-light border-0 px-4"
                                name={RegisterKeys.RepeatPass}
                                placeholder="Repeat password..."
                                onChange={onChange}
                                value={values[RegisterKeys.RepeatPass]}
                            />
                        </div>
                        <div className="col-5 mt-2 p-4">
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
};

export default Register;
