import React from "react";
import PropTypes from "prop-types";
import CreateMocksButton from "../../../atoms/create_mocks_button";

const MocksNeck = (props) => {
    return (
        <div className="neck">
            <label className="switch">
                <input id="capture" type="checkbox" />
                <span className="slider round" />
            </label>
            <CreateMocksButton />
        </div>
    );
};

MocksNeck.propTypes = {};

export default MocksNeck;
