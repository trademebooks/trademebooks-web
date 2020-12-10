const mongoose = require('mongoose')

const globalResponseDTO = require('../dtos/responses/globalResponseDTO')
const bookService = require('../domain/services/book.service')

const bookPermission = async (req, res, next) => {
  try {
    const bookId = req.params.id

    // when we do try to find the book from the book service, and it throws us service errors
    let book = {}
    book = await bookService.getBookById(bookId)
    console.log({ book })
    // the id must be of valid format
    if (!mongoose.Types.ObjectId.isValid(bookId)) {
      res.status(401).json(
        globalResponseDTO({
          status: 'failed',
          code: 401,
          message: `the book with that id: ${bookId} does not exist.`,
          data: null,
          errors: [`the book with that id: ${bookId} does not exist.`]
        })
      )
    }
    // When updating or deleting a book, the book must belong to the user that created it
    else if (
      book.userId &&
      req.user._id.toString() !== book.userId.toString()
    ) {
      res.status(401).json(
        globalResponseDTO({
          status: 'failed',
          code: 401,
          message:
            'Access denied: you must be the owner of this book when updating or deleting it.',
          data: null,
          errors: [
            'Access denied: you must be the owner of this book when updating or deleting it.'
          ]
        })
      )
    } else {
      next()
    }
  } catch (error) {
    res.status(error.code).json(
      globalResponseDTO({
        status: 'failed',
        code: error.code,
        message: error.message,
        data: null,
        errors: error.errors
      })
    )
  }
}

module.exports = bookPermission
