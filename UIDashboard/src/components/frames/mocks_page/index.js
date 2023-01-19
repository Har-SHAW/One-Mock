import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import BodyRoot from "../../atoms/body/root";

const MocksTemplate = (props) => {
    return (
        <BodyRoot>
            {props.popup}
            {props.navigation}
            {props.neck}
            {props.body}
        </BodyRoot>
    );
};

MocksTemplate.propTypes = {
    navigation: PropTypes.element,
    neck: PropTypes.element,
    body: PropTypes.element,
    popup: PropTypes.element,
};

export default MocksTemplate;
