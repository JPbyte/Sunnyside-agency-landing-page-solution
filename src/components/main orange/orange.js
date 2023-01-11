import React from "react";
import {DivOrange} from "./style";
import Arrow from "../images/icon-arrow-down.svg"

function Orange() {
    return (
        <DivOrange>
            <h1>WE ARE CREATIVES</h1>
                <img src={Arrow} animat alt="arrow"/>
        </DivOrange>
    )
}

export default Orange;