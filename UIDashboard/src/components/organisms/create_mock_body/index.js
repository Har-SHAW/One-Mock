import React, { useState, useEffect } from "react";
import {
    createMockApi,
    getFullMockApi,
    updateMockApi,
} from "../../../apis/mocks_api";
import { GlobalConstants } from "../../../constants/GlobalConstants";
import { deformatRequestBody } from "../../../utils/deformatter";
import CreateMockTable from "../../molecules/create_mock_table";
import GiantPopup from "../../molecules/giant_popup";

const CreateMocksBody = (props) => {
    const [state, setState] = useState({
        method: GlobalConstants.methods[0],
        path: "",
        duration: 0,
        hasMultipleResponse: false,
        responseBody: "",
        statusCode: 200,
        format: GlobalConstants.AVAILABLE_FORMATS[0],
        customResponseDtoSet: [
            {
                randomId: randomId,
                requestValue: "",
                isHeader: true,
                responseBody: "",
                format: GlobalConstants.AVAILABLE_FORMATS[0],
                statusCode: 200,
            },
        ],
    });

    const [popupOpen, setPopupOpen] = useState(false);
    const [popupData, setPopupData] = useState();
    const [loading, setLoading] = useState(props.updateId ? true : false);
    const [randomId, setRandomId] = useState(0);

    useEffect(async () => {
        if (props.updateId && state.path == "") {
            const response = await getFullMockApi(props.updateId);
            setState(response);
            setLoading(false);
        }
    });

    async function addMock(event) {
        if (document.getElementById("main_form").checkValidity()) {
            event.preventDefault();
            console.log(state.customResponseDtoSet);
            const response = await createMockApi(state);
            if (response.status) {
                location.href = "/mocks";
            }
        }
    }

    async function updateMock(event) {
        if (document.getElementById("main_form").checkValidity()) {
            event.preventDefault();
            console.log(state);
            const response = await updateMockApi(props.updateId, state);
            if (response.status) {
                location.href = "/mocks";
            }
        }
    }

    function addResponse(event) {
        if (document.getElementById("main_form").checkValidity()) {
            event.preventDefault();
            setRandomId(randomId + 1);
            setState({
                ...state,
                customResponseDtoSet: [
                    ...state.customResponseDtoSet,
                    {
                        randomId: randomId,
                        requestValue: "",
                        isHeader: true,
                        responseBody: "",
                        format: GlobalConstants.AVAILABLE_FORMATS[0],
                        statusCode: 200,
                    },
                ],
            });
        }
    }

    function deleteResponse(index) {
        console.log(index);
        if (state.customResponseDtoSet.length > 1) {
            state.customResponseDtoSet.splice(index, 1);
            setState({
                ...state,
                customResponseDtoSet: [...state.customResponseDtoSet],
            });
        }
    }

    function openPopup(element) {
        setPopupOpen(true);
        setPopupData(element);
        setLoading(true);
    }

    if (loading) {
        return (
            <div>
                <GiantPopup
                    isOpen={popupOpen}
                    onClose={() => {
                        setPopupOpen(false);
                        setLoading(false);
                    }}
                    body={popupOpen ? popupData.responseBody : ""}
                    title={popupOpen ? popupData.requestBody : ""}
                    editable={true}
                    onDone={(value) => {
                        if (popupOpen) {
                            popupData.responseBody = value[0].replaceAll(
                                " ",
                                ""
                            );
                            popupData.responseBody =
                                popupData.responseBody.replaceAll("\n", "");
                            console.log(value[1]);
                            popupData.format = value[1];
                            setPopupOpen(false);
                            setLoading(false);
                        }
                    }}
                    value={popupOpen ? popupData.responseBody : ""}
                    format={popupOpen ? popupData.format : ""}
                    onFormatChange={(value) => {
                        console.log(value.target.value);
                    }}
                />
            </div>
        );
    } else {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "90vh",
                    overflow: "scroll",
                }}
            >
                <form id="main_form">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "90vw",
                            margin: "2vw 5vw 0 5vw",
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                margin: "2vh 0 2vh 0",
                            }}
                        >
                            <div>
                                <label>Method: </label>
                                <select
                                    defaultValue={state.method}
                                    onChange={(value) => {
                                        state.method = value.target.value;
                                    }}
                                    required
                                >
                                    {GlobalConstants.methods.map(
                                        (element, index) => (
                                            <option
                                                key={"option_" + index}
                                                value={element}
                                            >
                                                {element}
                                            </option>
                                        )
                                    )}
                                </select>
                            </div>

                            <div>
                                <label>Path: </label>
                                <input
                                    style={{ width: "60vw" }}
                                    placeholder="Path"
                                    type="text"
                                    defaultValue={state.path}
                                    onChange={(value) => {
                                        state.path = value.target.value;
                                    }}
                                    required
                                />
                            </div>

                            <div>
                                <label>Duration: </label>
                                <input
                                    placeholder="Duration"
                                    type="number"
                                    defaultValue={state.duration}
                                    onChange={(value) => {
                                        state.duration = value.target.value;
                                    }}
                                    min={0}
                                    max={10}
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                margin: "2vh 0 2vh 0",
                            }}
                        >
                            <label>Has Multiple Response?</label>
                            <input
                                type="checkbox"
                                checked={state.hasMultipleResponse}
                                onChange={(value) => {
                                    setState({
                                        ...state,
                                        hasMultipleResponse:
                                            value.target.checked,
                                    });
                                }}
                            />
                        </div>

                        {state.hasMultipleResponse ? (
                            <CreateMockTable
                                customResponseDtoSet={
                                    state.customResponseDtoSet
                                }
                                addResponse={addResponse}
                                deleteResponse={deleteResponse}
                                onFormatChange={(value, index) => {
                                    state.customResponseDtoSet[index].format =
                                        value.target.value;
                                }}
                                onHeaderChange={(value, index) => {
                                    const nextState = {
                                        ...state,
                                        customResponseDtoSet: [
                                            ...state.customResponseDtoSet,
                                        ],
                                    };
                                    nextState.customResponseDtoSet[
                                        index
                                    ].isHeader = value.target.checked;

                                    setState(nextState);
                                }}
                                onRequestValueChange={(value, index) => {
                                    state.customResponseDtoSet[
                                        index
                                    ].requestValue = value.target.value;
                                }}
                                onStatusCodeChange={(value, index) => {
                                    state.customResponseDtoSet[
                                        index
                                    ].statusCode = value.target.value;
                                }}
                                onShowBodyClick={(event, element) => {
                                    event.preventDefault();
                                    console.log(element);
                                    openPopup(element);
                                }}
                            />
                        ) : (
                            <div
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    margin: "2vh 0 2vh 0",
                                }}
                            >
                                <div>
                                    <label>Status Code: </label>
                                    <input
                                        type="number"
                                        placeholder="Status Code"
                                        defaultValue={state.statusCode}
                                        min={200}
                                        max={500}
                                        onChange={(value) => {
                                            state.statusCode =
                                                value.target.value;
                                        }}
                                    />
                                </div>
                                <div>
                                    <label>BodyFormat: </label>
                                    <select
                                        defaultValue={state.format}
                                        onChange={(value) => {
                                            state.format = value.target.value;
                                        }}
                                    >
                                        {GlobalConstants.AVAILABLE_FORMATS.map(
                                            (element, index) => (
                                                <option
                                                    key={
                                                        "option_parent" + index
                                                    }
                                                    value={element}
                                                >
                                                    {element}
                                                </option>
                                            )
                                        )}
                                    </select>
                                </div>
                                <a
                                    href=""
                                    onClick={(event) => {
                                        event.preventDefault();
                                        openPopup(state);
                                    }}
                                >
                                    {state.responseBody == ""
                                        ? "ENTER BODY"
                                        : "SHOW BODY"}
                                </a>
                            </div>
                        )}
                        <div
                            style={{
                                width: "100%",
                                margin: "2vh 0 2vh 0",
                                display: "flex",
                                justifyContent: "space-around",
                            }}
                        >
                            <input
                                width="25vw"
                                type="submit"
                                onClick={(event) => {
                                    event.preventDefault();
                                    location.href = "/mocks";
                                }}
                                value="CANCEL"
                            />
                            {props.updateId ? (
                                <input
                                    type="submit"
                                    onClick={updateMock}
                                    value="UPDATE"
                                />
                            ) : (
                                <input
                                    type="submit"
                                    onClick={addMock}
                                    value="SUBMIT"
                                />
                            )}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
};

CreateMocksBody.propTypes = {};

export default CreateMocksBody;
