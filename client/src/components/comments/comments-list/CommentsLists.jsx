
import CommentItem from '../comment-Item/CommentItem';
import styles from './CommentsLists.module.css'
const CommentsLists = () => {
    return (
        <>
            <CommentItem />

            <div className={`bg-dark rounded p-3 ${styles["comment-form"]}`}>
                <form className={styles["form-width"]}>
                    <div className="row g-3 pt-2 mb-5">
                        <div className="col-12">
                            <input
                                type="text"
                                className="form-control bg-white border-0"
                                placeholder="Your Name"
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
        </>
    );
}

export default CommentsLists;