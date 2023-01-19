import React, { PropTypes } from "react";

const LeftBody = (props) => {
    return (
        <div id="main_scroll" className="h-full w-1/2 overflow-auto">
            {props.children}
        </div>
    );
};

export default LeftBody;
