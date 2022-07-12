import React, { PropTypes } from "react";

const DummyMocksBody = (props) => {
    return (
        <div className="h-[80vh] w-screen flex flex-col justify-center items-center font-acl text-gray-500 text-[4rem]">
            <div>Nothing to Show</div>
            <div style={{ fontSize: "1.5rem" }}>
                Create a mock using the ' + ' button.
            </div>
        </div>
    );
};

DummyMocksBody.propTypes = {};

export default DummyMocksBody;
