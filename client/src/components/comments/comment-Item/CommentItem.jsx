import { useContext, useEffect, useState } from "react";

import { authContext } from "../../../context/authContext";
import { dateTransform } from "../../../utils/helperFunctions";

const CommentItem = ({
    comment,
    username,
    _ownerId,
    onClickDeleteHandler,
    comment_id,
    _createdOn,
}) => {
    const { user } = useContext(authContext);
    const [date, setDate] = useState({});

    useEffect(() => {
        setDate(dateTransform(_createdOn));
    }, []);

    function onCommentHandler(e) {
        const commentId = e.currentTarget.getAttribute("data-commentid");
        onClickDeleteHandler(commentId);
    }

    return (
        <div className="mb-3">
            <div className="d-flex mb-4">
                <img
                    src="/img/user.jpg"
                    className="img-fluid rounded"
                    style={{ width: 45, height: 45 }}
                    alt="profile img"
                />
                <div className="ps-3">
                    <h6>
                        <p>{username}</p>
                        <small>
                            <i style={{ padding: "5px" }}>
                                {date.year}/{date.month}/{date.day}
                            </i>
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
