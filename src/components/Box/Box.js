import React from "react";

import "./Box.css";

const Box = (props) => {
    return (
        <div class="nes-container with-title">
            <p class="title">{props.title}</p>
            {props.children}
        </div>
    )
};

export default Box;