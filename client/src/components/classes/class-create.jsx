import Alert from "react-bootstrap/Alert";

import { isEmptyObject } from "../../utils/helperFunctions";
import useForm from "../hooks/useForm";
import styles from "./class-create.module.css";

const CreateKeys = {
    Title: "title",
    Description: "description",
    PhoneNumber: "phone-number",
    Age: "age",
    Image: "image",
    Gender: "male",
};

const CreateClass = () => {
    const { values, errors, submitting, onChange, OnFormSubmit } = useForm(
        null,
        {}
    );
    return (
        <div className={`col-lg-5 ${styles["create-form"]}`}>
            <div className={styles["background-image"]}></div>
            <div className={`${styles["create-form"]}`}>
                {isEmptyObject(errors) && submitting ? (
                    <Alert className={styles.msg} variant="success">
                        Successfully created a new Class!
                    </Alert>
                ) : (
                    <Alert
                        className={styles.msg}
                        variant={`${!isEmptyObject(errors) && "danger"}`}
                    >
                        {errors.serviceError}
                    </Alert>
                )}

                <form className="bg-dark h-auto" onSubmit={OnFormSubmit}>
                    <h2 className="d-flex text-light justify-content-center pt-3 ">
                        Create Class
                    </h2>
                    <div className={styles["create-form-elements"]}>
                        <div className="col-5 pb-3 pt-3">
                            {errors.Username && (
                                <p className={styles.error}>{errors.Title}</p>
                            )}
                            <input
                                type="text"
                                className="form-control bg-light border-0 px-4"
                                name={CreateKeys.Title}
                                placeholder="Title..."
                                onChange={onChange}
                                value={values[CreateKeys.Title]}
                            />
                        </div>
                        <div className="col-5 pb-3 pt-3">
                            {errors.Description && (
                                <p className={styles.error}>
                                    {errors.Description}
                                </p>
                            )}
                            <input
                                type="text"
                                className="form-control bg-light border-0 px-4"
                                name={CreateKeys.Description}
                                placeholder="Description..."
                                onChange={onChange}
                                value={values[CreateKeys.Description]}
                            />
                        </div>
                        <div className="col-5 pb-3 pt-3">
                            {errors.PhoneNumber && (
                                <p className={styles.error}>
                                    {errors.PhoneNumber}
                                </p>
                            )}
                            <input
                                type="text"
                                className="form-control bg-light border-0 px-4"
                                name={CreateKeys.PhoneNumber}
                                placeholder="Phone Number..."
                                onChange={onChange}
                                value={values[CreateKeys.PhoneNumber]}
                            />
                        </div>
                        <div className="col-5 pb-3 pt-3">
                            {errors.Age && (
                                <p className={styles.error}>{errors.Age}</p>
                            )}
                            <input
                                className="form-control bg-light border-0 px-4"
                                type="number"
                                aria-describedby="descriptive text"
                                name={CreateKeys.Age}
                                placeholder="Age..."
                                value={values[CreateKeys.Age]}
                            ></input>
                        </div>
                        <div className="col-5 pb-3 pt-3">
                            {errors.Image && (
                                <p className={styles.error}>{errors.Image}</p>
                            )}
                            <input
                                className="form-control bg-light border-0 px-4"
                                type="text"
                                aria-describedby="descriptive text"
                                name={CreateKeys.Image}
                                placeholder="Image..."
                                value={values[CreateKeys.Image]}
                            ></input>
                        </div>
                        <div className="col-5 pb-3 pt-3 d-flex text-light justify-content-between">
                            {errors.Gender && (
                                <p className={styles.error}>{errors.Gender}</p>
                            )}
                            <div>
                                <input
                                    type="radio"
                                    name={CreateKeys.Gender}
                                    className="mb-12"
                                    value={values[CreateKeys.Gender]}
                                ></input>
                                <label
                                    htmlFor="fpl-1563003300302-0"
                                    className="p-2"
                                >
                                    Male
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name={CreateKeys.Gender}
                                    className=""
                                    value={values[CreateKeys.Gender]}
                                ></input>
                                <label
                                    htmlFor="fpl-1563003300302-0"
                                    title=""
                                    className="p-2"
                                >
                                    Female
                                </label>
                            </div>
                        </div>

                        <div className="col-5 p-4">
                            <button
                                className="btn btn-primary w-100 py-3"
                                type="submit"
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateClass;
