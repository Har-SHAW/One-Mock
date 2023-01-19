import React from "react";
import PropTypes from "prop-types";
import HomePageTemplate from "../../frames/home_page";
import NavigationBar from "../../molecules/navigation";
import "./index.css";

const HomePage = (props) => {
    return <HomePageTemplate navigation={<NavigationBar />} />;
};

HomePage.propTypes = {};

export default HomePage;
