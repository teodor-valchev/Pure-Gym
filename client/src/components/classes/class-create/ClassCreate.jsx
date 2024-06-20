import { useNavigate } from "react-router-dom";

import Path from "../../../lib/paths";
import { isEmptyObject } from "../../../utils/helperFunctions";
import useForm from "../../../hooks/useForm";
import * as classService from "../../../services/classService";

import Alert from "react-bootstrap/Alert";
import styles from "./ClassCreate.module.css";

const CreateKeys = {
    Title: "title",
    Description: "description",
    PhoneNumber: "phone-number",
    Age: "age",
    Image: "image",
    Gender: "gender",
};

const ClassCreate = () => {
    const navigate = useNavigate();
    const { values, errors, submitting, onChange, OnFormSubmit } = useForm(
        onCreateHandler,
        {
            [CreateKeys.Title]: "",
            [CreateKeys.Description]: "",
            [CreateKeys.PhoneNumber]: "",
            [CreateKeys.Age]: "",
            [CreateKeys.Image]: "",
            [CreateKeys.Gender]: "male",
        }
    );

    async function onCreateHandler(classData) {
        await classService.createClass(classData);
        navigate(Path.Classes);
    }
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
                        {errors.AllFieldsRequired}
                    </Alert>
                )}

                <form className="bg-dark h-auto" onSubmit={OnFormSubmit}>
                    <h2 className="d-flex text-light justify-content-center pt-3 ">
                        Create Class
                    </h2>
                    <div className={styles["create-form-elements"]}>
                        <div className="col-5 pb-3 pt-3">
                            {errors.Title && (
                                <p className={styles.error}>{errors.Title}</p>
                            )}
                            <input
                                type="text"
                                className="form-control bg-light border-0 px-4"
                                name={CreateKeys.Title}
                                placeholder="Title..."
                                value={values[CreateKeys.Title]}
                                onChange={onChange}
                            />
                        </div>
                        <div className="col-5 pb-3 pt-3">
                            {errors.Description && (
                                <p className={styles.error}>
                                    {errors.Description}
                                </p>
                            )}
                            <textarea
                                type="text"
                                className="form-control bg-light border-0 px-4"
                                name={CreateKeys.Description}
                                placeholder="Description..."
                                value={values[CreateKeys.Description]}
                                onChange={onChange}
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
                                value={values[CreateKeys.PhoneNumber]}
                                onChange={onChange}
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
                                onChange={onChange}
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
                                onChange={onChange}
                            ></input>
                        </div>
                        <div className="col-5 pb-3 pt-3 d-flex text-light justify-content-between">
                            <div>
                                <input
                                    type="radio"
                                    name={CreateKeys.Gender}
                                    value="male"
                                    checked={
                                        values[CreateKeys.Gender] === "male"
                                    }
                                    onChange={onChange}
                                />
                                <label htmlFor="male" className="p-2">
                                    Male
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name={CreateKeys.Gender}
                                    value="female"
                                    checked={
                                        values[CreateKeys.Gender] === "female"
                                    }
                                    onChange={onChange}
                                />
                                <label htmlFor="female" className="p-2">
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

export default ClassCreate;
