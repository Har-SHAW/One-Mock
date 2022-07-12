import React, { PropTypes } from "react";
import { coloredFormatRequestBody } from "../../../utils/formatter";

const MocksBodyTable = (props) => {
    return (
        <div>
            <table className="w-[90%]">
                <thead>
                    <tr className="underline">
                        <th className="text-start">isHeader</th>
                        <th className="text-start">Request Value</th>
                        <th className="text-start">Response Body</th>
                        <th className="text-start">Body Format</th>
                        <th className="text-start">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {props.fullMock.customResponseDtoSet.map(
                        (element, index) => (
                            <tr key={"request_" + index}>
                                <td>{element.isHeader ? "Yes" : "No"}</td>
                                <td>{element.requestValue}</td>
                                <td>
                                    <a
                                        className="text-lg"
                                        href=""
                                        onClick={(event) => {
                                            event.preventDefault();
                                            props.popupOpen(
                                                coloredFormatRequestBody(
                                                    element.responseBody,
                                                    element.format
                                                )
                                            );
                                        }}
                                    >
                                        <strong>
                                            <code>SHOW BODY</code>
                                        </strong>
                                    </a>
                                </td>
                                <td>{element.format}</td>
                                <td>{element.statusCode}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
};

MocksBodyTable.propTypes = {};

export default MocksBodyTable;
