import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import * as classService from "../../services/classService";
import Path from "../../lib/paths";


const SearchClass = () => {
    const [recentClassItems, setRecentClassItems] = useState([]);

    useEffect(() => {
        classService
            .getAllRecentClasses()
            .then((res) => {
                setRecentClassItems(res);
            })
    }, []);
    return (
        <div className="col-lg-4">
            {!!recentClassItems.length && (
                <>
                    <h3 className="text-uppercase mb-4">Recent Classes</h3>
                    <div className="bg-dark rounded p-4">
                        {recentClassItems
                            .map((recentClasses) => (
                                <div
                                    key={recentClasses._id}
                                    className="d-flex overflow-hidden mb-3"
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
    );
};

export default SearchClass;