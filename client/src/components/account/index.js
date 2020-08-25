import React from 'react';
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact';

const Account = (props) => {
    // const changeHandler = event => {
    //     this.setState({ [event.target.name]: { value: event.target.value, valid: !!event.target.value } });
    // };

    return (
        <>
            <div className="mt-4">
                <MDBContainer>
                    <MDBRow center={true}>
                        <MDBCol md="">
                            <div className="text-center">
                                <h2>Account Settings</h2>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </>
    );
}

export default Account;
