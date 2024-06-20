import { useNavigate, useParams } from "react-router-dom";

import Path from "../../../lib/paths";
import { isEmptyObject } from "../../../utils/helperFunctions";
import useForm from "../../../hooks/useForm";
import * as classService from "../../../services/classService";

import styles from "./ClassEdit.module.css";
import Alert from "react-bootstrap/Alert";

const EditKeys = {
    Title: "title",
    Description: "description",
    PhoneNumber: "phone-number",
    Age: "age",
    Image: "image",
    Gender: "gender",
};

const ClassEdit = () => {
    const navigate = useNavigate();
    const { classId } = useParams("classId");

    const { values, errors, submitting, onChange, OnFormSubmit } = useForm(
        onEditHandler,
        {
            [EditKeys.Title]: "",
            [EditKeys.Description]: "",
            [EditKeys.PhoneNumber]: "",
            [EditKeys.Age]: "",
            [EditKeys.Image]: "",
            [EditKeys.Gender]: "male",
        },
        classId
    );

    async function onEditHandler(classData) {
        await classService.ediClass(classId, classData);
        navigate(Path.ClassDetails.replace(":classId", classId));
    }
    return (
        <div className={`col-lg-5 ${styles["edit-form"]}`}>
            <div className={styles["background-image"]}></div>
            <div className={`${styles["edit-form"]}`}>
                { errors.AllFieldsRequired &&
                    <Alert
                        className={styles.msg}
                        variant={`${!isEmptyObject(errors) && "danger"}`}
                    >
                        {errors.AllFieldsRequired}
                    </Alert>
                }

                <form className="bg-dark h-auto" onSubmit={OnFormSubmit}>
                    <h2 className="d-flex text-light justify-content-center pt-3 ">
                        Edit Class
                    </h2>
                    <div className={styles["edit-form-elements"]}>
                        <div className="col-5 pb-3 pt-3">
                            {errors.Title && (
                                <p className={styles.error}>{errors.Title}</p>
                            )}
                            <input
                                type="text"
                                className="form-control bg-light border-0 px-4"
                                name={EditKeys.Title}
                                placeholder="Title..."
                                value={values[EditKeys.Title]}
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
                                name={EditKeys.Description}
                                placeholder="Description..."
                                value={values[EditKeys.Description]}
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
                                name={EditKeys.PhoneNumber}
                                placeholder="Phone Number..."
                                value={values[EditKeys.PhoneNumber]}
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
                                name={EditKeys.Age}
                                placeholder="Age..."
                                value={values[EditKeys.Age]}
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
                                name={EditKeys.Image}
                                placeholder="Image..."
                                value={values[EditKeys.Image]}
                                onChange={onChange}
                            ></input>
                        </div>
                        <div className="col-5 pb-3 pt-3 d-flex text-light justify-content-between">
                            <div>
                                <input
                                    type="radio"
                                    name={EditKeys.Gender}
                                    value="male"
                                    checked={values[EditKeys.Gender] === "male"}
                                    onChange={onChange}
                                />
                                <label htmlFor="male" className="p-2">
                                    Male
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name={EditKeys.Gender}
                                    value="female"
                                    checked={
                                        values[EditKeys.Gender] === "female"
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
                                Edit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ClassEdit;
