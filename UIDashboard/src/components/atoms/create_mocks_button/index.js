import React from 'react';
import PropTypes from 'prop-types';
import PlusIcon from "./plus.png";

const CreateMocksButton = props => {
    return (
        <div
                className="create_mocks"
                onClick={()=>location.href = "/mocks_create"}
                style={{ backgroundColor: "green" }}
            >
                <img
                    height="55px"
                    src={PlusIcon}
                    style={{ color: "white" }}
                    width="55px"
                />
            </div>
    );
};

CreateMocksButton.propTypes = {
    
};

export default CreateMocksButton;