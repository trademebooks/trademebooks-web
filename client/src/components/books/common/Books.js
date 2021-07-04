import React from 'react'
import PropTypes from 'prop-types'

import Book from './Book'

const Books = ({ books, editFlag }) => {
  if (books && books.length > 0) {
    return (
      <>
        <div>
          {books &&
            books.map((book, index) => {
              return <Book key={book._id} book={book} editFlag={editFlag} />
            })}
        </div>
      </>
    )
  }

  return (
    <>
      <div>
        <p>There are no results that match.</p>
      </div>
    </>
  )
}

Books.propTypes = {
  books: PropTypes.array.isRequired,
  editFlag: PropTypes.bool
}

export default Books
