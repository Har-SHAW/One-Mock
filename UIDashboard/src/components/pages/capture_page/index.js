import React from 'react';
import PropTypes from 'prop-types';
import CaptureTemplate from '../../templates/capture_page';
import NavigationBar from '../../molecules/navigation';
import CaptureNeck from '../../molecules/necks/capture_neck';

const CapturePage = props => {
    return (
        <CaptureTemplate navigation={<NavigationBar />} neck={<CaptureNeck />}/>
    );
};

CapturePage.propTypes = {
};

export default CapturePage;