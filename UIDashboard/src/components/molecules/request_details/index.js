import React from "react";
import RequestHeaders from "./request_headers";
import PropTypes from "prop-types";
import RequestParams from "./request_params";

const RequestDetails = (props) => {
    return (
        <div className="flex flex-col">
            <RequestHeaders headers={props.request.headers} />
            <RequestParams params={props.request.params} />
        </div>
    );
};

RequestDetails.propTypes = {
    request: PropTypes.object,
};

export default RequestDetails;
