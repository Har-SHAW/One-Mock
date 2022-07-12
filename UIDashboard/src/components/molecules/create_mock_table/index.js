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
                                <div className="flex flex-col justify-center items-center m-[10px]">
                                    <div className="flex px-2.5 py-1.5">
                                        <input
                                            type="checkbox"
                                            checked={element.isHeader}
                                            onChange={(value) =>
                                                props.onHeaderChange(
                                                    value,
                                                    index
                                                )
                                            }
                                        />
                                        <div className="ml-[10px]">
                                            {element.isHeader ? "Yes" : "No"}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex flex-col justify-center items-center m-[10px]">
                                    <input
                                        className="px-2.5 py-1.5 border border-black border-solid"
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
                                <div className="flex flex-col justify-center items-center m-[10px]">
                                    <div className="w-full flex justify-center items-center">
                                        <a
                                            className="border border-black border-solid py-1.5 px-2.5 w-full text-center"
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
                                </div>
                            </td>
                            <td>
                                <div className="flex flex-col justify-center items-center m-[10px]">
                                    <select
                                        className="px-2.5 py-1.5 w-full border border-black border-solid"
                                        defaultValue={element.format}
                                        onChange={(value) =>
                                            props.onFormatChange(value, index)
                                        }
                                    >
                                        {GlobalConstants.AVAILABLE_FORMATS.map(
                                            (element, index) => (
                                                <option
                                                    key={
                                                        "format_option" + index
                                                    }
                                                    value={element}
                                                >
                                                    {element}
                                                </option>
                                            )
                                        )}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div className="flex flex-col justify-center items-center m-[10px]">
                                    <input
                                        className="px-2.5 py-1.5 border border-black border-solid"
                                        type="number"
                                        defaultValue={element.statusCode}
                                        onChange={(value) =>
                                            props.onStatusCodeChange(
                                                value,
                                                index
                                            )
                                        }
                                        min={200}
                                        max={500}
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="flex flex-col justify-center items-center m-[10px]">
                                    <div>
                                        <button
                                            onClick={(event) => {
                                                event.preventDefault();
                                                props.deleteResponse(index);
                                            }}
                                        >
                                            DELETE
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="ml-[2vh]" onClick={props.addResponse}>
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
