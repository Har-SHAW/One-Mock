import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import BodyRoot from "../../atoms/body/root";

const HomePageTemplate = (props) => {
    return (
        <BodyRoot>
            <div className="gradient">
                {props.navigation}
                <div class="one-mock">One Mock</div>
            </div>
            <div style={{ height: "40%" }}></div>
        </BodyRoot>
    );
};

HomePageTemplate.propTypes = {};

export default HomePageTemplate;
