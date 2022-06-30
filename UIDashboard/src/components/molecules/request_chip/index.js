import React from "react";
import PropTypes from "prop-types";

const RequestChip = (props) => {
    return (
        <div
            className="request w-[88%] h-[5vh] rounded-[15px] my-[0.5%] shadow-lg hover:shadow-xl flex flex-row justify-center align-center cursor-pointer"
            id={props.isSelected ? "selected_request" : "request"}
            style={{
                backgroundColor: props.secondaryColor,
                border: "2px solid " + props.color,
            }}
            onClick={() => props.onClick()}
        >
            <div
                className="rounded-l-xl text-white font-extrabold font-mont h-full text-center w-1/5 flex justify-center items-center"
                style={{
                    backgroundColor: props.color,
                }}
            >
                {props.method}
            </div>
            <div className="w-4/5 h-full flex items-center pl-[5%] font-mont font-medium text-xs">
                {props.path.replaceAll("/", " / ")}
            </div>
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
