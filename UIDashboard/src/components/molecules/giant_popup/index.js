import React from "react";
import PropTypes from "prop-types";
import { formatRequestBody } from "../../../utils/formatter";
import { GlobalConstants } from "../../../constants/GlobalConstants";

const GiantPopup = (props) => {
    function onFormat() {
        const formatText = formatRequestBody(
            document.getElementById("popup_data").value,
            document.getElementById("body_format").value
        );
        if (formatText == null) {
            document.getElementById("format_error").innerHTML =
                "Error in formatting, the given input is not in " +
                document.getElementById("body_format").value +
                " format";
            document.getElementById("format_error").style =
                "visibility: visible;";

            return false;
        } else {
            document.getElementById("popup_data").value = formatText;
            document.getElementById("format_error").style =
                "visibility: hidden;";

            return true;
        }
    }
    return props.isOpen ? (
        <div
            className="flex justify-center items-center h-screen w-screen absolute z-20 top-0 left-0"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
            <div className="h-[95vh] w-[95vw] rounded-xl flex flex-col bg-teal-400">
                <div className="flex">
                    <div
                        id="format_error"
                        className="h-9 w-full bg-red-600 text-white font-bold font-mont rounded-tl-xl flex justify-center items-center"
                        style={{ visibility: "hidden" }}
                    >
                        Error in Format
                    </div>
                    <div
                        onClick={props.onClose}
                        className="w-16 h-9 self-end cursor-pointer bg-red-600 flex justify-center items-center text-white font-bold font-mont rounded-tr-xl"
                    >
                        X
                    </div>
                </div>
                {props.editable ? (
                    <div
                        className="h-[7vh] bg-white rounded-xl m-[1vw] flex justify-center items-center"
                        style={{ backgroundColor: "transparent" }}
                    >
                        <div className="h-[7vh] w-[78%] bg-white rounded-xl m-0 flex justify-around items-center font-mont font-bold">
                            <label>{props.title}</label>
                            <div>
                                <label className="font-bold">
                                    Body Format :{" "}
                                </label>
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
                            className="h-[7vh] w-[10%] bg-blue-600 text-white font-bold font-mont cursor-pointer rounded-xl m-[1vw] flex justify-center items-center"
                        >
                            Format
                        </div>
                        <div
                            onClick={() => {
                                if (onFormat()) {
                                    props.onDone([
                                        document.getElementById("popup_data")
                                            .value,
                                        document.getElementById("body_format")
                                            .value,
                                    ]);
                                }
                            }}
                            className="h-[7vh] w-[10%] bg-green-600 text-white cursor-pointer font-mont font-bold rounded-xl m-[1vw] flex justify-center items-center"
                        >
                            Done
                        </div>
                    </div>
                ) : (
                    <div className="h-[7vh] bg-white rounded-xl m-[1vw] flex justify-center items-center font-mont font-bold">
                        <label>{props.title}</label>
                    </div>
                )}

                {props.editable ? (
                    <textarea
                        id="popup_data"
                        className="bg-white overflow-auto p-7 rounded-xl w-[90vw] h-full mx-auto mb-4"
                        placeholder="Enter the Response Body"
                        style={{ resize: "none" }}
                        defaultValue={props.value}
                        spellCheck={false}
                    ></textarea>
                ) : (
                    <div className="bg-white overflow-auto p-7 rounded-xl w-[90vw] h-full mx-auto mb-4">
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
    onDone: PropTypes.func,
    value: PropTypes.string,
    format: PropTypes.string,
};

export default GiantPopup;
