import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import GiantPopup from "../../molecules/giant_popup";

const MocksTemplate = (props) => {
    return (
        <div className="root">
            {props.popup}
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
    popup: PropTypes.element,
};

export default MocksTemplate;
