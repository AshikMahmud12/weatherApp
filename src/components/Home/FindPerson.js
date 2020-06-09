import React from "react";
import { Link } from "react-router-dom";

const FindPerson = () => {
    return (
        <div className="col s12 m6 l6">
            <div className="card-panel find-person center-align valign-wrapper valign-center h-md">
                <Link to="/find-person" className="btn-large pink">
                    Find Person
                </Link>
            </div>
        </div>
    );
};

export default FindPerson;
