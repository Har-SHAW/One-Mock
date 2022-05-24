import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const HomePageTemplate = (props) => {
    return (
        <div className="root">
            <div className="gradient">
                {props.navigation}
                <div class="one-mock">One Mock</div>
            </div>
            <div style={{ height: "40%" }}></div>
        </div>
    );
};

HomePageTemplate.propTypes = {};

export default HomePageTemplate;
