import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MocksTemplate from "../../frames/mocks_page";
import NavigationBar from "../../molecules/navigation";
import MocksNeck from "../../molecules/necks/mocks_neck";
import MocksBody from "../../organisms/mocks_body";
import { getMocksApi } from "../../../apis/mocks_api";
import GiantPopup from "../../molecules/giant_popup";

const MocksPage = (props) => {
    const [leftBodyData, setLeftBodyData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [popupBody, setPopupBody] = useState("");

    function openPopup(body) {
        setPopupOpen(true);
        setPopupBody(body);
    }

    useEffect(async () => {
        if (leftBodyData == null) {
            const response = await getMocksApi();
            setLeftBodyData(response);
            setLoading(false);
        }
    });

    return (
        <MocksTemplate
            navigation={<NavigationBar />}
            neck={<MocksNeck />}
            popup={
                <GiantPopup
                    isOpen={isPopupOpen}
                    onClose={() => setPopupOpen(false)}
                    body={popupBody}
                    title="Body of the Request"
                />
            }
            body={
                <MocksBody
                    mocksData={leftBodyData}
                    loading={loading}
                    popupOpen={openPopup}
                />
            }
        />
    );
};

MocksPage.propTypes = {};

export default MocksPage;
