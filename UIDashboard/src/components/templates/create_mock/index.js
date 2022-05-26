import React from "react";
import PropTypes from "prop-types";

const CreateMockTemplate = (props) => {
    return (
        <div className="root">
            {props.navigation}
            {props.body}
        </div>
    );
};

CreateMockTemplate.propTypes = {
    navigation: PropTypes.element,
    body: PropTypes.element,
};

export default CreateMockTemplate;
