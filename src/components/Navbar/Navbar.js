import React, { Fragment } from "react";

import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <Fragment>
            <nav className="nav-wraper cyan">
                <div className="container">
                    <Link to="/" className="brand-logo">
                        Weather App
                    </Link>
                    <Link
                        to="#"
                        className="sidenav-trigger"
                        data-target="mobile"
                    >
                        <i className="material-icons">menu</i>
                    </Link>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <Link to="/check-in">Check In</Link>
                        </li>
                        <li>
                            <Link to="/find-person">Find Person</Link>
                        </li>
                        <li>
                            <Link to="/disaster">Disaster Status</Link>
                        </li>
                        <li>
                            <Link to="/help-guide">Help Guide</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile">
                <li>
                    <Link to="/check-in">Check In</Link>
                </li>
                <li>
                    <Link to="/find-person">Find Person</Link>
                </li>
                <li>
                    <Link to="/disaster">Disaster Status</Link>
                </li>
                <li>
                    <Link to="/help-guide">Help Guide</Link>
                </li>
            </ul>
        </Fragment>
    );
};

export default Navbar;
