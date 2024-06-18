const CommentItem = () => {
    return (
        <div className="mb-3">
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
                        Diam amet duo labore stet elitr invidunt ea clita ipsum
                        voluptua, tempor labore accusam ipsum et no at. Kasd
                        diam tempor rebum magna dolores sed eirmod
                    </p>
                    <button className="btn btn-sm btn-secondary">Reply</button>
                </div>
            </div>
        </div>
    );
}

export default CommentItem