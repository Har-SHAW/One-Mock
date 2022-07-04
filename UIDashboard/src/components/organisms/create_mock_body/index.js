import React, { useState, useEffect } from "react";
import {
    createMockApi,
    getFullMockApi,
    updateMockApi,
} from "../../../apis/mocks_api";
import { GlobalConstants } from "../../../constants/GlobalConstants";
import { deformatRequestBody } from "../../../utils/deformatter";
import CancelCreateBar from "../../molecules/cancel_create_bar";
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

    async function addMock() {
        if (document.getElementById("main_form").checkValidity()) {
            console.log(state.customResponseDtoSet);
            const response = await createMockApi(state);
            if (response.status) {
                location.href = "/mocks";
            }
        } else {
            document.getElementById("main_form").reportValidity();
        }
    }

    async function updateMock() {
        if (document.getElementById("main_form").checkValidity()) {
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
            <div className="flex justify-center h-full overflow-auto">
                <form id="main_form" className="w-screen">
                    <div className="flex flex-col w-1/2 mx-auto my-[2vw]">
                        <div className="w-full flex justify-between my-[2vw]">
                            <div className="w-1/6 flex flex-col space-y-1">
                                <label>Method</label>
                                <select
                                    className="px-2.5 py-1.5"
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

                            <div className="w-4/6 px-5 flex flex-col space-y-1">
                                <label>Path</label>
                                <input
                                    pattern="^(\/[^?]+)+(\?([^=?&/]+=[^=?&/]+)(&[^=?&/]+=[^=?&/]+)*)?"
                                    className="px-2.5 py-1.5"
                                    placeholder="Path"
                                    type="text"
                                    defaultValue={state.path}
                                    onChange={(value) => {
                                        state.path = value.target.value;
                                    }}
                                    required
                                />
                            </div>

                            <div className="w-1/6 flex flex-col space-y-1">
                                <label>Duration</label>
                                <input
                                    className="px-2.5 py-1.5"
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
                        <div className="my-2.5">
                            <label>Multiple Response: </label>
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
                            <div className="w-full flex justify-between my-[2vh] space-x-5">
                                <div className="w-full flex flex-col space-y-1">
                                    <label>Status Code</label>
                                    <input
                                        className="px-2.5 py-1.5"
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
                                <div className="w-full flex flex-col space-y-1">
                                    <label>BodyFormat</label>
                                    <select
                                        className="px-2.5 py-1.5"
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
                                <div className="w-full flex flex-col space-y-1">
                                    <label>Provide Body</label>
                                    <div className="px-2.5 py-1.5 border-solid border border-black flex justify-center items-center">
                                        <a
                                            href=""
                                            onClick={(event) => {
                                                event.preventDefault();
                                                openPopup(state);
                                            }}
                                        >
                                            <strong>
                                                <code>
                                                    {state.responseBody == ""
                                                        ? "ENTER BODY"
                                                        : "SHOW BODY"}
                                                </code>
                                            </strong>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="w-full my-[2vh]">
                            {props.updateId ? (
                                <CancelCreateBar
                                    submitText="UPDATE"
                                    onCancelClick={() => {
                                        location.href = "/mocks";
                                    }}
                                    onSubmitClick={updateMock}
                                />
                            ) : (
                                <CancelCreateBar
                                    submitText="SUBMIT"
                                    onCancelClick={() => {
                                        location.href = "/mocks";
                                    }}
                                    onSubmitClick={addMock}
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
