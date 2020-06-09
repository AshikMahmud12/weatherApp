import React from "react";
import { Link } from "react-router-dom";

const CheckIn = () => {
    return (
        <div className="col s12 m6 l6">
            <div className="card-panel check-in center-align valign-wrapper valign-center h-md">
                <Link to="/check-in" className="btn-large indigo">
                    Check In
                </Link>
            </div>
        </div>
    );
};

export default CheckIn;
