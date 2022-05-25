import React, { useState, useEffect } from "react";
import {
    createMockApi,
    getFullMockApi,
    updateMockApi,
} from "../../../apis/mocks_api";
import { GlobalConstants } from "../../../constants/GlobalConstants";
import { deformatRequestBody } from "../../../utils/deformatter";
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
                requestValue: "",
                isHeader: false,
                responseBody: "",
                format: GlobalConstants.AVAILABLE_FORMATS[0],
                statusCode: 200,
            },
        ],
    });

    const [popupOpen, setPopupOpen] = useState(false);
    const [popupData, setPopupData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        if (props.updateId && state.path == "") {
            const response = await getFullMockApi(props.updateId);
            setState(response);
            setLoading(false);
        }
        if (!props.updateId) {
            setLoading(false);
        }
    });

    async function addMock(event) {
        if (document.getElementById("main_form").checkValidity()) {
            event.preventDefault();
            const response = await createMockApi(state);
            if (response.status) {
                location.href = "/mocks";
            }
        }
    }

    async function updateMock(event) {
        if (document.getElementById("main_form").checkValidity()) {
            event.preventDefault();
            const response = await updateMockApi(props.updateId, state);
            if (response.status) {
                location.href = "/mocks";
            }
        }
    }

    function addResponse() {
        setState({
            ...state,
            customResponseDtoSet: [
                ...state.customResponseDtoSet,
                {
                    requestValue: "",
                    isHeader: false,
                    responseBody: "",
                    statusCode: 200,
                },
            ],
        });
    }

    function deleteResponse(index) {
        if (state.customResponseDtoSet.length != 1) {
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
    }

    if (loading) {
        return <div className="body"></div>;
    } else {
        return (
            <div className="body">
                <GiantPopup
                    isOpen={popupOpen}
                    onClose={() => setPopupOpen(false)}
                    body={popupOpen ? popupData.responseBody : ""}
                    title={popupOpen ? popupData.requestBody : ""}
                    editable={true}
                    onDone={(value) => {
                        if (popupOpen) {
                            popupData.responseBody = deformatRequestBody(
                                value,
                                popupData.format
                            );
                            setPopupOpen(false);
                        }
                    }}
                    value={popupOpen ? popupData.responseBody : ""}
                    format={popupOpen ? popupData.format : ""}
                />
                <form id="main_form">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "50vw",
                        }}
                    >
                        <div
                            className="input_1"
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
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
                        <div>
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
                            <div className="input_3">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Is Header?</th>
                                            <th>Request</th>
                                            <th>Response Body</th>
                                            <th>Body Format</th>
                                            <th>Status Code</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {state.customResponseDtoSet.map(
                                            (element, index) => (
                                                <tr
                                                    key={"tr_response_" + index}
                                                >
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            checked={
                                                                element.isHeader
                                                            }
                                                            onChange={(
                                                                value
                                                            ) => {
                                                                const nextState =
                                                                    {
                                                                        ...state,
                                                                        customResponseDtoSet:
                                                                            [
                                                                                ...state.customResponseDtoSet,
                                                                            ],
                                                                    };
                                                                nextState.customResponseDtoSet[
                                                                    index
                                                                ].isHeader =
                                                                    value.target.checked;

                                                                setState(
                                                                    nextState
                                                                );
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            required
                                                            type="text"
                                                            defaultValue={
                                                                element.requestValue
                                                            }
                                                            onChange={(
                                                                value
                                                            ) => {
                                                                state.customResponseDtoSet[
                                                                    index
                                                                ].requestValue =
                                                                    value.target.value;
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        {element.responseBody ==
                                                        "" ? (
                                                            <a
                                                                href=""
                                                                onClick={(
                                                                    event
                                                                ) => {
                                                                    event.preventDefault();
                                                                    openPopup(
                                                                        element
                                                                    );
                                                                }}
                                                            >
                                                                Enter Body
                                                            </a>
                                                        ) : (
                                                            <a
                                                                href=""
                                                                onClick={(
                                                                    event
                                                                ) => {
                                                                    event.preventDefault();
                                                                    openPopup(
                                                                        element
                                                                    );
                                                                }}
                                                            >
                                                                SHOW BODY
                                                            </a>
                                                        )}
                                                    </td>
                                                    <td>
                                                        <select
                                                            defaultValue={
                                                                element.format
                                                            }
                                                            onChange={(
                                                                value
                                                            ) => {
                                                                state.customResponseDtoSet[
                                                                    index
                                                                ].format =
                                                                    value.target.value;
                                                            }}
                                                        >
                                                            {GlobalConstants.AVAILABLE_FORMATS.map(
                                                                (
                                                                    element,
                                                                    index
                                                                ) => (
                                                                    <option
                                                                        key={
                                                                            "format_option" +
                                                                            index
                                                                        }
                                                                        value={
                                                                            element
                                                                        }
                                                                    >
                                                                        {
                                                                            element
                                                                        }
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="number"
                                                            defaultValue={
                                                                element.statusCode
                                                            }
                                                            onChange={(
                                                                value
                                                            ) => {
                                                                state.customResponseDtoSet[
                                                                    index
                                                                ].statusCode =
                                                                    value.target.value;
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <button
                                                            onClick={() =>
                                                                deleteResponse(
                                                                    index
                                                                )
                                                            }
                                                        >
                                                            DELETE
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                                <button onClick={addResponse}>
                                    Add Response
                                </button>
                            </div>
                        ) : (
                            <div
                                className="input_2"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                }}
                            >
                                <input
                                    type="number"
                                    placeholder="Status Code"
                                    defaultValue={state.statusCode}
                                    onChange={(value) => {
                                        state.statusCode = value.target.value;
                                    }}
                                />
                                <select
                                    defaultValue={state.format}
                                    onChange={(value) => {
                                        setState({
                                            ...state,
                                            format: value.target.value,
                                        });
                                    }}
                                >
                                    {GlobalConstants.AVAILABLE_FORMATS.map(
                                        (element, index) => (
                                            <option
                                                key={"option_parent" + index}
                                                value={element}
                                            >
                                                {element}
                                            </option>
                                        )
                                    )}
                                </select>
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
                </form>
            </div>
        );
    }
};

CreateMocksBody.propTypes = {};

export default CreateMocksBody;
