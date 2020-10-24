import React, { useState, useEffect } from 'react'
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact'

import api from '../../../utils/api'
import Books from '../../books/common/Books'
import Jumbotron from './Jumbotron'

const HomePage = () => {
  const [books, setBooks] = useState([])

  const onChangeSearchBooks = async (event) => {
    let searchQuery = event.target.value
    if (searchQuery.length >= 0) {
      try {
        const response = await api.get(`/books?q=${searchQuery}&limit=30`)
        const books = response.data.data
        setBooks(books)
      } catch (error) {
        console.log({ error })
      }
    }
  }

  useEffect(() => {
    ;(async () => {
      try {
        const response = await api.get(`/books?limit=50`)
        const books = response.data.data
        setBooks(books)
      } catch (error) {
        console.log({ error })
      }
    })()
  }, [])

  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol sm="12">
            <Jumbotron onChangeSearchBooks={onChangeSearchBooks} />
            <Books books={books} editFlag={false} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default HomePage
