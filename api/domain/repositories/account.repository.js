const AccountModel = require('../models/account.model')
const BookstoreModel = require('../models/bookstore.model')

const getById = async (userId) => {
  const account = await AccountModel.findOne({ userId })
  return account
}

const updateById = async (userId, data) => {
  await AccountModel.updateOne({ userId }, data)
  const updatedAccount = await AccountModel.find({ userId })
  return updatedAccount
}

const createByUserId = async (userId) => {
  const userBookstoreData = new AccountModel({ userId })
  const newBookstore = await userBookstoreData.save({ userId })
  return newBookstore
}

module.exports = {
  getById,
  updateById,
  createByUserId
}
