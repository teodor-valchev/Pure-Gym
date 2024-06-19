import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Path from "../../../lib/paths";
import * as classService from "../../../services/classService";
import ClassItem from "../class-item/ClassItem";

const ClassList = () => {
    const [classItems, setClassItems] = useState([]);

    useEffect(() => {
        classService.getAllClasses().then((res) => setClassItems(res));
    }, []);
    return (
        <div className="container-fluid p-5">
            <div className="row g-5">
                <div className="col-lg-8">
                    <div className="row g-5">
                        {classItems.map((item) => (
                            <ClassItem key={item._id} {...item} />
                        ))}
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="">
                        <h3 className="text-uppercase mb-4">Recent Classes</h3>
                        <div className="bg-dark rounded p-4">
                            {classItems
                                .slice(-3)
                                .reverse()
                                .map((recentClasses) => (
                                    <div
                                        key={recentClasses._id}
                                        className="d-flex overflow-hidden mb-3"
                                    >
                                        <Link
                                            className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
                                            to={Path.ClassDetails.replace(
                                                ":id",
                                                recentClasses._id
                                            )}
                                        >
                                            {recentClasses.title}
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassList;
