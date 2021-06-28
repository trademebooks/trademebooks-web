import React from 'react'
import PropTypes from 'prop-types'

import Book from './Book'

const Books = ({ books, editFlag }) => {
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

Books.propTypes = {
  books: PropTypes.array.isRequired,
  editFlag: PropTypes.bool
}

export default Books
