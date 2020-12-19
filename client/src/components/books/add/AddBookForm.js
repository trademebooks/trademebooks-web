import React from 'react'
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact'

import SearchBooks from './SearchBooks'
import PostBookForm from './PostBookForm'
import BookFields from './BookFields'

const AddBookForm = ({ book, addBook, createBook }) => {
  return (
    <>
      <div className="header-container text-center">
        <h3 className="font-weight-bold">Post Your Book</h3>
      </div>
      <div className="mt-4">
        <MDBContainer>
          <MDBRow center={true}>
            <MDBCol>
              <SearchBooks book={book} addBook={addBook} />
              <PostBookForm book={book} addBook={addBook} />
              <BookFields
                editBook={false}
                book={book}
                addBook={addBook}
                createBook={createBook}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  )
}

export default AddBookForm
