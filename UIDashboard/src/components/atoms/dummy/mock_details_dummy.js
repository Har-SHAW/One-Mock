import React, { PropTypes } from "react";

const DummyMocksDetails = (props) => {
    return (
        <div className="h-[80vh] w-full flex flex-col justify-center items-center font-acl text-gray-500 text-5xl bg-gray-200">
            <div>Mock Details</div>
            <div className="h-5"></div>
            <div style={{ fontSize: "1.5rem" }}>
                Select a Mock to show details.
            </div>
        </div>
    );
};

DummyMocksDetails.propTypes = {};

export default DummyMocksDetails;
