import React from "react";
import PropTypes from "prop-types";
import HomePageTemplate from "../../templates/home_page";
import NavigationBar from "../../molecules/navigation";

const HomePage = (props) => {
    console.log(process.env);
    return <HomePageTemplate navigation={<NavigationBar />} />;
};

HomePage.propTypes = {};

export default HomePage;
