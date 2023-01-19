import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import BodyRoot from "../../atoms/body/root";

const CaptureTemplate = (props) => {
    return (
        <BodyRoot>
            {props.popup}
            {props.navigation}
            {props.neck}
            {props.body}
        </BodyRoot>
    );
};

CaptureTemplate.propTypes = {
    popup: PropTypes.element,
    navigation: PropTypes.element,
    neck: PropTypes.element,
    body: PropTypes.element,
};

export default CaptureTemplate;
