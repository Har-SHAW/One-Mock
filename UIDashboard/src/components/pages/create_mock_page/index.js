import React from 'react';
import PropTypes from 'prop-types';
import CreateMockTemplate from '../../templates/create_mock';
import NavigationBar from "../../molecules/navigation"
import CreateMocksBody from '../../organisms/create_mock_body';

const CreateMockPage = props => {
    return (
        <CreateMockTemplate navigation={<NavigationBar/>} body={<CreateMocksBody/>}/>
    );
};

CreateMockPage.propTypes = {
    
};

export default CreateMockPage;