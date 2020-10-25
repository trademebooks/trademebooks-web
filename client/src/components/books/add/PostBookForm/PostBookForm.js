import React from 'react'
import { MDBRow, MDBCol, MDBContainer, MDBInput } from 'mdbreact'

import Conditions from './Conditions'

import './PostBookForm.scss'

import bookImage from '../../common/icons/sample-book.png'

const PostBookForm = ({ book, addBook }) => {
  const onChange = (e) => {
    addBook({ ...book, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="post-book-form-container">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="4" sm="12">
              <div className='text-center'>
                <div className="py-5">
                  <img
                    src={book.imageUrl || bookImage}
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
                    <MDBInput
                      label="Title"
                      size="lg"
                      value={book.title}
                      name="title"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <MDBInput label="ISBN-10" size="lg" value={book.isbn_10} />
                  </div>
                  <div className="form-group">
                    <MDBInput label="ISBN-13" size="lg" value={book.isbn_13} />
                  </div>
                  <div className="form-group">
                    <MDBInput label="Edition" size="lg" value={book.edition} />
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
  )
}

export default PostBookForm
