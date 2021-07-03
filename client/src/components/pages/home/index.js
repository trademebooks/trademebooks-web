import React, { useState, useEffect } from 'react'
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact'
import Books from '../../books/common/Books'
import Jumbotron from './Jumbotron'
import { getAllBooks } from '../../../actions/book'
import MetaDecorator from '../../utils/MetaDecorator'
import metags from '../../../config/metags'

const HomePage = () => {
  const [books, setBooks] = useState([])

  const onChangeSearchBooks = async (event) => {
    let searchQuery = event.target.value

    if (searchQuery.length >= 0) {
      const books = await getAllBooks(searchQuery, 20)

      setBooks(books)
    }
  }

  useEffect(() => {
    ;(async () => {
      const books = await getAllBooks(undefined, 20)

      setBooks(books)
    })()
  }, [])

  return (
    <>
      <MetaDecorator
        description={metags.homePage.description}
        title={metags.homePage.title}
        imageUrl={metags.homePage.imageUrl}
        imageAltText={metags.homePage.imageAltText}
      />
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
