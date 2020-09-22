const bookstoreRepository = require('../repositories/bookstore.repository');
const bookRepository = require('../repositories/book.repository');

const mongoose = require('mongoose');

const getBookstoreByUsername = async (username) => {
  const bookstore = await bookstoreRepository.getByUsername(username);

  const books = await bookRepository.getAllByUserId(bookstore.userId);

  const bookstoreAndBooks = {
    ...bookstore.toObject(),
    books
  };

  return bookstoreAndBooks;
}

module.exports = {
  getBookstoreByUsername
};