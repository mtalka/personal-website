import React from "react";

function ExpComp(props: any) {
    let time: any;
    let content: any;

    if (props.time) {
        time = <div className="exp-time">{props.time}</div>
    }

    if (props.content) {
        content = <div className="exp-content">{props.content}</div>
    }

    return (
        <div className="exp">
            <div className="exp-title">
                <span className="asterisk">* </span><span>{props.title}</span>
            </div>
            {time}
            {content}
        </div>
    )
}

export default ExpComp;