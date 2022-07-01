import React from "react";
import PropTypes from "prop-types";

const CancelCreateBar = (props) => {
    return (
        <div>
            <div className="flex flex-row w-full">
                <div
                    className="delete_button"
                    onClick={() => props.onCancelClick()}
                >
                    CANCEL
                </div>
                <div
                    className="edit_button"
                    onClick={() => props.onSubmitClick()}
                >
                    {props.submitText}
                </div>
            </div>
        </div>
    );
};

CancelCreateBar.propTypes = {
    onCancelClick: PropTypes.func,
    onSubmitClick: PropTypes.func,
    submitText: PropTypes.string,
};

export default CancelCreateBar;
