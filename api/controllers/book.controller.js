const globalResponseDTO = require('../responses/globalResponseDTO');
const createBookRequestDTO = require('../requests/createBookRequestDTO');
const bookService = require('../domain/services/book.service');
const bookResponseDTO = require('../responses/bookResponseDTO');

const catchException = require('../utils/catchExceptions');

/**
 * Description:
 */
const getAllbooks = catchException(async (req, res, next) => {
  // 5. business logic
  const books = await bookService.getAllBooks();

  // 7. response
  return res.json(globalResponseDTO(
    status = 'success',
    code = 200,
    message = `List of all books in the database.`,
    data = books,
    errors = null
  ));
});

/**
 * Description:
 */
const getBookById = catchException(async (req, res, next) => {
  // 5. business logic
  let book = await bookService.getBookById(req.params.id);

  // 7. response
  return res.json(globalResponseDTO(
    status = 'success',
    code = 200,
    message = `Book with the specified id.`,
    data = book,
    errors = null
  ));
});

/**
 * Description:
 */
const createABook = catchException(async (req, res, next) => {
  // 1. POST /api/v1/books

  // 2. middleware: auth

  // 3. request
  const createBookRequest = createBookRequestDTO({ id: req.session.user.id, ...req.body});

  // 4. validation
  const createBookValidation = createBookRequestDTO(createBookRequest);

  // 5. business logic
  const book = await bookService.createBook(req.body);

  // 7. response
  return res.status(200).json(globalResponseDTO(
    status = "success",
    code = 200,
    message = `Book has successfully been added to the database.`,
    data = book,
    errors = null
  ));
});

/**
 * Description:
 */
const updateABook = catchException(async (req, res, next) => {
  // 5. business logic
  const book = await bookService.updateBookById(req.params.id, req.body);

  // 7. response
  return res.json(globalResponseDTO(
    status = 'success',
    code = 200,
    message = `The book has successfully been updated.`,
    data = book,
    errors = null
  ));
});

/**
 * Deletes a book in the database by the specified book's id
 */
const deleteABook = catchException(async (req, res, next) => {
  // 5. business logic
  const book = await bookService.deleteBookById(req.params.id);

  // 7. response
  return res.json(globalResponseDTO(
    status = 'success',
    code = 200,
    message = `The book with the id: ${book.id} was successfully deleted.`,
    data = null,
    errors = null
  ));
});

module.exports = {
  getAllbooks,
  getBookById,
  createABook,
  updateABook,
  deleteABook
};