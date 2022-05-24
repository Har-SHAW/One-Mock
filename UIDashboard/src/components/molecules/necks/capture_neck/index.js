import React from "react";
import PropTypes from "prop-types";
import RefreshCaptureButton from "../../../atoms/refresh_capture_button";
import SlideSwitch from "../../../atoms/slide_switch";

const CaptureNeck = (props) => {
    return (
        <div className="neck">
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <SlideSwitch turnOn={props.capture} />

                <div style={{ width: "10px" }} />

                {props.capture ? (
                    <span
                        style={{ fontFamily: '"Aclonica"', color: "#0085FF" }}
                    >
                        Capture ON
                    </span>
                ) : (
                    <span style={{ fontFamily: '"Aclonica"', color: "grey" }}>
                        Capture OFF
                    </span>
                )}
            </div>

            <RefreshCaptureButton />
        </div>
    );
};

CaptureNeck.propTypes = {
    capture: PropTypes.bool,
};

export default CaptureNeck;
