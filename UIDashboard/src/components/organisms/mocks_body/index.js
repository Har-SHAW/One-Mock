import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import RequestChip from "../../molecules/request_chip";
import { GlobalConstants } from "../../../constants/GlobalConstants";
import DeleteEditBar from "../../molecules/delete_edit_bar";
import { deleteMockApi, getFullMockApi } from "../../../apis/mocks_api";
import { coloredFormatRequestBody } from "../../../utils/formatter";
import Body from "../../atoms/body/body";
import LeftBody from "../../atoms/body/left_body";
import RightBody from "../../atoms/body/right_body";

const MocksBody = (props) => {
    const [fullMock, setFullMock] = useState(null);

    // useEffect(async () => {
    //     if (fullMock == null && !props.loading) {
    //         const response = await getFullMockApi(props.mocksData[0].id);
    //         setFullMock(response);
    //     }
    // });

    async function getFullMock(id) {
        setFullMock(await getFullMockApi(id));
    }

    async function deleteMock(id) {
        const response = await deleteMockApi(id);
        if (response.status == true) {
            location.reload();
        }
    }

    async function updateMock(id) {
        location.href = "mocks_update/" + id;
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
    } else if (props.mocksData.length == 0) {
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
                    {props.mocksData.map((element, index) => (
                        <RequestChip
                            key={"request_chip_" + index}
                            color={
                                GlobalConstants.methods_color[element.method]
                            }
                            duration={element.duration}
                            isSelected={fullMock && element.id == fullMock.id}
                            id={element.id}
                            method={element.method}
                            path={element.path}
                            secondaryColor={
                                GlobalConstants.methods_secondary_color[
                                    element.method
                                ]
                            }
                            onClick={() => getFullMock(element.id)}
                        />
                    ))}
                </LeftBody>
                <RightBody>
                    {fullMock ? (
                        <div>
                            <DeleteEditBar
                                onDeleteClick={() => {
                                    deleteMock(fullMock.id);
                                }}
                                onEditClick={() => {
                                    updateMock(fullMock.id);
                                }}
                            />
                            <div className="mb-5"></div>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <div
                                    style={{
                                        width: "90%",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginBottom: "1%",
                                    }}
                                >
                                    <label>
                                        <b>Method: </b>
                                        {fullMock.method}
                                    </label>
                                    <label>
                                        <b>Duration: </b>
                                        {fullMock.duration + " "}
                                        seconds
                                    </label>
                                </div>

                                <label>
                                    <b>Path: </b>
                                    {fullMock.path}
                                </label>

                                <div className="bg-gray-500 mt-10 mb-5 text-white py-2.5 font-bold rounded-tl-[15px] rounded-tr-[15px] w-[94%] text-center">
                                    Mock Response Body
                                </div>

                                {fullMock.hasMultipleResponse ? (
                                    <div>
                                        <table style={{ width: "100%" }}>
                                            <thead>
                                                <tr>
                                                    <th>isHeader</th>
                                                    <th>Request Value</th>
                                                    <th>Response Body</th>
                                                    <th>Body Format</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {fullMock.customResponseDtoSet.map(
                                                    (element) => (
                                                        <tr>
                                                            <td>
                                                                {element.isHeader
                                                                    ? "Yes"
                                                                    : "No"}
                                                            </td>
                                                            <td>
                                                                {
                                                                    element.requestValue
                                                                }
                                                            </td>
                                                            <td>
                                                                <a
                                                                    href=""
                                                                    onClick={(
                                                                        event
                                                                    ) => {
                                                                        event.preventDefault();
                                                                        props.popupOpen(
                                                                            coloredFormatRequestBody(
                                                                                element.responseBody,
                                                                                element.format
                                                                            )
                                                                        );
                                                                    }}
                                                                >
                                                                    SHOW BODY
                                                                </a>
                                                            </td>
                                                            <td>
                                                                {element.format}
                                                            </td>
                                                            <td>
                                                                {
                                                                    element.statusCode
                                                                }
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <label>
                                            <b>Status Code: </b>
                                            {fullMock.statusCode}
                                        </label>
                                        <div style={{ height: "1vh" }} />
                                        <label>
                                            <strong>Format: </strong>
                                            {fullMock.format}
                                        </label>
                                        <div style={{ height: "1vh" }} />
                                        <a
                                            className="text-lg"
                                            href=""
                                            onClick={(event) => {
                                                event.preventDefault();
                                                props.popupOpen(
                                                    coloredFormatRequestBody(
                                                        fullMock.responseBody,
                                                        fullMock.format
                                                    )
                                                );
                                            }}
                                        >
                                            <strong>
                                                <code>SHOW BODY</code>
                                            </strong>
                                        </a>
                                    </div>
                                )}
                                <div className="bg-gray-500 mt-10 mb-5 text-white py-2.5 font-bold rounded-tl-[15px] rounded-tr-[15px] w-[94%] text-center">
                                    Mock Headers
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="h-full w-full flex flex-col justify-center items-center font-acl text-gray-500 text-5xl bg-gray-200">
                            <div>Mock Details</div>
                            <div className="h-5"></div>
                            <div style={{ fontSize: "1.5rem" }}>
                                Select a Mock to show details.
                            </div>
                        </div>
                    )}
                </RightBody>
            </Body>
        );
    }
};

MocksBody.propTypes = {
    mocksData: PropTypes.array,
    fullMock: PropTypes.object,
    deleteIndex: PropTypes.func,
};

export default MocksBody;
