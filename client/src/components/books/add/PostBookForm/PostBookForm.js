import React, { useEffect } from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBInput } from 'mdbreact';

import Conditions from './Conditions';

import './PostBookForm.scss';

import bookImage from '../../common/icons/sample-book.png';

const PostBookForm = ({ book }) => {
  useEffect(() => {
    console.log('BookFields', { book });
  }, [book]);

  return (
    <>
      <div className="post-book-form-container">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="4" sm="12">
              <div>
                <div className="py-3">
                  <img
                    src={bookImage}
                    alt="thumbnail"
                    className="img-thumbnail book-image-size"
                  />
                </div>
              </div>
            </MDBCol>
            <MDBCol md="8" sm="12">
              <div>
                <form className="post-book-form-fields">
                  <div className="form-group">
                    <MDBInput label="Title" size="lg" value={book.title} />
                  </div>
                  <div className="form-group">
                    <MDBInput label="ISBN-10" size="lg" />
                  </div>
                  <div className="form-group">
                    <MDBInput label="ISBN-13" size="lg" />
                  </div>
                  <div className="form-group">
                    <MDBInput label="Edition" size="lg" />
                  </div>
                </form>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12" sm="12">
              <Conditions />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default PostBookForm;