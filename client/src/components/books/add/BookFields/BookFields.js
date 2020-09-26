import React, { useEffect } from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBInput, MDBBtn } from 'mdbreact';

import './BookFields.scss';

const BookFields = ({
  book,
  addBook,
  createBook
}) => {

  const onChange = (e) => {
    addBook({ ...book, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    console.log('BookFields', { book });
  }, [book]);

  const postBook = (e) => {
    e.preventDefault();

    console.log({ book })
    createBook(book);
  }
  return (
    <>
      <div className="book-fields-container">
        <MDBContainer>
          <MDBRow className="justify-content-center">
            <MDBCol md="8" sm="12">
              <form>
                <div className="form-group">
                  <MDBInput label="School" onChange={onChange} name="school" value={book.school} />
                </div>
                <div className="form-group">
                  <MDBInput label="Price" onChange={onChange} name="price" value={book.price} />
                </div>
                <div className="form-group">
                  <MDBInput label="Description" type="textarea" rows="5" onChange={onChange} name="description" value={book.description} />
                </div>
                <div className="form-group">
                  <MDBInput label="Location" onChange={onChange} name="location" value={book.location} />
                </div>
              </form>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4" sm="12">
              <MDBBtn outline className="w-100">
                Save and Add Another Book
              </MDBBtn>
            </MDBCol>
            <MDBCol md="8" sm="12">
              <MDBBtn className="w-100" onClick={postBook}>Save and Preview in Bookstore</MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default BookFields;
