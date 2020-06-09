import React, { Component } from "react";

import { db } from "./../../firebase";

class FindPersonForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            location: "",
            users: null,
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        db.collection("users")
            .where("name", "==", this.state.name)
            .where("location", "==", this.state.location)
            .get()
            .then((res) => {
                this.setState({
                    users: res.docs,
                });
            })
            .catch((err) => console.log(err));
    };

    render() {
        return (
            <div id="findPersonForm">
                <div className="row">
                    <div className="col s12 m6 l10 offset-l1 offset-m1">
                        <div className="card">
                            <div className="card-content">
                                <div className="center-align">
                                    <span className="card-title">
                                        Find Person Form
                                    </span>
                                </div>

                                {this.state.users ? (
                                    <div className="section">
                                        <table className="responsive-table">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Phone</th>
                                                    <th>Location</th>
                                                    <th>Family Member 1</th>
                                                    <th>Family Member 2</th>
                                                    <th>Family Member 3</th>
                                                    <th>Family Member 4</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.users.length > 0 ? (
                                                    this.state.users.map(
                                                        (user, index) => {
                                                            return (
                                                                <tr
                                                                    key={
                                                                        user.id
                                                                    }
                                                                >
                                                                    <td>
                                                                        {index +
                                                                            1}
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            user.data()
                                                                                .name
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            user.data()
                                                                                .email
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            user.data()
                                                                                .phone
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            user.data()
                                                                                .location
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {user.data()
                                                                            .family_member1
                                                                            ? user.data()
                                                                                  .family_member1
                                                                            : "N/A"}
                                                                    </td>
                                                                    <td>
                                                                        {user.data()
                                                                            .family_member2
                                                                            ? user.data()
                                                                                  .family_member2
                                                                            : "N/A"}
                                                                    </td>
                                                                    <td>
                                                                        {user.data()
                                                                            .family_member3
                                                                            ? user.data()
                                                                                  .family_member3
                                                                            : "N/A"}
                                                                    </td>
                                                                    <td>
                                                                        {user.data()
                                                                            .family_member4
                                                                            ? user.data()
                                                                                  .family_member4
                                                                            : "N/A"}
                                                                    </td>
                                                                </tr>
                                                            );
                                                        }
                                                    )
                                                ) : (
                                                    <tr>
                                                        <td colSpan="9">
                                                            <p className="pink-text center-align flow-text">
                                                                No data found...
                                                            </p>
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <form>
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
                                                Enter Name
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
                                                Enter Location
                                            </label>
                                        </div>

                                        <div className="input-field">
                                            <div className="center-align">
                                                <button
                                                    type="submit"
                                                    className="btn"
                                                    onClick={this.handleSubmit}
                                                >
                                                    Find Person
                                                    <i className="material-icons right">
                                                        search
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

export default FindPersonForm;
