import React from "react";

import "./Home.css";

import CheckIn from "./../../components/Home/CheckIn";
import FindPerson from "./../../components/Home/FindPerson";
import Disaster from "./../../components/Home/Disaster";
import HelpGuide from "./../../components/Home/HelpGuide";

const Home = (props) => {

    console.log(props)

    return (
        <div className="section">
            <div className="row">
                <CheckIn></CheckIn>
                <FindPerson></FindPerson>
                <Disaster></Disaster>
                <HelpGuide></HelpGuide>
            </div>
        </div>
    );
};

export default Home;
