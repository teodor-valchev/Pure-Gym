const CommentItem = ({
    comment,
    username
}) => {
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
                    <p>
                        {comment}
                    </p>
                    <button className="btn btn-sm btn-secondary">Reply</button>
                </div>
            </div>
        </div>
    );
}

export default CommentItem