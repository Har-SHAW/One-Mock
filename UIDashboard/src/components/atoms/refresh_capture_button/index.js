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
                    src={ReloadPng}
                    style={{ color: "white", height: "10vh", width: "10vh" }}
                />
            </div>
    );
};

RefreshCaptureButton.propTypes = {
    
};

export default RefreshCaptureButton;