import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact'

import Books from '../../books/common/Books'

const PublicBookstore = ({ match, books, getBookstoreByUsername }) => {
  useEffect(() => {
    getBookstoreByUsername(match.params.username)
  }, [match.params.username, getBookstoreByUsername])

  return (
    <>

        <div className="mt-4">
          <MDBContainer>
            <MDBRow>
              <MDBCol sm="12">
                <h3 className="font-weight-bold">
                  Welcome to {match.params.username}'s Bookstore
                </h3>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <MDBContainer>
            <MDBRow>
                <div class="col-xs-6 ml-4">
                  <i class="fas fa-map-marker-alt" style={{fontSize: "300%", height: "150%", color: "var(--primary-dark-color)"}}></i>
                </div>
                <div class="col-xs-12">
                    Located in:<br />
                    <strong>North York, Toronto</strong>
                </div>

                <div class="col-xs-6 ml-4">
                  <i class="fas fa-graduation-cap" style={{fontSize: "300%", height: "150%", color: "var(--primary-dark-color)"}}></i> 
                </div>
                <div class="col-xs-12">
                    Selling books for:<br />
                    <strong>University of Toronto Scarborough</strong>
                </div>
            </MDBRow>
          </MDBContainer>
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

PublicBookstore.propTypes = {
  match: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  getBookstoreByUsername: PropTypes.func.isRequired
}

export default PublicBookstore
