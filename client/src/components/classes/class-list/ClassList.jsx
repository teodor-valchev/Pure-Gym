import { useEffect, useState } from "react";

import * as classService from "../../../services/classService";
import ClassItem from "../class-item/ClassItem";

const ClassList = () => {
    const [classItems, setClassItems] = useState([]);

    useEffect(() => {
        classService.getAllClasses().then((res) => setClassItems(res));
    }, []);
    console.log(classItems);
    return (
        <div className="container-fluid p-5">
            <div className="row g-5">
                <div className="col-lg-8">
                    <div className="row g-5">
                        {classItems.map((item) => <ClassItem key={item._id} {...item} />)}
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
                        <h3 className="text-uppercase mb-4">Categories</h3>
                        <div className="d-flex flex-column justify-content-start bg-dark rounded p-4">
                            <a
                                className="fs-5 fw-bold text-light text-uppercase mb-2"
                                href="#"
                            >
                                <i className="bi bi-arrow-right text-primary me-2" />
                                Web Design
                            </a>
                            <a
                                className="fs-5 fw-bold text-light text-uppercase mb-2"
                                href="#"
                            >
                                <i className="bi bi-arrow-right text-primary me-2" />
                                Web Development
                            </a>
                            <a
                                className="fs-5 fw-bold text-light text-uppercase mb-2"
                                href="#"
                            >
                                <i className="bi bi-arrow-right text-primary me-2" />
                                Web Development
                            </a>
                            <a
                                className="fs-5 fw-bold text-light text-uppercase mb-2"
                                href="#"
                            >
                                <i className="bi bi-arrow-right text-primary me-2" />
                                Keyword Research
                            </a>
                            <a
                                className="fs-5 fw-bold text-light text-uppercase"
                                href="#"
                            >
                                <i className="bi bi-arrow-right text-primary me-2" />
                                Email Marketing
                            </a>
                        </div>
                    </div>
                    <div className="mb-5">
                        <h3 className="text-uppercase mb-4">Recent Post</h3>
                        <div className="bg-dark rounded p-4">
                            <div className="d-flex overflow-hidden mb-3">
                                <img
                                    alt=""
                                    className="img-fluid flex-shrink-0 rounded-start"
                                    src="img/blog-1.jpg"
                                    style={{
                                        width: "75px",
                                    }}
                                />
                                <a
                                    className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
                                    href=""
                                >
                                    Sed amet tempor amet sit kasd sea lorem
                                </a>
                            </div>
                            <div className="d-flex overflow-hidden mb-3">
                                <img
                                    alt=""
                                    className="img-fluid flex-shrink-0 rounded-start"
                                    src="img/blog-2.jpg"
                                    style={{
                                        width: "75px",
                                    }}
                                />
                                <a
                                    className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
                                    href=""
                                >
                                    Sed amet tempor amet sit kasd sea lorem
                                </a>
                            </div>
                            <div className="d-flex overflow-hidden mb-3">
                                <img
                                    alt=""
                                    className="img-fluid flex-shrink-0 rounded-start"
                                    src="img/blog-3.jpg"
                                    style={{
                                        width: "75px",
                                    }}
                                />
                                <a
                                    className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
                                    href=""
                                >
                                    Sed amet tempor amet sit kasd sea lorem
                                </a>
                            </div>
                            <div className="d-flex overflow-hidden mb-3">
                                <img
                                    alt=""
                                    className="img-fluid flex-shrink-0 rounded-start"
                                    src="img/blog-1.jpg"
                                    style={{
                                        width: "75px",
                                    }}
                                />
                                <a
                                    className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
                                    href=""
                                >
                                    Sed amet tempor amet sit kasd sea lorem
                                </a>
                            </div>
                            <div className="d-flex overflow-hidden">
                                <img
                                    alt=""
                                    className="img-fluid flex-shrink-0 rounded-start"
                                    src="img/blog-2.jpg"
                                    style={{
                                        width: "75px",
                                    }}
                                />
                                <a
                                    className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
                                    href=""
                                >
                                    Sed amet tempor amet sit kasd sea lorem
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <h3 className="text-uppercase mb-4">Tag Cloud</h3>
                        <div className="d-flex flex-wrap m-n1">
                            <a className="btn btn-dark m-1" href="">
                                Design
                            </a>
                            <a className="btn btn-dark m-1" href="">
                                Development
                            </a>
                            <a className="btn btn-dark m-1" href="">
                                Marketing
                            </a>
                            <a className="btn btn-dark m-1" href="">
                                SEO
                            </a>
                            <a className="btn btn-dark m-1" href="">
                                Writing
                            </a>
                            <a className="btn btn-dark m-1" href="">
                                Consulting
                            </a>
                            <a className="btn btn-dark m-1" href="">
                                Design
                            </a>
                            <a className="btn btn-dark m-1" href="">
                                Development
                            </a>
                            <a className="btn btn-dark m-1" href="">
                                Marketing
                            </a>
                            <a className="btn btn-dark m-1" href="">
                                SEO
                            </a>
                            <a className="btn btn-dark m-1" href="">
                                Writing
                            </a>
                            <a className="btn btn-dark m-1" href="">
                                Consulting
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-uppercase mb-4">Plain Text</h3>
                        <div
                            className="bg-dark rounded text-center text-light"
                            style={{
                                padding: "30px",
                            }}
                        >
                            <p>
                                Vero sea et accusam justo dolor accusam lorem
                                consetetur, dolores sit amet sit dolor clita
                                kasd justo, diam accusam no sea ut tempor magna
                                takimata, amet sit et diam dolor ipsum amet diam
                            </p>
                            <a className="btn btn-primary py-2 px-4" href="">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassList;
