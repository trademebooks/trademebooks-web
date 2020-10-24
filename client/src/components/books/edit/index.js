import React from 'react'
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact'
import { connect } from 'react-redux'

import { getBook } from '../../../actions/book'

import SearchBooks from '../add/SearchBooks'
import PostBookForm from '../add/PostBookForm'
import BookFields from '../add/BookFields'

const EditBookForm = ({ match, getBook }) => {
  getBook(match.params.bookId)

  return (
    <>
      <div className="header-container text-center">
        <h3 className="font-weight-bold">Edit Your Book</h3>
      </div>
      <div className="mt-4">
        <MDBContainer>
          <MDBRow center={true}>
            <MDBCol>
              <SearchBooks />
              <PostBookForm />
              <BookFields editBook={true} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  getBook
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBookForm)
