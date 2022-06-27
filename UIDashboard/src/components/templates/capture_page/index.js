import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import BodyRoot from "../../atoms/body/root";

const CaptureTemplate = (props) => {
    return (
        <BodyRoot>
            {props.navigation}
            {props.neck}
            {props.body}
        </BodyRoot>
    );
};

CaptureTemplate.propTypes = {};

export default CaptureTemplate;
