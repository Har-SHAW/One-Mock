import React from "react";
import PropsTypes from "prop-types";

const RequestParams = (props) => {
    return (
        <div className="flex flex-col mt-10">
            <div className="bg-gray-500 w-[94%] text-white py-2.5 mt-1 font-bold rounded-tl-[15px] rounded-tr-[15px] text-center">
                Request Parameters
            </div>
            {props.params && props.params != "" ? (
                <div className="mt-2.5">
                    <table>
                        <thead>
                            <tr>
                                <th className="text-start underline">Key</th>
                                <th className="text-start underline">Values</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.params.split("&").map((element, index1) => (
                                <tr key={"request_param_" + index1}>
                                    {element.split("=").map((param, index2) => (
                                        <td
                                            key={
                                                "request_value" +
                                                index1 +
                                                "_" +
                                                index2
                                            }
                                        >
                                            {param}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="mt-2.5">No Request Parameters</div>
            )}
        </div>
    );
};

RequestParams.propTypes = {
    params: PropsTypes.string,
};

export default RequestParams;
