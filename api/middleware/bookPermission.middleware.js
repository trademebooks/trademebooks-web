const globalResponseDTO = require('../responses/globalResponseDTO')
const bookService = require('../domain/services/book.service')

const bookPermission = async (req, res, next) => {
  // When updating or deleting a book, the book must belong to the user that created it
  const bookId = req.params.id
  const book = await bookService.getBookById(bookId)

  if (req.user._id.toString() === book.userId.toString()) {
    next()
  }

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
}

module.exports = bookPermission
