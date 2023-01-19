import React from "react";
import PropTypes from "prop-types";
import BodyRoot from "../../atoms/body/root";

const CreateMockTemplate = (props) => {
    return (
        <BodyRoot>
            {props.navigation}
            {props.body}
        </BodyRoot>
    );
};

CreateMockTemplate.propTypes = {
    navigation: PropTypes.element,
    body: PropTypes.element,
};

export default CreateMockTemplate;
