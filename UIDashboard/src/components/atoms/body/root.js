import React, { PropTypes } from "react";

const BodyRoot = (props) => {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center overflow-hidden relative">
            {props.children}
        </div>
    );
};

export default BodyRoot;
