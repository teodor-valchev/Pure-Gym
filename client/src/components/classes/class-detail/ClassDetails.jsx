import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import * as classService from "../../../services/classService";
import Path from "../../../lib/paths";
import { dateTransform } from "../../../utils/helperFunctions";

import styles from './ClassDetails.module.css'
import { authContext } from "../../../context/authContext";
import DeleteModal from "../class-delete/ClassDelete";

const ClassDetails = () => {
    const { id } = useParams('id')
    const {user} = useContext(authContext)
    const [currentClass, setCurrentClass] = useState({})
    const [showDeleteModal, setDeleteModal] = useState(false)
    const [date, setDate] = useState([]);
    
    useEffect(() => {
        classService.getSingleClass(id)
            .then((res) => {
                setCurrentClass(res)
                setDate(dateTransform(res._createdOn));
            });
    }, [id])

    console.log(date);

    console.log(user);

    const handleClose = () => setDeleteModal(false);
    const handleShow = () => setDeleteModal(true);

    return (
        <>
            {showDeleteModal && (
                <DeleteModal
                    handleClose={handleClose}
                    handleShow={handleShow}
                    title={currentClass.title}
                    id={id}
                />
            )}
            {/* Hero Start */}
            <div className="container-fluid bg-primary p-5 bg-hero mb-5">
                <div className="row py-5">
                    <div className="col-12 text-center">
                        <h1 className="display-2 text-uppercase text-white mb-md-4">
                            Class Detail
                        </h1>
                        <Link
                            to={Path.Home}
                            className="btn btn-primary py-md-3 px-md-5 me-3"
                        >
                            Home
                        </Link>
                    </div>
                </div>
            </div>
            {/* Hero End */}
            {/* Blog Start */}
            <div className="container-fluid p-5">
                <div className="row g-5">
                    <div className="col-lg-8">
                        {/* Blog Detail Start */}
                        <div className="mb-5">
                            <img
                                className="img-fluid w-100 rounded mb-5"
                                src={currentClass.image}
                                alt=""
                            />
                            <h1 className="text-uppercase mb-4">
                                {currentClass.title}
                            </h1>
                            <p>{currentClass.description}</p>
                        </div>
                        {/* Blog Detail End */}
                        {/* Comment List Start */}
                        <div className="mb-5">
                            <h3 className="text-uppercase mb-4">3 Comments</h3>
                            <div className="d-flex mb-4">
                                <img
                                    src="img/user.jpg"
                                    className="img-fluid rounded"
                                    style={{ width: 45, height: 45 }}
                                />
                                <div className="ps-3">
                                    <h6>
                                        <a href="">John Doe</a>{" "}
                                        <small>
                                            <i>01 Jan 2045</i>
                                        </small>
                                    </h6>
                                    <p>
                                        Diam amet duo labore stet elitr invidunt
                                        ea clita ipsum voluptua, tempor labore
                                        accusam ipsum et no at. Kasd diam tempor
                                        rebum magna dolores sed eirmod
                                    </p>
                                    <button className="btn btn-sm btn-secondary">
                                        Reply
                                    </button>
                                </div>
                            </div>
                            <div className="d-flex mb-4">
                                <img
                                    src="img/user.jpg"
                                    className="img-fluid rounded"
                                    style={{ width: 45, height: 45 }}
                                />
                                <div className="ps-3">
                                    <h6>
                                        <a href="">John Doe</a>{" "}
                                        <small>
                                            <i>01 Jan 2045</i>
                                        </small>
                                    </h6>
                                    <p>
                                        Diam amet duo labore stet elitr invidunt
                                        ea clita ipsum voluptua, tempor labore
                                        accusam ipsum et no at. Kasd diam tempor
                                        rebum magna dolores sed eirmod
                                    </p>
                                    <button className="btn btn-sm btn-secondary">
                                        Reply
                                    </button>
                                </div>
                            </div>
                            <div className="d-flex ms-5 mb-4">
                                <img
                                    src="img/user.jpg"
                                    className="img-fluid rounded"
                                    style={{ width: 45, height: 45 }}
                                />
                                <div className="ps-3">
                                    <h6>
                                        <a href="">John Doe</a>{" "}
                                        <small>
                                            <i>01 Jan 2045</i>
                                        </small>
                                    </h6>
                                    <p>
                                        Diam amet duo labore stet elitr invidunt
                                        ea clita ipsum voluptua, tempor labore
                                        accusam ipsum et no at. Kasd diam tempor
                                        rebum magna dolores sed eirmod
                                    </p>
                                    <button className="btn btn-sm btn-secondary">
                                        Reply
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Comment List End */}
                        {/* Comment Form Start */}
                        <div className="bg-dark rounded p-5">
                            <h3 className="text-light text-uppercase mb-4">
                                Leave a comment
                            </h3>
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <input
                                            type="text"
                                            className="form-control bg-white border-0"
                                            placeholder="Your Name"
                                            style={{ height: 55 }}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input
                                            type="email"
                                            className="form-control bg-white border-0"
                                            placeholder="Your Email"
                                            style={{ height: 55 }}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <input
                                            type="text"
                                            className="form-control bg-white border-0"
                                            placeholder="Website"
                                            style={{ height: 55 }}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <textarea
                                            className="form-control bg-white border-0"
                                            rows={5}
                                            placeholder="Comment"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <button
                                            className="btn btn-primary w-100 py-3"
                                            type="submit"
                                        >
                                            Leave Your Comment
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* Comment Form End */}
                    </div>
                    {/* Sidebar Start */}
                    <div className="col-lg-4">
                        {/* Search Form Start */}
                        <div className="mb-5">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control p-3"
                                    placeholder="Keyword"
                                />
                                <button className="btn btn-primary px-4">
                                    <i className="bi bi-search" />
                                </button>
                            </div>
                        </div>
                        {/* Search Form End */}
                        {/* Category Start */}
                        <div className="mb-5">
                            <h3 className="text-uppercase mb-4">
                                Class Details
                            </h3>
                            <div className="d-flex flex-column justify-content-start bg-dark rounded p-4">
                                <p className="fs-5 fw-bold text-light text-uppercase mb-2">
                                    <i className="bi bi-arrow-right text-primary me-2" />
                                    Gender: {currentClass.gender}
                                </p>
                                <p className="fs-5 fw-bold text-light text-uppercase mb-2">
                                    <i className="bi bi-arrow-right text-primary me-2" />
                                    Phone number: {currentClass["phone-number"]}
                                </p>
                                <p className="fs-5 fw-bold text-light text-uppercase mb-2">
                                    <i className="bi bi-arrow-right text-primary me-2" />
                                    Preferred Age: {currentClass.age}+
                                </p>
                                <p className="fs-5 fw-bold text-light text-uppercase mb-2">
                                    <i className="bi bi-arrow-right text-primary me-2" />
                                    Start's On: {date.year}/{date.month}/
                                    {date.day}
                                </p>
                            </div>
                        </div>
                        {/* Category End */}
                        {/* Recent Post Start */}
                        <div className="mb-5">
                            <h3 className="text-uppercase mb-4">
                                Owner of Class: {currentClass.owner?.username}
                            </h3>
                            {currentClass._ownerId === user._id && (
                                <div className="bg-dark rounded p-3 w-50">
                                    <div className={styles["owner-container"]}>
                                        <a
                                            href=""
                                            className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
                                        >
                                            Edit
                                        </a>

                                        <button
                                            type="button"
                                            onClick={handleShow}
                                            className={`d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0 ${styles['delete-button']}`}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* Recent Post End */}
                    </div>
                    {/* Sidebar End */}
                </div>
            </div>
        </>
    );
}

export default ClassDetails