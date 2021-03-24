import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact'

import Books from '../../books/common/Books'

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
            <div className="col-xs-6 ml-4 mr-2">
              <i
                className="fas fa-map-marker-alt"
                style={{
                  fontSize: '300%',
                  height: '150%',
                  color: 'var(--primary-dark-color)'
                }}
              ></i>
            </div>
            <div className="col-xs-12">
              Located in:
              <br />
              <strong>{location}</strong>
            </div>

            <div className="col-xs-6 ml-4 mr-2">
              <i
                className="fas fa-graduation-cap"
                style={{
                  fontSize: '300%',
                  height: '150%',
                  color: 'var(--primary-dark-color)'
                }}
              ></i>
            </div>
            <div className="col-xs-12">
              Selling books for:
              <br />
              <strong>{school}</strong>
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
