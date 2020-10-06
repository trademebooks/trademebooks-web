const bookstoreRepository = require('../repositories/bookstore.repository');
const bookRepository = require('../repositories/book.repository');

const getBookstoreByUsername = async (username) => {
  const bookstore = await bookstoreRepository.getByUsername(username);

  const books = await bookRepository.getAllByUserId(bookstore.userId);

  const bookstoreWithBooks = {
    ...bookstore.toObject(),
    books,
  };

  return bookstoreWithBooks;
};

module.exports = {
  getBookstoreByUsername,
};
