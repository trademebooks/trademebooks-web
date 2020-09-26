const bookstoreModel = require('../models/bookstore.model');
const userModel = require('../models/user.model');

const getByUsername = async (username) => {
  const user = await userModel.findOne({ username }).exec();
  const bookstore = await bookstoreModel.findOne({ userId: user.id }).exec();
  return bookstore;
}

module.exports = {
  getByUsername,
  updateBookstoreById,
};
