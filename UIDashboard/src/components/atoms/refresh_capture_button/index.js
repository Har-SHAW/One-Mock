import React from "react";
import PropTypes from "prop-types";
import ReloadPng from "./reload.png";

const RefreshCaptureButton = (props) => {
    return (
        <div
            className="create_mocks"
            style={{ backgroundColor: "brown" }}
            onClick={props.onRefresh}
        >
            <img
                src={ReloadPng}
                style={{ color: "white", height: "9vh", width: "9vh" }}
            />
        </div>
    );
};

RefreshCaptureButton.propTypes = {
    onRefresh: PropTypes.func,
};

export default RefreshCaptureButton;
