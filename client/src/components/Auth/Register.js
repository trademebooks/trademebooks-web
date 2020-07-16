import {
    MDBBtn,
    MDBCol,
    MDBContainer,

    MDBIcon,
    MDBInput,
    MDBRow
} from 'mdbreact';
import React from 'react';

export const Register = () => {
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
                                    success="right"/>
                                <MDBInput
                                    label="Your email"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"/>
                                <MDBInput label="Your password" icon="lock" group type="password" validate/>
                                <MDBInput
                                    label="Confirm your password"
                                    icon="exclamation-triangle"
                                    group
                                    type="password"
                                    validate
                                    error="wrong"
                                    success="right"/>
                            </div>
                            <div className="text-center">
                                <MDBBtn color="primary">Register</MDBBtn>
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
                            <MDBBtn
                                href="/auth/google"
                                size="lg"
                                tag="a"
                                floating
                                social="gplus"
                                color="danger"
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

export default Register;