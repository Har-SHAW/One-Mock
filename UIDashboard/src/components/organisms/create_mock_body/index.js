import React, { useState, useEffect } from "react";
import {
    createMockApi,
    getFullMockApi,
    updateMockApi,
} from "../../../apis/mocks_api";
import { GlobalConstants } from "../../../constants/GlobalConstants";

const CreateMocksBody = (props) => {
    const [state, setState] = useState({
        method: GlobalConstants.methods[0],
        path: "",
        duration: 0,
        hasMultipleResponse: false,
        responseBody: "",
        statusCode: 200,
        customResponseDtoSet: [
            {
                requestValue: "",
                isHeader: false,
                responseBody: "",
                statusCode: 200,
            },
        ],
    });

    useEffect(async () => {
        if (props.updateId && state.path == "") {
            const response = await getFullMockApi(props.updateId);
            setState(response);
        }
    });

    async function addMock() {
        const response = await createMockApi(state);
        if (response.status) {
            location.href = "/mocks";
        }
    }

    async function updateMock() {
        const response = await updateMockApi(props.updateId, state);
        if (response.status) {
            location.href = "/mocks";
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

    return (
        <div className="body">
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                    className="input_1"
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <label>Method</label>
                    <select
                        onChange={(value) => {
                            setState({
                                ...state,
                                method: value.target.value,
                            });
                        }}
                    >
                        {GlobalConstants.methods.map((element, index) => (
                            <option key={"option_" + index} value={element}>
                                {element}
                            </option>
                        ))}
                    </select>

                    <label>Path</label>
                    <input
                        placeholder="Path"
                        type="text"
                        value={state.path}
                        onChange={(value) => {
                            setState({
                                ...state,
                                path: value.target.value,
                            });
                        }}
                    />

                    <label>Duration</label>
                    <input
                        placeholder="Duration"
                        type="number"
                        value={state.duration}
                        onChange={(value) => {
                            setState({
                                ...state,
                                duration: value.target.value,
                            });
                        }}
                    />
                </div>
                <div>
                    <label>Has Multiple Response?</label>
                    <input
                        type="checkbox"
                        checked={state.hasMultipleResponse}
                        onChange={(value) => {
                            setState({
                                ...state,
                                hasMultipleResponse: value.target.checked,
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
                                    <th>Status Code</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {state.customResponseDtoSet.map(
                                    (element, index) => (
                                        <tr key={"tr_response_" + index}>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    checked={element.isHeader}
                                                    onChange={(value) => {
                                                        const nextState = {
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

                                                        setState(nextState);
                                                    }}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={element.requestValue}
                                                    onChange={(value) => {
                                                        const nextState = {
                                                            ...state,
                                                            customResponseDtoSet:
                                                                [
                                                                    ...state.customResponseDtoSet,
                                                                ],
                                                        };
                                                        nextState.customResponseDtoSet[
                                                            index
                                                        ].requestValue =
                                                            value.target.value;

                                                        setState(nextState);
                                                    }}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={element.responseBody}
                                                    onChange={(value) => {
                                                        const nextState = {
                                                            ...state,
                                                            customResponseDtoSet:
                                                                [
                                                                    ...state.customResponseDtoSet,
                                                                ],
                                                        };
                                                        nextState.customResponseDtoSet[
                                                            index
                                                        ].responseBody =
                                                            value.target.value;

                                                        setState(nextState);
                                                    }}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    value={element.statusCode}
                                                    onChange={(value) => {
                                                        const nextState = {
                                                            ...state,
                                                            customResponseDtoSet:
                                                                [
                                                                    ...state.customResponseDtoSet,
                                                                ],
                                                        };
                                                        nextState.customResponseDtoSet[
                                                            index
                                                        ].statusCode =
                                                            value.target.value;

                                                        setState(nextState);
                                                    }}
                                                />
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() =>
                                                        deleteResponse(index)
                                                    }
                                                >
                                                    delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                        <button onClick={addResponse}>Add Response</button>
                    </div>
                ) : (
                    <div
                        className="input_2"
                        style={{ display: "flex", flexDirection: "column" }}
                    >
                        <textarea
                            placeholder="Response Body"
                            value={state.responseBody}
                            onChange={(value) => {
                                const nextState = {
                                    ...state,
                                    responseBody: value.target.value,
                                };

                                setState(nextState);
                            }}
                        ></textarea>
                        <input
                            type="number"
                            placeholder="Status Code"
                            value={state.statusCode}
                            onChange={(value) => {
                                const nextState = {
                                    ...state,
                                    statusCode: value.target.value,
                                };

                                setState(nextState);
                            }}
                        />
                    </div>
                )}
                {props.updateId ? (
                    <button onClick={updateMock}>UPDATE</button>
                ) : (
                    <button onClick={addMock}>SUBMIT</button>
                )}
            </div>
        </div>
    );
};

CreateMocksBody.propTypes = {};

export default CreateMocksBody;
