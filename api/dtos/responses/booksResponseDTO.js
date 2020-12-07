const bookDto = require('../utils/bookDto')

function booksResponseDto(books) {
  return books.map((book) => bookDto(book))
}

module.exports = booksResponseDto
