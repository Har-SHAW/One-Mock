import React from "react";
import PropTypes from "prop-types";

const NavigationBar = (props) => {
    return (
        <div className="nav">
            <div className="buttons">
                <div
                    className="nav_button"
                    onClick={() => (location.href = "/home")}
                >
                    Home
                </div>
                <div
                    className="nav_button"
                    onClick={() => (location.href = "/capture")}
                >
                    Capture
                </div>
                <div
                    className="nav_button"
                    onClick={() => (location.href = "/mocks")}
                >
                    Mock Api's
                </div>
                <div
                    className="nav_button"
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
