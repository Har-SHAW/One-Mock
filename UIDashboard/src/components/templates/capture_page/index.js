import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const CaptureTemplate = (props) => {
    return (
        <div className="root">
            {props.navigation}
            {props.neck}
            {props.body}
        </div>
    );
};

CaptureTemplate.propTypes = {};

export default CaptureTemplate;
