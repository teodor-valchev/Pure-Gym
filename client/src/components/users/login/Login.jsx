import { useContext } from "react";
import Alert from "react-bootstrap/Alert";

import { authContext } from "../../../context/authContext";
import useForm from "../../hooks/useForm";

import styles from "./Login.module.css";

const LoginKeys = {
    Email: "email",
    Password: "password",
};

const Login = () => {
    const { loginSubmitHandler } = useContext(authContext);
    const { values, errors, submitting, onChange, OnFormSubmit } = useForm(
        loginSubmitHandler,
        {
            [LoginKeys.Email]: "",
            [LoginKeys.Password]: "",
        }
    );

    console.log(typeof(errors));
    return (
        <div className={`col-lg-5 ${styles["login-form"]}`}>
            <div className={styles["background-image"]}></div>
            <div className={`${styles["login-form"]}`}>
                {Object.keys(errors).length === 0 && submitting ? (
                    <Alert className={styles["success-msg"]} variant="success">
                        Login is successful!
                    </Alert>
                ) : null}

                <form className="bg-dark h-auto" onSubmit={OnFormSubmit}>
                    <h2 className="d-flex text-light justify-content-center pt-3 ">
                        Login
                    </h2>
                    <div className={styles["login-form-elements"]}>
                        <div className="col-5 pb-3 pt-3">
                            {errors.Email && (
                                <p className={styles.error}>{errors.Email}</p>
                            )}
                            <input
                                type="email"
                                className="form-control bg-light border-0 px-4"
                                name={LoginKeys.Email}
                                placeholder="Email..."
                                onChange={onChange}
                                value={values[LoginKeys.Email]}
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
                                name={LoginKeys.Password}
                                placeholder="Password..."
                                onChange={onChange}
                                value={values[LoginKeys.Password]}
                            />
                        </div>
                        <div className="col-5 mt-2 p-4">
                            <button
                                className="btn btn-primary w-100 py-3"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
