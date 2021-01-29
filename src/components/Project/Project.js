import React from "react";

import Box from "../Box/Box";

const Project = (props) => {
    return (
        <div className={"project-info"}>
            <Box title={props.title}>
                {props.children}
            </Box>
        </div>
    )
};

export default Project;