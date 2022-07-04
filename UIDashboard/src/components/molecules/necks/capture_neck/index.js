import React from "react";
import PropTypes from "prop-types";
import RefreshCaptureButton from "../../../atoms/refresh_capture_button";
import SlideSwitch from "../../../atoms/slide_switch";

const CaptureNeck = (props) => {
    return (
        <div className="neck flex flex-row justify-between items-center">
            <div className="flex justify-center items-center">
                <SlideSwitch
                    turnOn={props.capture}
                    onToggle={() => props.onToggle()}
                />
                <div className="w-3" />
                {props.capture ? (
                    <span className="font-acl text-onemock">Capture ON</span>
                ) : (
                    <span className="font-acl text-gray-500">Capture OFF</span>
                )}
            </div>
            <RefreshCaptureButton />
        </div>
    );
};

CaptureNeck.propTypes = {
    capture: PropTypes.bool,
    onToggle: PropTypes.func,
};

export default CaptureNeck;
