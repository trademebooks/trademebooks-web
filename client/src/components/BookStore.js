import React, {Component} from 'react';
import {
    MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText,
    MDBAnimation, MDBCol, MDBContainer, MDBMedia, MDBRow
} from 'mdbreact';

class BookStore extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const items = [];
        for (let i = 0; i < 10; i++) {
            items.push(
                <MDBCol md="2" className="mt-3 text-center">
                    <MDBCard>
                        <div className="mt-2">
                            <img className="img-fluid" src="https://image.invaluable.com/housePhotos/Antikbar/83/626483/H20672-L145122845.jpg" />
                        </div>
                        <MDBCardBody>
                            <MDBCardTitle className="font-small">Harry Potter And The Order Of Phoenix</MDBCardTitle>
                            <MDBCardText>
                                Price: $100
                            </MDBCardText>
                            <MDBBtn href="#" size="sm">Edit</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            );
        }

        return (
            <div className="mt-4">
                <MDBContainer>
                    <MDBRow center={true}>
                        <MDBCol md="">
                            <div className="text-center">
                                <h1>My Bookstore</h1>
                            </div>
                            <hr/>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        {items}
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default BookStore;
