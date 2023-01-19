import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CaptureTemplate from "../../frames/capture_page";
import NavigationBar from "../../molecules/navigation";
import CaptureNeck from "../../molecules/necks/capture_neck";
import CaptureBody from "../../organisms/capture_body";
import GiantPopup from "../../molecules/giant_popup";
import {
    getAllRequests,
    getCaptureState,
    toggleCaptureApi,
} from "../../../apis/capture_api";

const CapturePage = (props) => {
    const [leftBodyData, setLeftBodyData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [popupBody, setPopupBody] = useState("");
    const [captureState, setCaptureState] = useState(null);

    function openPopup(body) {
        setPopupOpen(true);
        setPopupBody(body);
    }

    async function toggleCapture() {
        const response = await toggleCaptureApi();
        setCaptureState(response.status);
    }

    async function refreshCapture() {
        setLoading(true);
        const response = await getAllRequests();
        setLeftBodyData(response);
        setLoading(false);
    }

    useEffect(async () => {
        if (leftBodyData == null) {
            const response = await getAllRequests();
            setLeftBodyData(response);
            setLoading(false);
        }
        if (captureState == null) {
            const response = await getCaptureState();
            setCaptureState(response.status);
        }
    });

    return (
        <CaptureTemplate
            navigation={<NavigationBar />}
            neck={
                <CaptureNeck
                    capture={captureState}
                    onToggle={() => toggleCapture()}
                    onRefresh={() => refreshCapture()}
                />
            }
            popup={
                <GiantPopup
                    isOpen={isPopupOpen}
                    onClose={() => setPopupOpen(false)}
                    body={popupBody}
                />
            }
            body={
                <CaptureBody
                    requestsData={leftBodyData}
                    loading={loading}
                    popupOpen={openPopup}
                />
            }
        />
    );
};

CapturePage.propTypes = {};

export default CapturePage;
