const Bookstore = require('../models/bookstore.model')
const User = require('../models/user.model')

const getByUsername = async (username) => {
  const user = await User.findOne({ username })
  const bookstore = await BookstoreModel.findOne({ userId: user.id })

  return bookstore
}

const createByUserId = async (userId) => {
  const userBookstoreData = new Bookstore({ userId })
  const newBookstore = await userBookstoreData.save({ userId })

  return newBookstore
}

module.exports = {
  getByUsername,
  createByUserId
}
