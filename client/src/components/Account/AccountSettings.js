import React, {Component} from "react";
import NavigationSubBar from "../Layout/NavigationSubBar/NavigationSubBar";
import Notification from "./DismissableNotify";

import "./AccountSettings.css";

class Settings extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showNotification: false,
        }
    }

    // change state of notification to given
    changeNotificationVis(e, newVis) {
        e.preventDefault();

        this.setState({
            showNotification : newVis,
        });
    }

    render() {

        // email section needs verification
        return (
            <div id="settings-page">
                <NavigationSubBar
                current="settings"
                name="Cedric"
                />

                { this.state.showNotification &&
                <Notification
                text="Changes Saved!"
                closeClick={(e) => this.changeNotificationVis.bind(this)(e, false)}
                />}

                <form id="settings-form">
                    <div id="settings-form-wrap">

{/*                        <div className="tcol">
                            <p className="section-text">ACCOUNT</p>

                            <p>Username</p>
                            <input name="username"
                                    type="text"
                                    />
                            <p>Email Address</p>
                            <input name="email"
                                    type="text"
                                    />
                            <p>Current Password</p>
                            <input name="current-password"
                                    type="password"
                                    />
                            <p>New Password</p>
                            <input name="new-password"
                                    type="password"
                                    />
                            <p>Re-enter New Password</p>
                            <input name="new-password-retype"
                                    type="password"
                                    />
                        </div>

                        <div className="tcol">
                            <p className="section-text">LOCATION</p>

                            <p>Where can people meet you?</p>
                            <input name="location"
                                    type="text"
                                    />

                            <p className="section-text">SCHOOL</p>
                            <p>Which school are you buying/selling from?</p>
                            <input name="school"
                                    type="text"
                                    />
                        </div>*/}

                    </div>
                    <button className="btn" onClick={(e) => this.changeNotificationVis(e, true)}>
                        Save Changes
                    </button>
                </form>
            </div>
        );
    }
}

export default Settings;