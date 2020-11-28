const globalResponseDTO = require('../responses/globalResponseDTO')
const bookstoreService = require('../domain/services/bookstore.service')
const bookService = require('../domain/services/book.service')
const catchException = require('../utils/catchExceptions')

const getBookstoreByUsername = catchException(async (req, res, next) => {
  let bookstore = await bookstoreService.getBookstoreByUsername(
    req.params.username
  )

  return res.json(
    globalResponseDTO(
      (status = 'success'),
      (code = 200),
      (message = `Bookstore with the specified username.`),
      (data = bookstore),
      (errors = null)
    )
  )
})

const getAuthBookstore = catchException(async (req, res, next) => {
  const books = await bookService.getAllByUserId(req.session.user._id)

  return res.json(
    globalResponseDTO(
      (status = 'success'),
      (code = 200),
      (message = `Bookstore with all its books.`),
      (data = books),
      (errors = null)
    )
  )
})

module.exports = {
  getBookstoreByUsername,
  getAuthBookstore
}
