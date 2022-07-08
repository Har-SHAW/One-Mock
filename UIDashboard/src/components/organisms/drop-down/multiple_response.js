import React, { PropTypes } from "react";
import DropDown from ".";

const MultipleResponseDropDown = (props) => {
    return (
        <DropDown
            id="multiple"
            title="What is Multiple Response ?"
            width="100%"
        >
            <div className="flex flex-col">
                <div className="font-bold mt-5 mb-2.5">Mutiple Response</div>
                <code>
                    If the multiple response checkbox is checked then the mock
                    will be configured to return different responses from the
                    same endpoint based on the request value sent to the server.
                </code>
                <code className="mt-2.5">
                    Click on the <strong>Add Response</strong> button to add
                    responses to the mock.
                </code>
                <code className="mt-2.5">
                    If the box is unchecked then the mock will be configured to
                    send only one response everytime even though the request
                    value is sent to the server.
                </code>
            </div>
        </DropDown>
    );
};

MultipleResponseDropDown.propTypes = {};

export default MultipleResponseDropDown;
