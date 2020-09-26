import React from 'react';
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact';

import SearchBooks from './SearchBooks';
import PostBookForm from './PostBookForm';
import BookFields from './BookFields';

const addBooks = () => {

  return (
    <>
      <div className="header-container text-center">
        <h3 className="font-weight-bold">Post Your Book</h3>
      </div>
      <div className="mt-4">
        <MDBContainer>
          <MDBRow center={true}>
            <MDBCol>
              <SearchBooks />
              <PostBookForm />
              <BookFields />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}

export default addBooks;