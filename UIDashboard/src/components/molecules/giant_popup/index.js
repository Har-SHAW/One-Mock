import React from "react";
import PropTypes from "prop-types";

const GiantPopup = (props) => {
    return props.isOpen ? (
        <div
            style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                height: "100vh",
                width: "100vw",
                zIndex: "20",
                backgroundColor: "rgba(0, 0, 0, 0.25)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    height: "90vh",
                    width: "90vw",
                    backgroundColor: "white",
                    borderRadius: "1vh",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <button
                    onClick={props.onClose}
                    style={{ width: "5%", alignSelf: "flex-end" }}
                >
                    Close
                </button>
                <pre>{props.body}</pre>
            </div>
        </div>
    ) : (
        <div></div>
    );
};

GiantPopup.propTypes = {
    onClose: PropTypes.func,
    isOpen: PropTypes.bool,
    body: PropTypes.string,
};

export default GiantPopup;
