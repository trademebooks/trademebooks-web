const globalResponseDTO = require('../responses/globalResponseDTO')
const bookstoreService = require('../domain/services/bookstore.service')
const bookService = require('../domain/services/book.service')
const catchException = require('../utils/catchExceptions')

const getBookstoreByUsername = catchException(async (req, res, next) => {
  const bookstore = await bookstoreService.getBookstoreByUsername(
    req.params.username
  )

  res.status(200).json(
    globalResponseDTO({
      status: 'success',
      code: 200,
      message: `Bookstore with the specified username.`,
      data: bookstore,
      errors: null
    })
  )
})

const getAuthBookstore = catchException(async (req, res, next) => {
  const books = await bookService.getAllByUserId(req.user._id)

  res.status(200).json(
    globalResponseDTO({
      status: 'success',
      code: 200,
      message: `Bookstore with all its books.`,
      data: books,
      errors: null
    })
  )
})

module.exports = {
  getBookstoreByUsername,
  getAuthBookstore
}
