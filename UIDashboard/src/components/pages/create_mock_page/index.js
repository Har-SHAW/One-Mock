import React from "react";
import PropTypes from "prop-types";
import CreateMockTemplate from "../../frames/create_mock";
import NavigationBar from "../../molecules/navigation";
import CreateMocksBody from "../../organisms/create_mock_body";
import { useParams } from "react-router-dom";

const CreateMockPage = (props) => {
    const { id } = useParams();
    console.log(id);
    return (
        <CreateMockTemplate
            navigation={<NavigationBar />}
            body={<CreateMocksBody updateId={id} />}
        />
    );
};

CreateMockPage.propTypes = {};

export default CreateMockPage;
