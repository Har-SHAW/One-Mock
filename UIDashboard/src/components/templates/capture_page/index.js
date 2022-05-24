import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const CaptureTemplate = (props) => {
    return (
        <div className="root">
            {props.navigation}
            {props.neck}
            <div className="body"></div>
        </div>
    );
};

CaptureTemplate.propTypes = {};

export default CaptureTemplate;
