import React from "react";
import PropTypes from "prop-types";

const RequestHeaders = (props) => {
    return (
        <div className="flex flex-col">
            <div className="bg-blue-500 text-white py-2.5 mt-1 font-bold rounded-tl-xl rounded-tr-xl w-[94%] text-center">
                Headers
            </div>
            <div className="mt-2.5">
                <table>
                    <tbody>
                        {props.headers.map((element, index) => (
                            <tr key={"request_header_" + index}>
                                <td>{element.key}</td>
                                <td>{element.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

RequestHeaders.propTypes = {
    headers: PropTypes.array,
};

export default RequestHeaders;
