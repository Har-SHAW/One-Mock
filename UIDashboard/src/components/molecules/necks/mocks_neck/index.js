import React from "react";
import PropTypes from "prop-types";
import CreateMocksButton from "../../../atoms/create_mocks_button";

const MocksNeck = (props) => {
    return (
        <div className="neck flex justify-between items-center">
            <label className="text-gray-500 text-3xl font-acl font-bold">
                Mocks
            </label>
            <CreateMocksButton />
        </div>
    );
};

MocksNeck.propTypes = {};

export default MocksNeck;
