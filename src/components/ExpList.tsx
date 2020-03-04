import React from "react";
import ExpComp from "./ExpComp";
import { xpData } from "../data";
import { Experience } from "../types";


function ExpList(props: any) {

    const xpType = props.xpType;
    let filteredData: Experience[] = xpData.filter(d => d.type === xpType);
    filteredData = filteredData.reverse();

    return (
        <>
            {filteredData.map((d: any) =>
                <ExpComp key={d.id} type={d.type} title={d.title} time={d.time} content={d.content} addContent={d.additionalContent}></ExpComp>
            )}
        </>
    )
}

export default ExpList;