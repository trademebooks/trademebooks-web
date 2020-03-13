import React, {Component} from 'react';
import {MDBRow, MDBCol, MDBBtn, MDBContainer} from "mdbreact";

class Settings extends Component {

    constructor(props) {
        super(props);
    }
    state = {
        fname: {
            value: "Mark",
            valid: true
        },
        lname: {
            value: "Otto",
            valid: true
        },
        email: {
            value: "",
            valid: false
        },
        city: {
            value: "",
            valid: false
        },
        state: {
            value: "",
            valid: false
        },
        zip: {
            value: "",
            valid: false
        }
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: { value: event.target.value, valid: !!event.target.value } });
    };

    render() {
        return (
            <div class="mt-4">
                <MDBContainer>
                    <MDBRow center={true}>
                        <MDBCol md="">
                            <div className="text-center">
                                <h1>Account Settings</h1>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default Settings;
