import React, { PropTypes } from "react";

const LeftBody = (props) => {
    return (
        <div className="h-full w-1/2 flex flex-col items-center overflow-auto">
            {props.children}
        </div>
    );
};

export default LeftBody;
