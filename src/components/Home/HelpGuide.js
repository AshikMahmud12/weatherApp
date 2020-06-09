import React from "react";
import { Link } from "react-router-dom";

const HelpGuide = () => {
    return (
        <div className="col s12 m6 l6">
            <div className="card-panel help-guide center-align valign-wrapper valign-center h-md">
                <Link to="/help-guide" className="btn-large green">
                    Help Guide
                </Link>
            </div>
        </div>
    );
};

export default HelpGuide;
