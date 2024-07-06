import { useEffect, useState } from "react";

import * as classService from "../../../services/classService";
import ClassItem from "../class-item/ClassItem";
import LoadingSpinner from "../../loading-spinner/LoadingSpinner";

import styles from "./ClassList.module.css";

const ClassList = () => {
    const [classItems, setClassItems] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        classService
            .getAllClasses()
            .then((res) => {
                setClassItems(res);
            })
            .finally(() => setShowSpinner(false));
    }, []);
    return (
        <div className="container-fluid p-5">
            {showSpinner && <LoadingSpinner />}
            <div className="row g-5">
                <div className="col-lg-8">
                    <div className="row g-5">
                        {classItems.length ? (
                            classItems.map((item) => (
                                <ClassItem key={item._id} {...item} />
                            ))
                        ) : (
                            <p className={styles["no-classes-message"]}>
                                No classes yet...
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassList;
