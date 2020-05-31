import React, {Component} from 'react';
import {MDBRow, MDBCol, MDBBtn, MDBContainer} from "mdbreact";
import "./Settings.css";

class Settings extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.notify)

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
        },
        isChecked: this.testUser
    };

    changeHandler = event => {
        console.log("checkbox changed!", event);
        this.setState({
            [event.target.name]: {
                value: event.target.value,
                valid: !!event.target.value
            }
        });
    };
    handleCheckboxChange = (event) => {
        console.log("checkbox changed!", event);
        console.log(this.state.isChecked)
        this.setState({isChecked: event.target.checked});
    };

    render() {
        return (
            <div className="mt-4">
                <MDBContainer>
                    <MDBRow center={true}>
                        <MDBCol md="">
                            <div className="text-center">
                                <h1>Account Settings - March 13, 2020 at 5:34PM</h1>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow >
                        <MDBCol md="1">
                            <input
                                style={{
                                marginTop: "15px"
                            }}
                                checked={this.props.notify}
                                className="check-input"
                                type="checkbox"
                                onChange={this.handleCheckboxChange}
                                checked={this.state.isChecked}
                                id="checkbox1"/>
                        </MDBCol>
                        <MDBCol
                            md="3"
                            style={{
                            marginTop: "0.5rem"
                        }}>
                            <span className="input-text">
                                Email Notifications
                            </span>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow
                        style={{
                        marginTop: "20rem"
                    }}>
                        <button type="button" class="btn btn-primary">Submit</button>
                    </MDBRow>

                </MDBContainer>
            </div>
        );
    }
}

export default Settings;
