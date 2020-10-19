import React from 'react'

import Book from './Book'

function Books({ books, editFlag }) {
  return (
    <>
      <div>
        {books.map((book, index) => {
          return <Book key={book._id} book={book} editFlag={editFlag} />
        })}
      </div>
    </>
  )
}

export default Books
