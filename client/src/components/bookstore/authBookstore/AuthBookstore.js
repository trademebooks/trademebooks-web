import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { MDBRow, MDBCol, MDBContainer, MDBBtn, MDBIcon } from 'mdbreact'
import { toastr } from 'react-redux-toastr'

import Books from '../../books/common/Books'
import config from '../../../config'

import './AuthBookstore.scss'

const AuthBookstore = ({
  auth: {
    user: { username }
  },
  books,
  getBookstoreByUsername
}) => {
  const [clipBoardUrl, setClipBoardUrl] = useState('')

  useEffect(() => {
    getBookstoreByUsername('auth')
  }, [getBookstoreByUsername])

  useEffect(() => {
    setClipBoardUrl(`${config.BASE_URL}/bookstore/${username}`)
  }, [username])

  const handleUrlCopyToClipboard = (e) => {
    navigator.clipboard.writeText(clipBoardUrl).then(
      function () {
        toastr.success('Your bookstore Link has been copied to your clipboard!')
      },
      function () {
        toastr.error('Clipboard write failed.')
      }
    )
  }

  return (
    <>
      <div className="header-container text-center">
        <h3 className="font-weight-bold">My Bookstore</h3>
        <div>
          <div className="bookstore-clipboard-container">
            <div className="bookstore-clipboard-inner-container">
              <div className="bookstore-clipboard__top-section">
                Copy &amp; Share your Bookstore Link!
              </div>
              <div className="bookstore-clipboard__bottom-section">
                <input
                  className="form-control bookstore-clipboard__bottom-section-input-text"
                  readOnly
                  type="text"
                  value={clipBoardUrl}
                />
                <MDBBtn
                  size="sm"
                  className="bookstore-clipboard__bottom-section-copy-button"
                  onClick={handleUrlCopyToClipboard}
                >
                  <MDBIcon icon="clipboard" size="lg" />
                </MDBBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <MDBContainer>
          <MDBRow center={true}>
            <MDBCol sm="12">
              {books.length < 1 ? (
                <div>There are no books in this bookstore...</div>
              ) : (
                <Books books={books} editFlag={true} />
              )}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  )
}

AuthBookstore.propTypes = {
  books: PropTypes.array.isRequired,
  getBookstoreByUsername: PropTypes.func.isRequired
}

export default AuthBookstore
