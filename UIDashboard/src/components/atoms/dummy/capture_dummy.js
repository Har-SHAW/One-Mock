import React, { PropTypes } from "react";

const DummyCaptureBody = (props) => {
    return (
        <div className="h-[80vh] w-screen flex flex-col justify-center items-center font-acl text-gray-500 text-[4rem]">
            <div>Nothing to Show</div>
            <div className="mt-5" style={{ fontSize: "1.5rem" }}>
                Turn ON the capture and call the server to start capturing
                requests.
            </div>
            <div className="mt-2" style={{ fontSize: "1.5rem" }}>
                Click on refresh button to refresh the requests.
            </div>
        </div>
    );
};

DummyCaptureBody.propTypes = {};

export default DummyCaptureBody;
