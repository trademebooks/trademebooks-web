const catchException = require('../utils/catchExceptions')
const globalResponseDTO = require('../dtos/responses/globalResponseDTO')
const createBookRequestDTO = require('../dtos/requests/createBookRequestDTO')
const bookDto = require('../dtos/utils/bookDto')
const booksResponseDto = require('../dtos/responses/booksResponseDto')
const bookService = require('../domain/services/book.service')
const createBookValidator = require('../validators/createBookValidator')

const getAllbooks = catchException(async (req, res) => {
  console.log('req.query.q', req.query.q)
  const books = await bookService.getAllBooks(
    req.query.q,
    req.query.limit || 10
  )

  res.status(200).json(
    globalResponseDTO({
      message: `List of all books in the database.`,
      data: booksResponseDto(books)
    })
  )
})

const getBookById = catchException(async (req, res) => {
  const { id } = req.params

  const book = await bookService.getBookById(id)

  res.status(200).json(
    globalResponseDTO({
      message: 'Book with the specified id.',
      data: bookDto(book)
    })
  )
})

const createABook = catchException(async (req, res) => {
  const createBookRequest = createBookRequestDTO({
    userId: req.user._id,
    ...req.body
  })

  createBookValidator(createBookRequest)

  const book = await bookService.createBook(createBookRequest)

  res.status(200).json(
    globalResponseDTO({
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
    globalResponseDTO({
      message: `The book has successfully been updated.`,
      data: bookDto(book)
    })
  )
})

const deleteABook = catchException(async (req, res) => {
  const { id } = req.params

  const book = await bookService.deleteBookById(id)

  res.status(200).json(
    globalResponseDTO({
      message: `The book with the id: ${book.id} was successfully deleted.`,
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
