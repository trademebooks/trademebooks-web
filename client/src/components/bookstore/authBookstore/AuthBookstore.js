import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact'

import Books from '../../books/common/Books'

const AuthBookstore = ({ books, getBookstoreByUsername }) => {
  useEffect(() => {
    getBookstoreByUsername('auth')
  }, [getBookstoreByUsername])

  return (
    <>
      <div className="header-container text-center">
        <h3 className="font-weight-bold">My Bookstore</h3>
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
