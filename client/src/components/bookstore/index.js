import React, { useEffect } from 'react';
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact';

const BookStore = ({ match }) => {
  useEffect(() => {
    console.log(match.params.username)
  }, [])

  return (
    <>
      <div className="header-container text-center">
        <h3 className="font-weight-bold">Welcome to {match.params.username}'s Bookstore</h3>
      </div>
      <div className="mt-4">
        <MDBContainer>
          <MDBRow center={true}>
            <MDBCol>
              <div>here is the list of books...</div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default BookStore;
