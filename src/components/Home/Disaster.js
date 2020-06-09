import React from "react";
import { Link } from "react-router-dom";

const Disaster = () => {
    return (
        <div className="col s12 m6 l6">
            <div className="card-panel disaster-status center-align valign-wrapper valign-center h-md">
                <Link to="/disaster" className="btn-large red">
                    Disaster Status
                </Link>
            </div>
        </div>
    );
};

export default Disaster;
