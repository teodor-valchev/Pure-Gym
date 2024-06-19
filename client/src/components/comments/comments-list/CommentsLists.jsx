import { useContext, useEffect, useState } from "react";
import * as commentService from "../../../services/commentService";

import useForm from "../../hooks/useForm";
import CommentItem from "../comment-Item/CommentItem";
import styles from "./CommentsLists.module.css";
import { authContext } from "../../../context/authContext";

const CommentKeys = {
    Username: "username",
    Comment: "comment",
};

const CommentsLists = () => {
    const [comments, setComments] = useState([])
    const { isAuthenticated } = useContext(authContext);
    //validations
    const { values, errors, submitting, onChange, OnFormSubmit } = useForm(
        onSubmitCommentsHandler,
        {
            [CommentKeys.Username]: "",
            [CommentKeys.Comment]: "",
        }
    );

    const fetchComments = async () => {
    const data = await commentService.getAllComments()
    
    setComments((prevComments) => [...prevComments, ...data]);
    }  

    async function onSubmitCommentsHandler(commentData) {
        const newComment = await commentService.createComment(commentData);
        setComments((prevComments) => [...prevComments, newComment]);
    }

    useEffect(() => {
        fetchComments();
    }, [])
    
    return (
        <>
            <h3 className="text-uppercase mb-4">{comments.length} Comments</h3>
            {comments.map((comment) => (
                <CommentItem key={comment._id} {...comment} />
            ))}

            {isAuthenticated && (
                <div
                    className={`bg-dark rounded p-3 ${styles["comment-form"]}`}
                >
                    <form
                        onSubmit={OnFormSubmit}
                        className={styles["form-width"]}
                    >
                        <div className="row g-3 pt-2 mb-5">
                            <div className="col-12">
                                {errors.AllFieldsRequired && (
                                    <p className={styles.error}>
                                        {errors.AllFieldsRequired}
                                    </p>
                                )}
                                <input
                                    type="text"
                                    name={CommentKeys.Username}
                                    className="form-control bg-white border-0"
                                    placeholder="Your Name"
                                    onChange={onChange}
                                    value={values[CommentKeys.Username]}
                                />
                            </div>
                            <div className="col-12">
                                {errors.AllFieldsRequired && (
                                    <p className={styles.error}>
                                        {errors.AllFieldsRequired}
                                    </p>
                                )}
                                <textarea
                                    className="form-control bg-white border-0"
                                    rows={5}
                                    name={CommentKeys.Comment}
                                    placeholder="Comment"
                                    onChange={onChange}
                                    value={values[CommentKeys.Comment]}
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
            )}
        </>
    );
};

export default CommentsLists;
