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
                        <div className="col-12">
                            <nav aria-label="Page navigation">
                                <ul className="pagination pagination-lg justify-content-center m-0">
                                    <li className="page-item disabled">
                                        <a
                                            aria-label="Previous"
                                            className="page-link"
                                            href="#"
                                        >
                                            <span aria-hidden="true">
                                                <i className="bi bi-arrow-left" />
                                            </span>
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            2
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            3
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a
                                            aria-label="Next"
                                            className="page-link"
                                            href="#"
                                        >
                                            <span aria-hidden="true">
                                                <i className="bi bi-arrow-right" />
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mb-5">
                        <div className="input-group">
                            <input
                                className="form-control p-3"
                                placeholder="Keyword"
                                type="text"
                            />
                            <button className="btn btn-primary px-4">
                                <i className="bi bi-search" />
                            </button>
                        </div>
                    </div>
                    <div className="mb-5">
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
