import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import * as classService from "../../services/classService";
import Path from "../../lib/paths";
import styles from "./SearchClass.module.css";
import ClassItem from "../classes/class-item/ClassItem";

const SearchClass = () => {
    const [recentClassItems, setRecentClassItems] = useState([]);
    const [searchClasses, setSearchClasses] = useState([]);
    const searchKey = useRef("");

    useEffect(() => {
        classService.getAllRecentClasses().then((res) => {
            setRecentClassItems(res);
        });
    }, []);

    const searchHandler = async (e) => {
        e.preventDefault();
        const title = searchKey.current.value;
        const result = await classService.searchClass(title);
        setSearchClasses(result);
    };
    return (
        <div className={`${styles["search-container"]}`}>
            <div className={`mb-5 mt-5 ${styles["search-box"]}`}>
                <div className="input-group w-50">
                    <input
                        type="text"
                        className="form-control p-3"
                        placeholder="Keyword"
                        ref={searchKey}
                    />
                    <button
                        onClick={searchHandler}
                        className="btn btn-primary px-4"
                    >
                        <i className="bi bi-search"></i>
                    </button>
                </div>
            </div>

            {searchClasses ? (
                searchClasses.map((item) => (
                    <ClassItem key={item._id} {...item} />
                ))
            ) : (
                <span>No results</span>
            )}

            <div className={`col-lg-2 mb-5 ${styles["recent-classes"]}`}>
                {!!recentClassItems.length && (
                    <>
                        <h3 className="text-uppercase mb-4">Recent Classes</h3>
                        <div className="bg-dark rounded p-4 d-inline-block">
                            {recentClassItems
                                .map((recentClasses) => (
                                    <div
                                        key={recentClasses._id}
                                        className="overflow-hidden mb-3 w-100"
                                    >
                                        <Link
                                            className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
                                            to={Path.ClassDetails.replace(
                                                ":classId",
                                                recentClasses._id
                                            )}
                                        >
                                            {recentClasses.title}
                                        </Link>
                                    </div>
                                ))
                                .reverse()}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default SearchClass;
