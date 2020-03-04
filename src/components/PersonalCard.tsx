import React from "react";
import '../common.scss';
import { Card } from "react-bootstrap";
// import { ReactComponent as DragSymbol } from '../drag-icon.svg';

function PersonalCard(props: any) {
    // let drag: any;

    // if (props.isDraggable) {
    //     drag = <DragSymbol className="drag-symbol" />
    // }

    return (
        <div className="card-personalized">
            <Card>
                <Card.Body>
                    <div className="title-text">
                        <span className="title-hashtag"># </span>
                        <span className="title-actual">{props.title}</span>
                        {/* {drag} */}
                    </div>
                    <div className="about-content">
                        {props.content}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PersonalCard;