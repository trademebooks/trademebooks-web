const BookstoreModel = require('../models/bookstore.model')
const UserModel = require('../models/user.model')

const getByUsername = async (username) => {
  const user = await UserModel.findOne({ username }).exec()
  const bookstore = await BookstoreModel.findOne({ userId: user.id }).exec()
  return bookstore
}

const createByUserId = async (userId) => {
  const userBookstoreData = new BookstoreModel({ userId })
  const newBookstore = await userBookstoreData.save({ userId })
  return newBookstore
}

module.exports = {
  getByUsername,
  createByUserId
}
