import React, { Component } from "react";
import { db } from "./../../firebase";
import axios from "axios";

class CheckInForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: "",
                email: "",
                phone: "",
                location: "",
                family_member1: "",
                family_member2: "",
                family_member3: "",
                family_member4: "",
            },

            family_display: {
                family_member1: false,
                family_member2: false,
                family_member3: false,
                family_member4: false,
            },

            success: "",
            error: "",
            ip: null,
        };
    }

    handleChange = (e) => {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.id]: e.target.value,
            },
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        db.collection("users")
            .add(this.state.user)
            .then((res) => {
                axios
                    .get("http://api.ipify.org?format=jsonp?callback=?")
                    .then((res) => {
                        this.setState({
                            ip: res.data,
                        });
                    })
                    .catch((err) => console.log(err));

                this.setState({
                    success: "Check in successfully done!",
                });
            })
            .catch((err) => console.log(err));
    };

    handleFamilyMember = (e) => {
        if (!this.state.family_display.family_member1) {
            this.setState({
                family_display: {
                    ...this.state.family_display,
                    family_member1: true,
                },
            });
        } else if (this.state.family_display.family_member1) {
            if (!this.state.family_display.family_member2) {
                this.setState({
                    family_display: {
                        ...this.state.family_display,
                        family_member2: true,
                    },
                });
            } else if (this.state.family_display.family_member2) {
                this.setState({
                    family_display: {
                        ...this.state.family_display,
                        family_member3: true,
                    },
                });

                if (this.state.family_display.family_member3) {
                    this.setState({
                        family_display: {
                            ...this.state.family_display,
                            family_member4: true,
                        },
                    });
                } else if (this.state.family_display.family_member4) {
                    return false;
                }
            }
        }
    };

    render() {
        return (
            <div id="checkInForm">
                <div className="row">
                    <div className="col s12 m6 l6 offset-l3 offset-m3">
                        <div className="card">
                            <div className="card-content">
                                <div className="center-align">
                                    <span className="card-title">
                                        Check In Form
                                    </span>
                                </div>

                                {this.state.success ? (
                                    <div className="center-align">
                                        <h4 className="green-text">
                                            {this.state.success}
                                        </h4>
                                        <div className="divider"></div>

                                        <div className="section">
                                            <ul>
                                                <li>
                                                    Name: {this.state.user.name}
                                                </li>
                                                <li>
                                                    Email:{" "}
                                                    {this.state.user.email}
                                                </li>
                                                <li>
                                                    Phone:{" "}
                                                    {this.state.user.phone}
                                                </li>
                                                <li>
                                                    Location:{" "}
                                                    {this.state.user.location}
                                                </li>
                                                <li>
                                                    Family Member 1:{" "}
                                                    {this.state.user
                                                        .family_member1 &&
                                                        this.state.user
                                                            .family_member1}
                                                </li>
                                                <li>
                                                    Family Member 2:
                                                    {this.state.user
                                                        .family_member2 &&
                                                        this.state.user
                                                            .family_member2}
                                                </li>
                                                <li>
                                                    Family Member 3:
                                                    {this.state.user
                                                        .family_member3 &&
                                                        this.state.user
                                                            .family_member3}
                                                </li>
                                                <li>
                                                    Family Member 4:
                                                    {this.state.user
                                                        .family_member4 &&
                                                        this.state.user
                                                            .family_member4}
                                                </li>
                                                <li>
                                                    Client IP Address:
                                                    {this.state.ip}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="input-field">
                                            <span className="material-icons prefix">
                                                people
                                            </span>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                onChange={this.handleChange}
                                            />
                                            <label htmlFor="name">
                                                Enter Your Name
                                            </label>
                                        </div>
                                        <div className="input-field">
                                            <span className="material-icons prefix">
                                                email
                                            </span>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                onChange={this.handleChange}
                                            />
                                            <label htmlFor="email">
                                                Enter Your Email Address
                                            </label>
                                        </div>
                                        <div className="input-field">
                                            <span className="material-icons prefix">
                                                phone
                                            </span>
                                            <input
                                                type="text"
                                                id="phone"
                                                required
                                                onChange={this.handleChange}
                                            />
                                            <label htmlFor="phone">
                                                Enter Your Phone Number
                                            </label>
                                        </div>
                                        <div className="input-field">
                                            <span className="material-icons prefix">
                                                map
                                            </span>
                                            <input
                                                type="text"
                                                id="location"
                                                required
                                                onChange={this.handleChange}
                                            />
                                            <label htmlFor="location">
                                                Enter Your Current Location
                                            </label>
                                        </div>

                                        {this.state.family_display
                                            .family_member1 ? (
                                            <div className="input-field">
                                                <span className="material-icons prefix">
                                                    people
                                                </span>
                                                <input
                                                    type="text"
                                                    id="family_member1"
                                                    onChange={this.handleChange}
                                                />
                                                <label htmlFor="family_member1">
                                                    Enter Family Member 1
                                                </label>
                                            </div>
                                        ) : null}

                                        {this.state.family_display
                                            .family_member2 ? (
                                            <div className="input-field">
                                                <span className="material-icons prefix">
                                                    people
                                                </span>
                                                <input
                                                    type="text"
                                                    id="family_member2"
                                                    onChange={this.handleChange}
                                                />
                                                <label htmlFor="family_member2">
                                                    Enter Family Member 2
                                                </label>
                                            </div>
                                        ) : null}

                                        {this.state.family_display
                                            .family_member3 ? (
                                            <div className="input-field">
                                                <span className="material-icons prefix">
                                                    people
                                                </span>
                                                <input
                                                    type="text"
                                                    id="family_member3"
                                                    onChange={this.handleChange}
                                                />
                                                <label htmlFor="family_member3">
                                                    Enter Family Member 3
                                                </label>
                                            </div>
                                        ) : null}

                                        {this.state.family_display
                                            .family_member4 ? (
                                            <div className="input-field">
                                                <span className="material-icons prefix">
                                                    people
                                                </span>
                                                <input
                                                    type="text"
                                                    id="family_member4"
                                                    onChange={this.handleChange}
                                                />
                                                <label htmlFor="family_member4">
                                                    Enter Family Member 4
                                                </label>
                                            </div>
                                        ) : null}

                                        <div className="input-field">
                                            <div className="center-align">
                                                <button
                                                    type="button"
                                                    className="btn"
                                                    onClick={
                                                        this.handleFamilyMember
                                                    }
                                                >
                                                    Add Family Member
                                                    <i className="material-icons right">
                                                        add
                                                    </i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="input-field">
                                            <div className="center-align">
                                                <button
                                                    type="submit"
                                                    className="btn"
                                                    onClick={this.handleSubmit}
                                                >
                                                    Check In
                                                    <i className="material-icons right">
                                                        send
                                                    </i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CheckInForm;
