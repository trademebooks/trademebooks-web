import React, {Component} from "react";
import NavigationSubBar from "../Pages/NavigationSubBar";

import "./AccountSettings.css";

class Settings extends Component {

    render() {

        // email section needs verification
        return (
            <div id="settings-page">
                <NavigationSubBar
                current="settings"
                name="Cedric"
                />

                
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
                    <button class="btn">
                        Save Changes
                    </button>
                </form>
            </div>
        );
    }
}

export default Settings;