import React from "react";
import PropTypes from "prop-types";

const RequestHeaders = (props) => {
    return (
        <div className="flex flex-col">
            <div className="bg-gray-500 text-white py-2.5 mt-1 font-bold rounded-tl-[15px] rounded-tr-[15px] w-[94%] text-center">
                Request Headers
            </div>
            <div className="mt-2.5">
                <table>
                    <thead>
                        <tr>
                            <th className="text-start underline">Key</th>
                            <th className="text-start underline">Value</th>
                        </tr>
                    </thead>
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
