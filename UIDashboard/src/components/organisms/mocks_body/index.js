import React, { useState } from "react";
import PropTypes from "prop-types";
import RequestChip from "../../molecules/request_chip";
import { GlobalConstants } from "../../../constants/GlobalConstants";
import DeleteEditBar from "../../molecules/delete_edit_bar";
import { deleteMockApi, getFullMockApi } from "../../../apis/mocks_api";

const MocksBody = (props) => {
    const [fullMock, setFullMock] = useState(null);

    async function getFullMock(id) {
        setFullMock(await getFullMockApi(id));
    }

    async function deleteMock(id) {
        const response = await deleteMockApi(id);
        if (response.status == true) {
            location.reload();
        }
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
            <div className="body">
                <div className="left_body">
                    {props.mocksData.map((element, index) => (
                        <RequestChip
                            key={"request_chip_" + index}
                            color={
                                GlobalConstants.methods_color[element.method]
                            }
                            duration={element.duration}
                            isSelected={false}
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
                </div>
                <div className="right_body">
                    {fullMock ? (
                        <div>
                            <DeleteEditBar
                                onDeleteClick={() => {
                                    deleteMock(fullMock.id);
                                }}
                                onEditClick={() => {
                                    console.log(fullMock.id);
                                }}
                            />
                            <div style={{ height: "3vh" }}></div>
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

                                <div style={{ height: "2vh" }}></div>

                                {fullMock.hasMultipleResponse ? (
                                    <div>
                                        <table style={{ width: "100%" }}>
                                            <thead>
                                                <tr>
                                                    <th>isHeader</th>
                                                    <th>Request Value</th>
                                                    <th>Response Body</th>
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
                                                                {
                                                                    element.responseBody
                                                                }
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
                                        <label>
                                            <b>Response Body: </b>
                                            {fullMock.responseBody}
                                        </label>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div>No Mock Selected</div>
                    )}
                </div>
            </div>
        );
    }
};

MocksBody.propTypes = {
    mocksData: PropTypes.array,
    fullMock: PropTypes.object,
    deleteIndex: PropTypes.func,
};

export default MocksBody;
