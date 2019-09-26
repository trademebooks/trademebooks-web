import React, {Component} from "react";
import NavigationSubBar from "../Pages/NavigationSubBar";
import Notification from "../Pages/DismissableNotify";

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

                        <div class="tcol">
                            <p class="section-text">ACCOUNT</p>

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

                        <div class="tcol">
                            <p class="section-text">LOCATION</p>

                            <p>Where can people meet you?</p>
                            <input name="location"
                                    type="text"
                                    />

                            <p class="section-text">SCHOOL</p>
                            <p>Which school are you buying/selling from?</p>
                            <input name="school"
                                    type="text"
                                    />
                        </div>

                    </div>
                    <button class="btn" onClick={(e) => this.changeNotificationVis(e, true)}>
                        Save Changes
                    </button>
                </form>
            </div>
        );
    }
}

export default Settings;