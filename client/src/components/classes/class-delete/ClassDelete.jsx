
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import * as classService from "../../../services/classService";
import { useNavigate } from "react-router-dom";
import Path from "../../../lib/paths";

const DeleteModal = ({ handleClose, handleShow, title, id }) => {
    const navigate = useNavigate()
    async function onDeleteHandler() {
        await classService.deleteClass(id)
        navigate(Path.Classes)
    }
    return (
        <>
            <Modal show={handleShow} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Delete Class</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete <b>{title}</b>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant="secondary">
                        No
                    </Button>
                    <Button onClick={onDeleteHandler} variant="primary">
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DeleteModal
