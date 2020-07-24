import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon} from 'mdbreact';

class Login extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="mt-4">
                <MDBContainer>
                    <MDBRow center={true}>
                        <MDBCol md="10">
                            <form>
                                <h1 className="mb-4 text-center">Sign in</h1>
                                <div className="grey-text">
                                    <MDBInput
                                        label="Type your email"
                                        icon="envelope"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Type your password"
                                        icon="lock"
                                        group
                                        type="password"
                                        validate
                                    />
                                </div>
                                <div className="text-center">
                                    <MDBBtn>Login</MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                    <hr/>
                    <MDBRow>
                        <MDBCol md="12">
                            <div className="text-center">
                                <h3 className="mb-4 text-center">Social Sign</h3>
                                <MDBBtn size="lg" tag="a" floating social="fb" color="primary" rounded>
                                    <MDBIcon fab icon="facebook-f"/>
                                </MDBBtn>
                                <MDBBtn size="lg" tag="a" floating social="tw" color="info" rounded>
                                    <MDBIcon fab icon="twitter"/>
                                </MDBBtn>
                                <MDBBtn href="/auth/google" size="lg" tag="a" floating social="gplus" color="danger"
                                        rounded>
                                    <MDBIcon fab icon="google"/>
                                </MDBBtn>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default Login;
