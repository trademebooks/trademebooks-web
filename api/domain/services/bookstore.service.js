const bookstoreRepository = require('../repositories/bookstore.repository');
const ApiException = require('../../utils/ApiException');
const mongoose = require('mongoose');

// Retrieve - one
const getBookstoreByUsername = async (bookId) => {
  if(!mongoose.Types.ObjectId.isValid(bookId)) { // the id is invalid
    throw new ApiException(
      message = `the book with that id: ${bookId} does not exist.`,
      status = 'failed',
      code = 401,
      data = null,
      errors = [
        `the book with that id: ${bookId} does not exist.`
      ]
    );
  }

  let book = await bookRepository.getById(bookId);

  // console.log('book', book);

  if (!book) {
    throw new ApiException(
      message = `the book with that id: ${bookId} does not exist.`,
      status = 'failed',
      code = 401,
      data = null,
      errors = [
        `the book with that id: ${bookId} does not exist.`
      ]
    );
  }

  return book;
}

module.exports = {
  getBookstoreByUsername
};