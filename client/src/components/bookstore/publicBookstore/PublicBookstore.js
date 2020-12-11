import React, { useEffect } from 'react'
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact'

import Books from '../../books/common/Books'

const PublicBookstore = ({
  match,
  books,
  getBookstoreByUsername
}) => {
  useEffect(() => {
    getBookstoreByUsername(match.params.username)
  }, [match.params.username, getBookstoreByUsername])

  return (
    <>
      <div className="header-container text-center">
        <h3 className="font-weight-bold">
          Welcome to {match.params.username}'s Bookstore
        </h3>
      </div>
      <div className="mt-4">
        <MDBContainer>
          <MDBRow center={true}>
            <MDBCol sm="12">
              {books.length < 1 ? (
                <div>There are no books in this bookstore...</div>
              ) : (
                  <Books books={books} />
                )}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  )
}

export default PublicBookstore
