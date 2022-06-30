import React, { PropTypes } from "react";

const RightBody = (props) => {
    return (
        <div className="h-full w-1/2 flex flex-col overflow-auto px-[1.5%]">
            {props.children}
        </div>
    );
};

export default RightBody;
