import React, { PropTypes } from "react";
import DropDown from ".";

const AvailablePathsDropDown = (props) => {
    return (
        <DropDown id="1" title="Available/Allowed Paths" width="100%">
            <div className="flex flex-col">
                <div className="font-bold mt-5 mb-2.5">Simple Paths</div>

                <code>http://localhost:8080/api/users</code>

                <div className="font-bold mt-5 mb-2.5">
                    Paths with Path Variables
                </div>
                <code>
                    http://localhost:8080/api/users/{"{}"}/orders/{"{}"}
                </code>

                <div className="font-bold mt-5 mb-2.5">
                    Paths with Query Parameters
                </div>
                <code>http://localhost:8080/api/users</code>
                <code className="mt-2.5">
                    No need to put the Query Parameters in the path, mocks give
                    responses based on the request value provided.
                </code>
                <code className="mt-2.5">
                    But you can provide the Query Parameters when sending
                    request, it won't effect the flow.
                </code>
            </div>
        </DropDown>
    );
};

AvailablePathsDropDown.propTypes = {};

export default AvailablePathsDropDown;
