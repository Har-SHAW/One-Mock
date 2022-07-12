import React, { PropTypes } from "react";

const LeftBody = (props) => {
    return (
        <div
            id="main_scroll"
            className="h-full w-1/2 overflow-auto"
            // onScroll={(event) => {
            //     const { scrollTop, scrollHeight, clientHeight } = event.target;
            //     if (scrollTop + clientHeight >= scrollHeight) {
            //         console.log("end");
            //     }
            // }}
        >
            {props.children}
        </div>
    );
};

export default LeftBody;
