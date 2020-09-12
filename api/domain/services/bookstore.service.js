const bookstoreRepository = require("../repositories/bookstore.repository");
const ApiException = require("../../utils/ApiException");
const mongoose = require("mongoose");

// Retrieve - one
const getBookstoreByUsername = async (bookId) => {
  if (!mongoose.Types.ObjectId.isValid(bookId)) {
    // the id is invalid
    throw new ApiException(
      (message = `the book with that id: ${bookId} does not exist.`),
      (status = "failed"),
      (code = 401),
      (data = null),
      (errors = [`the book with that id: ${bookId} does not exist.`])
    );
  }

  let bookstore = await bookstoreRepository.getByUsername(bookId);

  // console.log('book', book);

  if (!bookstore) {
    throw new ApiException(
      (message = `the bookstore with that id: ${bookId} does not exist.`),
      (status = "failed"),
      (code = 401),
      (data = null),
      (errors = [`the bookstore with that id: ${bookId} does not exist.`])
    );
  }

  return bookstore;
};

const updateBookstoreById = async (bookstoreId) => {
  /*
  if (!mongoose.Types.ObjectId.isValid(bookstoreId)) {
    // the id is invalid
    throw new ApiException(
      (message = `the bookstore with that id: ${bookstoreId} does not exist.`),
      (status = "failed"),
      (code = 401),
      (data = null),
      (errors = [`the bookstore with that id: ${bookstoreId} does not exist.`])
    );
  }
  */

  let bookstore = await bookstoreRepository.updateBookstoreById(bookstoreId);
  console.log("bookstore: ", bookstore);

  if (!bookstore) {
    throw new ApiException(
      (message = `the bookstore with that id: ${bookstoreId} does not exist.`),
      (status = "failed"),
      (code = 401),
      (data = null),
      (errors = [`the bookstore with that id: ${bookstoreId} does not exist.`])
    );
  }

  return bookstore;
};

module.exports = {
  getBookstoreByUsername,
  updateBookstoreById,
};
