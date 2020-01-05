import React, {Component} from 'react';

import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput} from 'mdbreact';

class Register extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

<div className="mt-4">
            <MDBContainer>
                <MDBRow center={true}>
                    <MDBCol md="10">
                        <form>
                            <h1 className="text-center mb-4">Sign up</h1>
                            <div className="grey-text">
                                <MDBInput
                                    label="Your name"
                                    icon="user"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Your email"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                />

                                <MDBInput
                                    label="Your password"
                                    icon="lock"
                                    group
                                    type="password"
                                    validate
                                />

                                <MDBInput
                                    label="Confirm your password"
                                    icon="exclamation-triangle"
                                    group
                                    type="password"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                            </div>
                            <div className="text-center">
                                <MDBBtn color="primary">Register</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
</div>
        );
    }

}

export default Register;