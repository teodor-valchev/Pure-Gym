import { useEffect, useState } from "react";

import styles from "./Register.module.css";

const Register = () => {
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        repeatPass: "",
    });
    const [submitting, setSubmitting] = useState(false);

        useEffect(() => {
            if (Object.keys(errors).length === 0 && submitting) {
                setValues({
                    username: "",
                    email: "",
                    password: "",
                    repeatPass: "",
                });
            }
        }, [errors]);

    const onChange = (e) => {
        const { name, value } = e.target;
        setValues((state) => ({ ...state, [name]: value }));
    };

    const validateValues = (inputValues) => {
        const username = inputValues.username;
        const email = inputValues.email;
        const password = inputValues.password;
        const repeatPass = inputValues.repeatPass;

        let inputErrors = {};

        if (username.length < 5) {
            inputErrors.username = "Username must be at least 5 characters!";
        }
        if (email.length < 5) {
            inputErrors.email = "Email must be at least 5 characters!";
        }
        if (password === "") {
            inputErrors.password = "Password is empty!";
        }
        if (password !== repeatPass) {
            inputErrors.password = "Password mismatch!";
        }
        return inputErrors;
    };

    const OnFormSubmit = (e) => {
        e.preventDefault();
        setErrors(validateValues(values));
        setSubmitting(true);
    };


    return (
        <div className={`col-lg-5 ${styles["register-form"]}`}>
            <div className={styles["background-image"]}></div>
            <div className={`${styles["register-form"]}`}>
                {Object.keys(errors).length === 0 && submitting ? (
                    <span style={{ color: "red" }}>
                        Successfully submitted ✓
                    </span>
                ) : null}
                <form className="bg-dark h-auto" onSubmit={OnFormSubmit}>
                    <h2 className="d-flex text-light justify-content-center pt-3 ">
                        Register
                    </h2>
                    <div className={styles["register-form-elements"]}>
                        <div className="col-5 pb-3 pt-3">
                            {errors.username && (
                                <p className={styles.error}>
                                    {errors.username}
                                </p>
                            )}
                            <input
                                type="text"
                                className="form-control bg-light border-0 px-4"
                                name="username"
                                placeholder="Username..."
                                onChange={onChange}
                                value={values.username}
                            />
                        </div>
                        <div className="col-5 pb-3 pt-3">
                            {errors.email && (
                                <p className={styles.error}>{errors.email}</p>
                            )}
                            <input
                                type="email"
                                className="form-control bg-light border-0 px-4"
                                name="email"
                                placeholder="Email..."
                                onChange={onChange}
                                value={values.email}
                            />
                        </div>
                        <div className="col-5 pb-3 pt-3">
                            {errors.password && (
                                <p className={styles.error}>
                                    {errors.password}
                                </p>
                            )}
                            <input
                                type="password"
                                className="form-control bg-light border-0 px-4"
                                name="password"
                                placeholder="Password..."
                                onChange={onChange}
                                value={values.password}
                            />
                        </div>
                        <div className="col-5 pb-3 pt-3">
                            {errors.password && (
                                <p className={styles.error}>
                                    {errors.password}
                                </p>
                            )}
                            <input
                                type="password"
                                className="form-control bg-light border-0 px-4"
                                name="repeatPass"
                                placeholder="Repeat password..."
                                onChange={onChange}
                                value={values.repeatPass}
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
