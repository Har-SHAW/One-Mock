import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const MocksTemplate = (props) => {
    return (
        <div className="root">
            {props.navigation}
            {props.neck}
            {props.body}
        </div>
    );
};

MocksTemplate.propTypes = {
    navigation: PropTypes.element,
    neck: PropTypes.element,
    body: PropTypes.element,
};

export default MocksTemplate;
