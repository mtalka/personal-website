import React from "react";
import ReactDOM from "react-dom";
import PersonalCard from "./PersonalCard";
import * as dragula from "react-dragula";
import { ExperienceType } from "../types";
import ExpList from "./ExpList"
// eslint-disable-next-line
import styles from 'dragula/dist/dragula.css';

export class DraggableSection extends React.Component {


    render() {
        return (
            <div className="draggable-list">
                <div className="draggablecontainer">
                    <PersonalCard
                        isDraggable
                        title="Work"
                        content={<ExpList xpType={ExperienceType.Work}></ExpList>}
                    />
                </div>
                <div className="draggablecontainer">
                    <PersonalCard
                        isDraggable
                        title="Certicates and courses"
                        content={<ExpList xpType={ExperienceType.Course}></ExpList>} />
                </div>
                <div className="draggablecontainer">
                    <PersonalCard
                        isDraggable
                        title="Hobbies"
                        content={<ExpList xpType={ExperienceType.Hobby}></ExpList>}
                    />
                </div>
                <div className="draggablecontainer">
                    <PersonalCard
                        isDraggable
                        title="School"
                        content={<ExpList xpType={ExperienceType.School}></ExpList>}
                    />
                </div>
                <div className="draggablecontainer">
                    <PersonalCard
                        isDraggable
                        title="Projects"
                        content={<ExpList xpType={ExperienceType.Project}></ExpList>}
                    />
                </div>
            </div>
        )
    }

    componentDidMount() {
        var draggablecontainer = ReactDOM.findDOMNode(this);
        dragula([draggablecontainer]);
    }
}

export default DraggableSection;