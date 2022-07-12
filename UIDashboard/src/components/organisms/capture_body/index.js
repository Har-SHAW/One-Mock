import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../../styles.css";
import Body from "../../atoms/body/body";
import LeftBody from "../../atoms/body/left_body";
import RequestChip from "../../molecules/request_chip";
import { GlobalConstants } from "../../../constants/GlobalConstants";
import RightBody from "../../atoms/body/right_body";
import { getFullRequestApi } from "../../../apis/capture_api";
import RequestDetails from "../../molecules/request_details";
import { coloredFormatRequestBody } from "../../../utils/formatter";
import DummyLoading from "../../atoms/dummy/loading_dummy";
import DummyCaptureBody from "../../atoms/dummy/capture_dummy";
import DummyRequestDetails from "../../atoms/dummy/request_details_dummy";

const CaptureBody = (props) => {
    const [fullRequest, setFullRequest] = useState(null);

    async function getFullRequest(id) {
        setFullRequest(await getFullRequestApi(id));
    }

    if (props.loading) {
        return <DummyLoading />;
    } else if (props.requestsData.length == 0) {
        return <DummyCaptureBody />;
    } else {
        return (
            <Body>
                <LeftBody>
                    {props.requestsData.map((element, index) => (
                        <RequestChip
                            key={"capture_chip_" + index}
                            color={
                                GlobalConstants.methods_color[element.method]
                            }
                            isSelected={
                                fullRequest && element.id == fullRequest.id
                            }
                            id={element.id}
                            method={element.method}
                            path={element.path}
                            secondaryColor={
                                GlobalConstants.methods_secondary_color[
                                    element.method
                                ]
                            }
                            onClick={() => getFullRequest(element.id)}
                        />
                    ))}
                </LeftBody>
                <RightBody>
                    {fullRequest != null ? (
                        <div className="flex flex-col">
                            <RequestDetails request={fullRequest} />
                            <div className="bg-gray-500 mt-10 text-white py-2.5 font-bold rounded-tl-[15px] rounded-tr-xl w-[94%] text-center">
                                Request Body
                            </div>
                            {fullRequest.body && fullRequest.body != "" ? (
                                <div>
                                    <a
                                        className="mt-2.5 text-lg"
                                        href=""
                                        onClick={(event) => {
                                            event.preventDefault();
                                            props.popupOpen(
                                                coloredFormatRequestBody(
                                                    fullRequest.body,
                                                    fullRequest.headers.filter(
                                                        (e) =>
                                                            e.key.toLowerCase() ==
                                                            "content-type"
                                                    )[0].value
                                                )
                                            );
                                        }}
                                    >
                                        <strong>
                                            <code>SHOW BODY</code>
                                        </strong>
                                    </a>
                                    <label className="ml-10">
                                        <strong className="underline">
                                            Format:
                                        </strong>{" "}
                                        {
                                            fullRequest.headers.filter(
                                                (e) =>
                                                    e.key.toLowerCase() ==
                                                    "content-type"
                                            )[0].value
                                        }
                                    </label>
                                </div>
                            ) : (
                                <div className="text-black mt-2.5">
                                    EMPTY BODY
                                </div>
                            )}
                        </div>
                    ) : (
                        <DummyRequestDetails />
                    )}
                </RightBody>
            </Body>
        );
    }
};

CaptureBody.propTypes = {
    loading: PropTypes.bool,
    requestsData: PropTypes.array,
};

export default CaptureBody;
