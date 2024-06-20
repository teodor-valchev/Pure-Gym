import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { dateTransform } from "../../../utils/helperFunctions";
import Path from "../../../lib/paths";

const ClassItem = ({ _createdOn, image, title, _id }) => {
    const [date, setDate] = useState([]);
    useEffect(() => {
        setDate(dateTransform(_createdOn));
    }, [_createdOn]);

    return (
        <div className="col-md-6">
            <div className="blog-item">
                <div className="position-relative overflow-hidden rounded-top">
                    <img alt="photo" className="img-fluid" src={image} style={{width: '31rem'}} />
                </div>
                <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                    <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                        <span>{date.day}</span>
                        <h6 className="text-light text-uppercase mb-0">
                            {date.month}
                        </h6>
                        <span>{date.year}</span>
                    </div>
                    <Link
                        className="h5 text-uppercase text-light"
                        to={Path.ClassDetails.replace(":classId", _id)}
                    >
                        {title}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ClassItem;
