const globalResponseDTO = require('../dtos/responses/globalResponseDTO')
const catchException = require('../utils/catchExceptions')
const createBookRequestDTO = require('../dtos/requests/createBookRequestDTO')
const bookService = require('../domain/services/book.service')
const createBookValidator = require('../validators/createBookValidator')

const getAllbooks = catchException(async (req, res) => {
  const books = await bookService.getAllBooks(
    req.query.q,
    req.query.limit || 10
  )

  res.status(200).json(
    globalResponseDTO({
      message: `List of all books in the database.`,
      data: books
    })
  )
})

const getBookById = catchException(async (req, res) => {
  const book = await bookService.getBookById(req.params.id)

  res.status(200).json(
    globalResponseDTO({
      message: 'Book with the specified id.',
      data: book
    })
  )
})

const createABook = catchException(async (req, res) => {
  const createBookRequest = createBookRequestDTO({
    userId: req.user._id,
    ...req.body
  })

  createBookValidator(createBookRequest)

  const book = await bookService.createBook({
    userId: req.user._id,
    ...req.body
  })

  res.status(200).json(
    globalResponseDTO({
      message: `Book has successfully been added to the database.`,
      data: book
    })
  )
})

const updateABook = catchException(async (req, res) => {
  const book = await bookService.updateBookById(req.params.id, req.body)

  res.status(200).json(
    globalResponseDTO({
      message: `The book has successfully been updated.`,
      data: book
    })
  )
})

const deleteABook = catchException(async (req, res) => {
  const book = await bookService.deleteBookById(req.params.id)

  res.status(200).json(
    globalResponseDTO({
      message: `The book with the id: ${book.id} was successfully deleted.`,
      data: book
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
