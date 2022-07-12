import React, { PropTypes } from "react";

const DummyRequestDetails = (props) => {
    return (
        <div className="h-[80vh] w-full flex flex-col justify-center items-center font-acl text-gray-500 text-5xl bg-gray-200">
            <div>Request Details</div>
            <div className="h-5"></div>
            <div style={{ fontSize: "1.5rem" }}>
                Select a Request to show details.
            </div>
        </div>
    );
};

DummyRequestDetails.propTypes = {};

export default DummyRequestDetails;
