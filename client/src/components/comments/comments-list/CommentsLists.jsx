import { useContext, useEffect, useState } from "react";

import * as commentService from "../../../services/commentService";

import useForm from "../../../hooks/useForm";
import CommentItem from "../comment-Item/CommentItem";
import { authContext } from "../../../context/authContext";

import styles from "./CommentsLists.module.css";

const CommentKeys = {
    Username: "username",
    Comment: "comment",
};

const CommentsLists = ({
    classId
}) => {
    const [comments, setComments] = useState([]);
    const { isAuthenticated } = useContext(authContext);

        useEffect(() => {
            commentService
                .getAllComments(classId)
                .then((data) => setComments(data));
        }, [classId]);

    const { values, errors, onChange, OnFormSubmit } = useForm(
        onSubmitCommentsHandler,
        {
            [CommentKeys.Username]: "",
            [CommentKeys.Comment]: "",
        }
    );

    async function onSubmitCommentsHandler(commentData) {
        const newComment = await commentService.createComment(classId,commentData);
        setComments((prevComments) => [...prevComments, newComment]);
    }

    async function onClickDeleteHandler(comment_id) {
        await commentService.deleteComment(comment_id);
        setComments((prevComments) =>
            prevComments.filter((c) => c._id !== comment_id)
        );
    }


    return (
        <>
            <h3 className="text-uppercase mb-4">Comments</h3>
            {comments && comments.length > 0 ? (
                comments.map((comment) => (
                    <CommentItem
                        key={comment._id}
                        {...comment}
                        onClickDeleteHandler={onClickDeleteHandler}
                        comment_id={comment._id}
                    />
                ))
            ) : (
                <p className="text-uppercase mb-4">No comments yet...</p>
            )}

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
