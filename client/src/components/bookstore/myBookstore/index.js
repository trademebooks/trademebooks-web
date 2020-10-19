import React, { useEffect, useState } from 'react'
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact'
import Books from '../../books/common/Books'
import api from '../../../utils/api'

const BookStore = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const response = await api.get(`/bookstores/auth`)
        const books = response.data.data
        console.log({ response })
        setBooks(books)
      } catch (error) {
        console.log({ error })
      }
    })()
  }, [])

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
                <Books books={books} />
              )}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  )
}

export default BookStore
