import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import { formatRequestBody } from "../../../utils/formatter";
import { GlobalConstants } from "../../../constants/GlobalConstants";

const GiantPopup = (props) => {
    function onFormat() {
        document.getElementById("popup_data").value = formatRequestBody(
            document.getElementById("popup_data").value,
            document.getElementById("body_format").value
        );
    }
    return props.isOpen ? (
        <div className="giant_popup_background">
            <div className="giant_popup">
                <div onClick={props.onClose} className="close_popup">
                    X
                </div>
                {props.editable ? (
                    <div
                        className="popup_title"
                        style={{ backgroundColor: "transparent" }}
                    >
                        <div
                            className="popup_title"
                            style={{
                                width: "78%",
                                backgroundColor: "white",
                                margin: "0",
                            }}
                        >
                            <label>{props.title}</label>
                            <div>
                                <label>Body Format: </label>
                                <select
                                    id="body_format"
                                    defaultValue={props.format}
                                >
                                    {GlobalConstants.AVAILABLE_FORMATS.map(
                                        (element, index) => (
                                            <option
                                                key={
                                                    "popup_format_option" +
                                                    index
                                                }
                                                value={element}
                                            >
                                                {element}
                                            </option>
                                        )
                                    )}
                                </select>
                            </div>
                        </div>
                        <div
                            onClick={onFormat}
                            className="popup_title"
                            style={{
                                width: "10%",
                                backgroundColor: "blue",
                                margin: "0 0 0 1%",
                                color: "white",
                                fontWeight: 800,
                                fonFamily: '"Montserrat", sans-serif',
                                fontSize: "1.1rem",
                                cursor: "pointer",
                            }}
                        >
                            Format
                        </div>
                        <div
                            onClick={() => {
                                props.onDone([
                                    document.getElementById("popup_data").value,
                                    document.getElementById("body_format")
                                        .value,
                                ]);
                            }}
                            className="popup_title"
                            style={{
                                width: "10%",
                                backgroundColor: "green",
                                margin: "0 0 0 1%",
                                color: "white",
                                fontWeight: 800,
                                fonFamily: '"Montserrat", sans-serif',
                                fontSize: "1.1rem",
                                cursor: "pointer",
                            }}
                        >
                            Done
                        </div>
                    </div>
                ) : (
                    <div className="popup_title">
                        <label>{props.title}</label>
                    </div>
                )}

                {props.editable ? (
                    <textarea
                        id="popup_data"
                        className="popup_body"
                        placeholder="Enter the Response Body"
                        style={{ resize: "none" }}
                        defaultValue={props.value}
                        spellCheck={false}
                    ></textarea>
                ) : (
                    <div className="popup_body">
                        <div
                            dangerouslySetInnerHTML={{ __html: props.body }}
                        ></div>
                    </div>
                )}
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
    title: PropTypes.string,
    editable: PropTypes.bool,
    onFormatChange: PropTypes.func,
    onDone: PropTypes.func,
    value: PropTypes.string,
    format: PropTypes.string,
};

export default GiantPopup;
