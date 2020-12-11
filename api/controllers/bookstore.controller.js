const globalResponseDto = require('../dtos/responses/globalResponseDto')
const catchException = require('../utils/catchExceptions')
const bookstoreService = require('../domain/services/bookstore.service')
const bookService = require('../domain/services/book.service')

const getBookstoreByUsername = catchException(async (req, res, next) => {
  const bookstore = await bookstoreService.getBookstoreByUsername(
    req.params.username
  )

  res.status(200).json(
    globalResponseDto({
      message: `Bookstore with the specified username.`,
      data: bookstore
    })
  )
})

const getAuthBookstore = catchException(async (req, res, next) => {
  const books = await bookService.getAllByUserId(req.user._id)

  res.status(200).json(
    globalResponseDto({
      message: `Bookstore with all its books.`,
      data: books
    })
  )
})

module.exports = {
  getBookstoreByUsername,
  getAuthBookstore
}
