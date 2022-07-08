import React, { PropTypes } from "react";
import DropDown from ".";

const DurationDropDown = (props) => {
    return (
        <DropDown id="duration" title="What is Duration ?" width="100%">
            <div className="flex flex-col">
                <div className="font-bold mt-5 mb-2.5">Duration</div>
                <code>
                    The duration is considered as <code>seconds</code>, which
                    means the server will wait for the given number of seconds
                    before giving the response.
                </code>
                <code className="mt-2.5">
                    This feature will help us to test the front-end's server
                    process time or loading/progress functionality.
                </code>
            </div>
        </DropDown>
    );
};

DurationDropDown.propTypes = {};

export default DurationDropDown;
