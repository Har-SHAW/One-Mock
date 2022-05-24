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
                    src={PlusIcon}
                    style={{ color: "white", height: "7vh", width: "7vh" }}
                />
            </div>
    );
};

CreateMocksButton.propTypes = {
    
};

export default CreateMocksButton;