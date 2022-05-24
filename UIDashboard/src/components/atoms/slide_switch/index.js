import React from "react";
import PropTypes from "prop-types";

const SlideSwitch = (props) => {
    return (
        <label className="switch">
            <input id="capture" defaultChecked={props.turnOn} type="checkbox" />
            <span className="slider round" />
        </label>
    );
};

SlideSwitch.propTypes = {
    turnOn: PropTypes.bool,
};

export default SlideSwitch;
