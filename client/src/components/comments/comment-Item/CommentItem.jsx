import { useContext } from "react";
import { authContext } from "../../../context/authContext";
import * as commentService from "../../../services/commentService";

const CommentItem = ({ comment, username, _id, _ownerId }) => {
    const { user } = useContext(authContext);

    async function onClickDeleteHandler() {
        await commentService.deleteComment(_id);
    }

    console.log(user._id);

    console.log(_ownerId);
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
                        <a href="">{username}</a>{" "}
                        <small>
                            <i>01 Jan 2045</i>
                        </small>
                    </h6>
                    <p>{comment}</p>
                    {user?._id === _ownerId && (
                        <button onClick={onClickDeleteHandler}  className="btn btn-sm btn-secondary">
                            Delete
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CommentItem;
