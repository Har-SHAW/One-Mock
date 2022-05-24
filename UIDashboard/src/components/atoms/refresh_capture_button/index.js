import React from 'react';
import PropTypes from 'prop-types';
import ReloadPng from './reload.png'

const RefreshCaptureButton = props => {
    return (
        <div
                className="create_mocks"
                style={{ backgroundColor: "brown" }}
            >
                <img
                    height="70px"
                    src={ReloadPng}
                    style={{ color: "white" }}
                    width="70px"
                />
            </div>
    );
};

RefreshCaptureButton.propTypes = {
    
};

export default RefreshCaptureButton;