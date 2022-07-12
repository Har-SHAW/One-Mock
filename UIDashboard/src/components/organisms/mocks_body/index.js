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
import MocksBodyTable from "../../molecules/mocks_body_table";
import DummyLoading from "../../atoms/dummy/loading_dummy";
import DummyMocksBody from "../../atoms/dummy/mocks_dummy";
import DummyMocksDetails from "../../atoms/dummy/mock_details_dummy";

const MocksBody = (props) => {
    const [fullMock, setFullMock] = useState(null);

    async function getFullMock(id) {
        setFullMock(await getFullMockApi(id));
        console.log(await getFullMockApi(id));
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
        return <DummyLoading />;
    } else if (props.mocksData.length == 0) {
        return <DummyMocksBody />;
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

                            <div className="flex flex-col">
                                <div className="w-[90%] flex justify-between mb-5">
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
                                    <MocksBodyTable
                                        fullMock={fullMock}
                                        popupOpen={props.popupOpen}
                                    />
                                ) : (
                                    <div className="flex flex-col">
                                        <label>
                                            <b>Status Code: </b>
                                            {fullMock.statusCode}
                                        </label>
                                        <div className="h-2" />
                                        <label>
                                            <strong>Format: </strong>
                                            {fullMock.format}
                                        </label>
                                        <div className="h-2" />
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
                            </div>
                        </div>
                    ) : (
                        <DummyMocksDetails />
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
