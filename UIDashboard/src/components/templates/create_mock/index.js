import React from "react";
import PropTypes from "prop-types";

const CreateMockTemplate = (props) => {
    return (
        <div className="root">
            {props.navigation}
            {props.body}
            <div style={{ height: "10vh" }}></div>
        </div>
    );
};

CreateMockTemplate.propTypes = {
    navigation: PropTypes.element,
    body: PropTypes.element,
};

export default CreateMockTemplate;
