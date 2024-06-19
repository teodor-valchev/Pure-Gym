import { useContext } from "react";
import { authContext } from "../../../context/authContext";

const CommentItem = ({
    comment,
    username,
    _ownerId,
    onClickDeleteHandler,
    comment_id,
}) => {
    const { user } = useContext(authContext);

    function onCommentHandler(e) {
        const commentId = e.currentTarget.getAttribute("data-commentid");
        onClickDeleteHandler(commentId);
    }

    return (
        <div className="mb-3">
            <div className="d-flex mb-4">
                <img
                    src="img/user.jpg"
                    className="img-fluid rounded"
                    style={{ width: 45, height: 45 }}
                />
                <div className="ps-3">
                    <h6>
                        <a href="">{username}</a>
                        <small>
                            <i>01 Jan 2045</i>
                        </small>
                    </h6>
                    <p>{comment}</p>
                    {user?._id === _ownerId && (
                        <button
                            onClick={onCommentHandler}
                            className="btn btn-sm btn-secondary"
                            data-commentid={`${comment_id}`}

                        >
                            Delete
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CommentItem;
