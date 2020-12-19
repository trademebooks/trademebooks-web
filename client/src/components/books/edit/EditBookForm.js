import React, { useEffect } from 'react'
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact'

import SearchBooks from '../add/SearchBooks'
import PostBookForm from '../add/PostBookForm'
import BookFields from '../add/BookFields'

const EditBookForm = ({ match, getBook, book, addBook, updateBook }) => {
  useEffect(() => {
    getBook(match.params.bookId)
  }, [])

  return (
    <>
      <div className="header-container text-center">
        <h3 className="font-weight-bold">Edit Your Book</h3>
      </div>
      <div className="mt-4">
        <MDBContainer>
          <MDBRow center={true}>
            <MDBCol>
              {/* <SearchBooks
                addBook={addBook}
              /> */}
              <PostBookForm book={book} addBook={addBook} />
              <BookFields
                editBook={true}
                book={book}
                addBook={addBook}
                updateBook={updateBook}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  )
}

export default EditBookForm
