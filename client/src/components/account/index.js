import React from 'react';
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact';

const Account = (props) => {
    // const changeHandler = event => {
    //     this.setState({ [event.target.name]: { value: event.target.value, valid: !!event.target.value } });
    // };

    return (
        <>
            <div className="header-container text-center">
                <h3 className="font-weight-bold">Account Settings</h3>
            </div>
            <div className="mt-4">
                <MDBContainer>
                    <MDBRow center={true}>
                        <MDBCol>
                            <p>Account settings here</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </>
    );
}

export default Account;
