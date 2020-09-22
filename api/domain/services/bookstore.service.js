const bookstoreRepository = require('../repositories/bookstore.repository');

const getBookstoreByUsername = async (username) => {
  let book = await bookstoreRepository.getByUsername(username);
  return book;
}

module.exports = {
  getBookstoreByUsername
};