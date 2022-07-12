import React, { PropTypes } from "react";

const DummyLoading = (props) => {
    return (
        <div className="h-[80vh] w-screen flex flex-col justify-center items-center font-acl text-gray-500 text-[4rem]">
            <div>Loading ...</div>
            <div style={{ fontSize: "1.5rem" }}>
                If this takes longer than expected, please restart the server.
            </div>
        </div>
    );
};

DummyLoading.propTypes = {};

export default DummyLoading;
