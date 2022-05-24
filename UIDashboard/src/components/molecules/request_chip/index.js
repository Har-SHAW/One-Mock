import React from "react";
import PropTypes from "prop-types";

const RequestChip = (props) => {
    return (
        <div
            className="request"
            id={props.isSelected ? "selected_request" : "request"}
            style={{
                backgroundColor: props.secondaryColor,
                border: "2px solid " + props.color,
            }}
            onClick={() => props.onClick()}
        >
            <div
                className="method"
                style={{
                    backgroundColor: props.color,
                }}
            >
                {props.method}
            </div>
            <div className="path">{props.path.replaceAll("/", " / ")}</div>
            {/* <div className="time_stamp">{props.duration}</div> */}
        </div>
    );
};

RequestChip.propTypes = {
    method: PropTypes.string,
    path: PropTypes.string,
    duration: PropTypes.number,
    color: PropTypes.string,
    secondaryColor: PropTypes.string,
    id: PropTypes.number,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func,
};

export default RequestChip;
