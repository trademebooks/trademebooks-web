import React from 'react'

import Book from './Book'

function Books({ books }) {
  return (
    <>
      <div>
        {books.map((book, index) => {
          return <Book key={book._id} book={book} />
        })}
      </div>
    </>
  )
}

export default Books
