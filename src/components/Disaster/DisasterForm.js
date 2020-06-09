import React, { Component } from "react";

class DisasterForm extends Component {
    render() {
        return (
            <div id="disasterCityForm">
                <div className="row">
                    <div className="col s12 m6 l6 offset-l3 offset-m3">
                        <div className="card">
                            <div className="card-content">
                                <div className="center-align">
                                    <span className="card-title">
                                        Disaster Form
                                    </span>
                                </div>
                                <form>
                                    <div className="input-field">
                                        <span className="material-icons prefix">
                                            map
                                        </span>
                                        <input type="text" id="city" required />
                                        <label htmlFor="city">Enter City</label>
                                    </div>

                                    <div className="input-field">
                                        <div className="center-align">
                                            <button
                                                type="submit"
                                                className="btn"
                                            >
                                                Find Cities
                                                <i className="material-icons right">
                                                    search
                                                </i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DisasterForm;
