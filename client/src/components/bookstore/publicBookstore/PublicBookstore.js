import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact'

import Books from '../../books/common/Books'

import './PublicBookstore.scss'

const PublicBookstore = ({
  match,
  books,
  getAccountByUsername,
  getBookstoreByUsername
}) => {
  const [bookstoreData, setBookstoreData] = useState({
    location: '',
    school: ''
  })

  const { location, school } = bookstoreData

  useEffect(() => {
    const fetchAccount = async () => {
      const { location, school } = await getAccountByUsername(
        match.params.username
      )

      setBookstoreData({ location: location, school: school })
    }

    fetchAccount()

    getBookstoreByUsername(match.params.username)
  }, [match.params.username, getAccountByUsername, getBookstoreByUsername])

  return (
    <>
      <div className="mt-4">
        <MDBContainer>
          <MDBRow>
            <MDBCol sm="12">
              <h3>
                Welcome to{' '}
                <span className="font-weight-bold">
                  {match.params.username}
                </span>
                's Bookstore
              </h3>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer>
          <MDBRow>
            <div className="col-xs-12 ml-4">
              <div>
                <i className="fas fa-map-marker-alt icon--style"></i> Location
              </div>
              <div>
                <strong>{location}</strong>
              </div>
            </div>
            <div className="col-xs-12 ml-4">
              <div>
                <i className="fas fa-graduation-cap icon--style"></i> School
              </div>
              <div>
                <strong>{school}</strong>
              </div>
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
  getAccountByUsername: PropTypes.func.isRequired,
  getBookstoreByUsername: PropTypes.func.isRequired
}

export default PublicBookstore
