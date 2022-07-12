import React from "react";
import PropTypes from "prop-types";

const NavigationBar = (props) => {
    return (
        <div className="flex text-white font-acl text-[20px] justify-center items-center h-[10vh] w-screen bg-onemock font-bold">
            <div className="flex w-[60%] justify-between">
                <div
                    className="cursor-pointer"
                    onClick={() => (location.href = "/home")}
                >
                    Home
                </div>
                <div
                    className="cursor-pointer"
                    onClick={() => (location.href = "/capture")}
                >
                    Capture
                </div>
                <div
                    className="cursor-pointer"
                    onClick={() => (location.href = "/mocks")}
                >
                    Mock Api's
                </div>
                <div
                    className="cursor-pointer"
                    onClick={() =>
                        window.open("https://github.com/Har-SHAW/One-Mock")
                    }
                >
                    Github
                </div>
            </div>
        </div>
    );
};

NavigationBar.propTypes = {};

export default NavigationBar;
