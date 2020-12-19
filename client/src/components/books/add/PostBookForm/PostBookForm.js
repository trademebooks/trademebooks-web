import React, { useState, useEffect } from 'react'
import { MDBRow, MDBCol, MDBContainer, MDBInput } from 'mdbreact'

import Conditions from './Conditions'

import bookImage from '../../common/icons/sample-book.png'

import './PostBookForm.scss'

const PostBookForm = ({ book, addBook }) => {
  // authors
  const [authors, setAuthors] = useState([])

  const removeAuthor = (indexToRemove) => {
    const newAuthors = [...authors.filter((_, index) => index !== indexToRemove)]

    setAuthors(newAuthors)

    addBook({
      ...book,
      authors: newAuthors
    })
  }

  const addAuthor = (event) => {
    if (event.target.value !== '') {
      const newAuthors = [...authors, event.target.value]

      setAuthors(newAuthors)

      addBook({
        ...book,
        authors: newAuthors
      })

      event.target.value = ''
    }
  }

  const onChange = (e) => {
    addBook({
      ...book,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    setAuthors(book.authors)
  }, [book])

  return (
    <>
      <div className="post-book-form-container">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="4" sm="12">
              <div className="text-center">
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
                    <MDBInput
                      label="ISBN-10"
                      size="lg"
                      value={book.isbn_10}
                      name="isbn_10"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <MDBInput
                      label="ISBN-13"
                      size="lg"
                      value={book.isbn_13}
                      name="isbn_13"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <MDBInput
                      label="Edition"
                      size="lg"
                      value={book.edition}
                      name="edition"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <div className="tags-input">
                      <ul id="tags">
                        {authors.map((author, index) => (
                          <li key={index} className="tag">
                            <span className="tag-title">{author}</span>
                            <span className="tag-close-icon" onClick={() => removeAuthor(index)}>x</span>
                          </li>
                        ))}
                      </ul>
                      <input
                        type="text"
                        onKeyUp={(event) => (event.key === 'Enter' ? addAuthor(event) : null)}
                        placeholder="Author Name(s)"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12" sm="12">
              <Conditions book={book} addBook={addBook} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  )
}

export default PostBookForm
