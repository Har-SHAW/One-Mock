import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MocksTemplate from "../../templates/mocks_page";
import NavigationBar from "../../molecules/navigation";
import MocksNeck from "../../molecules/necks/mocks_neck";
import MocksBody from "../../organisms/mocks_body";
import { getMocksApi } from "../../../apis/mocks_api";

const MocksPage = (props) => {
    const [leftBodyData, setLeftBodyData] = useState(null);
    const [loading, setLoading] = useState(true);

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
            body={
                <MocksBody
                    mocksData={leftBodyData}
                    loading={loading}
                />
            }
        />
    );
};

MocksPage.propTypes = {};

export default MocksPage;
