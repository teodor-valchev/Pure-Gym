import { useContext } from "react";

import { authContext } from "../../../context/authContext";
import useForm from "../../../hooks/useForm";
import { isEmptyObject } from "../../../utils/helperFunctions";

import Alert from "react-bootstrap/Alert";
import styles from "./Register.module.css";

const RegisterKeys = {
    Username: "username",
    Email: "email",
    Password: "password",
    RepeatPassword: "repeatPass",
};

const Register = () => {
    const { registerSubmitHandler } = useContext(authContext);
    const { values, errors, submitting, onChange, OnFormSubmit } = useForm(
        registerSubmitHandler,
        {
            [RegisterKeys.Username]: "",
            [RegisterKeys.Email]: "",
            [RegisterKeys.Password]: "",
            [RegisterKeys.RepeatPassword]: "",
        }
    );

    return (
        <div className={`col-lg-5 ${styles["register-form"]}`}>
            <div className={styles["background-image"]}></div>
            <div className={`${styles["register-form"]}`}>
                {isEmptyObject(errors) && submitting ? (
                    <Alert className={styles.msg} variant="success">
                        Registration is successful!
                    </Alert>
                ) : (
                    <Alert
                        className={styles.msg}
                        variant={`${!isEmptyObject(errors) && "danger"}`}
                    >
                        {errors.AllFieldsRequired}
                    </Alert>
                )}

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
                                name={RegisterKeys.RepeatPassword}
                                placeholder="Repeat password..."
                                onChange={onChange}
                                value={values[RegisterKeys.RepeatPassword]}
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
