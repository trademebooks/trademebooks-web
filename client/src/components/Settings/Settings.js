import React, {Component} from 'react';
import {MDBRow, MDBCol, MDBBtn, MDBContainer} from "mdbreact";
import "./Settings.css";

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
        },
        isChecked: false
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
    componentDidMount = () => {
        fetch(`/api/settings`)
            .then(res => res.json())
            .then((response) => {
                let settings = response;
                console.log(settings)
                this.setState({isChecked: settings[0].receiveEmail_1});
                console.log(this.state)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    submitSettings = () => {
        console.log("attempting to submit", this.state.isChecked)
        fetch('api/settings', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({receiveEmail: this.state.isChecked, receiveTexts: false})
        })
    }

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
                        <button type="button" onClick={this.submitSettings} class="btn btn-primary">Submit</button>
                    </MDBRow>

                </MDBContainer>
            </div>
        );
    }
}

export default Settings;
