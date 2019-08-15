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

                <div id="settings-form-wrap">
                    <form id="settings-form">
                        <div id="l-col">
                            <h1>Account</h1>

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

                        <div id="r-col">

                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Settings;