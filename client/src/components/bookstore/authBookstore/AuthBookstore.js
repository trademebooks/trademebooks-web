import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
  MDBIcon,
  MDBTooltip
} from 'mdbreact'
import { toastr } from 'react-redux-toastr'

import Books from '../../books/common/Books'
import config from '../../../config'

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
        toastr.success('Clipboard successfully set.')
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
          <MDBTooltip domElement tag="span" placement="bottom">
            <span>
              <MDBIcon icon="info-circle" size="lg" />
            </span>
            <span>
              This is your public bookstore link. You may go to this page to
              preview your listings or share it with others when selling your
              books.
            </span>
          </MDBTooltip>{' '}
          <a href={clipBoardUrl}>{clipBoardUrl}</a>{' '}
          <MDBBtn size="sm" onClick={handleUrlCopyToClipboard}>
            Copy <MDBIcon icon="clipboard" />
          </MDBBtn>
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
