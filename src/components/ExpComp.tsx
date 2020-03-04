import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { ExperienceType } from "../types";

function ExpComp(props: any) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let time: any;
    let content: any;
    let modal: any;

    if (props.time) {
        time = <div className="exp-time">{props.time}</div>
    }

    if (props.content) {
        content = <div className="exp-content">{props.content}</div>
    }

    if (props.type === ExperienceType.Work || props.type === ExperienceType.School) {
        modal =
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <div className="modal-title">{props.title}, {props.content}<br />{props.time}</div>
                    </Modal.Header>
                    <Modal.Body>{props.addContent}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            X
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
    }

    return (
        <>
            <div className="exp" onClick={handleShow}>
                <div className="exp-title">
                    <span className="asterisk">* </span><span>{props.title}</span>
                </div>
                {time}
                {content}
            </div>
            {modal}
        </>
    )
}

export default ExpComp;