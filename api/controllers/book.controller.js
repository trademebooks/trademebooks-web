const catchException = require('../utils/catchExceptions')
const globalResponseDto = require('../dtos/responses/globalResponseDto')
const createBookRequestDto = require('../dtos/requests/createBookRequestDto')
const bookDto = require('../dtos/utils/bookDto')
const booksResponseDto = require('../dtos/responses/booksResponseDto')
const bookService = require('../domain/services/book.service')
const createBookValidator = require('../validators/createBookValidator')
const accountSerivce = require('../domain/services/account.service')

const getAllbooks = catchException(async (req, res) => {
  const books = await bookService.getAllBooks(
    req.query.q,
    req.query.limit || 10
  )

  res.status(200).json(
    globalResponseDto({
      message: `List of all books in the database.`,
      data: booksResponseDto(books)
    })
  )
})

const getBookById = catchException(async (req, res) => {
  const { id } = req.params

  const book = await bookService.getBookById(id)

  res.status(200).json(
    globalResponseDto({
      message: 'Book with the specified id.',
      data: bookDto(book)
    })
  )
})

const createABook = catchException(async (req, res) => {
  const account = await accountSerivce.getById(req.user._id)
  let bookRequest = {
    userId: req.user._id,
    ...req.body}
  if (account.location) {
    bookRequest.location = account.location
  }
  const createBookRequest = createBookRequestDto(bookRequest)

  createBookValidator(createBookRequest)


  const book = await bookService.createBook(createBookRequest)

  res.status(200).json(
    globalResponseDto({
      message: `Book has successfully been added to the database.`,
      data: bookDto(book)
    })
  )
})

const updateABook = catchException(async (req, res) => {
  const { id } = req.params
  const { body } = req

  const book = await bookService.updateBookById(id, body)

  res.status(200).json(
    globalResponseDto({
      message: `The book has successfully been updated.`,
      data: bookDto(book)
    })
  )
})

const deleteABook = catchException(async (req, res) => {
  const { id } = req.params

  const book = await bookService.deleteBookById(id)

  res.status(200).json(
    globalResponseDto({
      message: `The book with the id: ${id} was successfully deleted.`,
      data: bookDto(book)
    })
  )
})

module.exports = {
  getAllbooks,
  getBookById,
  createABook,
  updateABook,
  deleteABook
}
