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

const CaptureBody = (props) => {
    const [fullRequest, setFullRequest] = useState(null);

    async function getFullRequest(id) {
        setFullRequest(await getFullRequestApi(id));
    }

    if (props.loading) {
        return (
            <div className="empty_body">
                <div>Loading ...</div>
                <div style={{ fontSize: "1.5rem" }}>
                    Create a mock using the ' + ' button.
                </div>
            </div>
        );
    } else if (props.requestsData.length == 0) {
        return (
            <div className="empty_body">
                <div>Nothing to Show</div>
                <div style={{ fontSize: "1.5rem" }}>
                    Create a mock using the ' + ' button.
                </div>
            </div>
        );
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
                        <RequestDetails request={fullRequest} />
                    ) : (
                        <div>no</div>
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
