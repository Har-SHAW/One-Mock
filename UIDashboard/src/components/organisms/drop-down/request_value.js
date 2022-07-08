import React, { PropTypes } from "react";
import DropDown from ".";

const RequestValueDropDown = (props) => {
    return (
        <DropDown
            id="request_value"
            title="What is Request Value ?"
            width="100%"
        >
            <div className="flex flex-col">
                <div className="font-bold mt-5 mb-2.5">Request Value</div>
                <code>
                    Request Value acts as a variable to send different responses
                    to the front-end, if the variable match the given request
                    value then the response present in the matched request value
                    column will be sent as the response.
                </code>
                <code className="mt-2.5">
                    If the <strong>As Header</strong> option is checked then the
                    request value must be sent as a header with key as{" "}
                    <strong>x-onemock</strong> and value as request value.
                </code>
                <code className="mt-2.5">
                    If the <strong>As Header</strong> option is not checked then
                    the request value must sent be as a body in the request.
                </code>
            </div>
        </DropDown>
    );
};

RequestValueDropDown.propTypes = {};

export default RequestValueDropDown;
