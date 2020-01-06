import React, {Component} from 'react';
import {MDBAnimation, MDBCol, MDBContainer, MDBMedia, MDBRow} from "mdbreact";

class BookStore extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const items = [];
        for (let i = 0; i < 10; i++) {
            items.push(
                <MDBAnimation type="fadeIn" duration="500ms">
                    <MDBContainer className="mt-4">
                        <MDBRow center={true}>
                            <MDBCol md="12">
                                <MDBMedia>
                                    <MDBMedia left className="mr-3" href="#">
                                        <MDBMedia object
                                                  src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg"
                                                  alt=""/>
                                    </MDBMedia>
                                    <MDBMedia body>
                                        <MDBMedia heading>
                                            Media heading
                                        </MDBMedia>
                                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                            ante
                                            sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                                            viverra
                                            turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                                            lacinia congue
                                            felis in faucibus.
                                        </p>
                                    </MDBMedia>
                                </MDBMedia>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBAnimation>
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

                            <div>
                                {items}
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default BookStore;
