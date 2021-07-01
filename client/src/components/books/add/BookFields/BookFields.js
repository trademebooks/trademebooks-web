import React from 'react'
import { MDBRow, MDBCol, MDBContainer, MDBInput, MDBBtn } from 'mdbreact'

import './BookFields.scss'

const BookFields = ({ book, addBook, createBook, updateBook, editBook }) => {
  const onChange = (e) => {
    addBook({ ...book, [e.target.name]: e.target.value })
  }

  const postBook = (redirectUrl) => {
    if (editBook) {
      updateBook(book._id, book, redirectUrl)
    } else {
      createBook(book, redirectUrl)
    }
  }

  return (
    <>
      <div className="book-fields-container">
        <MDBContainer>
          <MDBRow className="justify-content-center">
            <MDBCol md="8" sm="12">
              <form>
                <div className="form-group">
                  <MDBInput
                    label="Price (Required)"
                    onChange={onChange}
                    name="price"
                    value={book.price}
                  />
                </div>
                <div className="form-group">
                  <MDBInput
                    label="Description (Optional)"
                    type="textarea"
                    rows="5"
                    onChange={onChange}
                    name="description"
                    value={book.description}
                  />
                </div>
              </form>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="6" sm="12">
              <MDBBtn className="w-100" onClick={(e) => {
                e.preventDefault()
                postBook()
              }}>
                {editBook ? 'Update Book Listing' : 'Save and Add Another Book'}
              </MDBBtn>
            </MDBCol>
            <MDBCol md="6" sm="12">
              <MDBBtn className="w-100" onClick={(e) => {
                e.preventDefault()
                postBook('/my-bookstore')
              }}>
                {'Save and Preview in My Bookstore'}
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  )
}

export default BookFields
