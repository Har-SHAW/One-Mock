import React from "react";
import PropTypes from "prop-types";
import { GlobalConstants } from "../../../constants/GlobalConstants";

const CreateMockTable = (props) => {
    return (
        <div className="input_3">
            <table>
                <thead>
                    <tr>
                        <th>As Header?</th>
                        <th>Request Value</th>
                        <th>Response Body</th>
                        <th>Body Format</th>
                        <th>Status Code</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {props.customResponseDtoSet.map((element, index) => (
                        <tr key={"tr_response_" + element.randomId}>
                            <td>
                                <div
                                    style={{
                                        display: "flex",
                                    }}
                                >
                                    <input
                                        type="checkbox"
                                        checked={element.isHeader}
                                        onChange={(value) =>
                                            props.onHeaderChange(value, index)
                                        }
                                    />
                                    <div
                                        style={{
                                            marginLeft: "10px",
                                        }}
                                    >
                                        {element.isHeader ? "Yes" : "No"}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        margin: "10px 10px 10px 10px",
                                    }}
                                >
                                    {element.isHeader ? (
                                        <label>
                                            Add a header to your request with
                                            the key{" "}
                                            <strong>
                                                <code>x-onemock</code>
                                            </strong>{" "}
                                            and put the value as entered
                                        </label>
                                    ) : (
                                        <label>
                                            Send the body of the request as
                                            entered
                                        </label>
                                    )}
                                    <div style={{ height: "10px" }}></div>
                                    <input
                                        style={{ width: "100%" }}
                                        placeholder={
                                            element.isHeader ? "value" : "body"
                                        }
                                        required
                                        type="text"
                                        maxLength="100"
                                        defaultValue={element.requestValue}
                                        onChange={(value) =>
                                            props.onRequestValueChange(
                                                value,
                                                index
                                            )
                                        }
                                    />
                                </div>
                            </td>
                            <td>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        margin: "10px 10px 10px 10px",
                                    }}
                                >
                                    <label>
                                        If the value matches with the given
                                        value the following body will be sent
                                    </label>
                                    <div style={{ height: "10px" }}></div>
                                    <a
                                        href=""
                                        onClick={(event) =>
                                            props.onShowBodyClick(
                                                event,
                                                element
                                            )
                                        }
                                    >
                                        <strong>
                                            <code>
                                                {element.responseBody == ""
                                                    ? "ENTER BODY"
                                                    : "SHOW BODY"}
                                            </code>
                                        </strong>
                                    </a>
                                </div>
                            </td>
                            <td>
                                <select
                                    defaultValue={element.format}
                                    onChange={(value) =>
                                        props.onFormatChange(value, index)
                                    }
                                >
                                    {GlobalConstants.AVAILABLE_FORMATS.map(
                                        (element, index) => (
                                            <option
                                                key={"format_option" + index}
                                                value={element}
                                            >
                                                {element}
                                            </option>
                                        )
                                    )}
                                </select>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    defaultValue={element.statusCode}
                                    onChange={(value) =>
                                        props.onStatusCodeChange(value, index)
                                    }
                                    min={200}
                                    max={500}
                                />
                            </td>
                            <td>
                                <button
                                    onClick={(event) => {
                                        event.preventDefault();
                                        props.deleteResponse(index);
                                    }}
                                >
                                    DELETE
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button style={{ margin: "2vh 0 0 0" }} onClick={props.addResponse}>
                Add Response
            </button>
        </div>
    );
};

CreateMockTable.propTypes = {
    addResponse: PropTypes.func,
    deleteResponse: PropTypes.func,
    customResponseDtoSet: PropTypes.array,
    onHeaderChange: PropTypes.func,
    onStatusCodeChange: PropTypes.func,
    onFormatChange: PropTypes.func,
    onRequestValueChange: PropTypes.func,
    onShowBodyClick: PropTypes.func,
};

export default CreateMockTable;
