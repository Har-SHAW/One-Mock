import React from "react";
import PropTypes from "prop-types";

const SlideSwitch = (props) => {
    return (
        <label className="switch">
            <input
                id="capture"
                defaultChecked={props.turnOn}
                type="checkbox"
                onChange={() => props.onToggle()}
            />
            <span className="slider round" />
        </label>
    );
};

SlideSwitch.propTypes = {
    turnOn: PropTypes.bool,
    onToggle: PropTypes.func,
};

export default SlideSwitch;
