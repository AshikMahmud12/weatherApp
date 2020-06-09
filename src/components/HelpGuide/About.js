import React from "react";

import { Link } from "react-router-dom";

const About = () => {
    return (
        <div id="aboutGuide">
            <div className="row">
                <div className="col s12 m6 l6">
                    <div className="card-panel teal white-text">
                        <div className="center-align">
                            <h5>Help Guide</h5>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corporis ducimus odio doloremque minus
                            molestias consectetur recusandae laboriosam aliquid
                            temporibus nihil in nesciunt, magnam, eum sed
                            aspernatur nobis modi quaerat corrupti?
                        </p>
                    </div>
                </div>
                <div className="col s12 m6 l6">
                    <div className="card-panel indigo white-text">
                        <div className="center-align">
                            <h5>Getting Start</h5>
                        </div>
                        <ul>
                            <li>
                                <Link
                                    to="/help-guide/check-in-guide"
                                    className="orange-text"
                                >
                                    Check In
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/help-guide/find-person-guide"
                                    className="orange-text"
                                >
                                    Find Person
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/help-guide/disaster-guide"
                                    className="orange-text"
                                >
                                    Disaster Status
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
