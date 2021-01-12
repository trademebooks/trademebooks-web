const AccountModel = require('../models/account.model')
const UserModel = require('../models/user.model')

const getById = async (userId) => {
  const account = await AccountModel.findOne({ userId })
  return account
}

const updateById = async (userId, data) => {
  await AccountModel.updateOne({ userId }, data)
  const updatedAccount = await AccountModel.findOne({ userId })
  return updatedAccount
}

const getAccountByUsername = async (username) => {
  const user = await UserModel.findOne({ username })
  const account = await AccountModel.findOne({ userId: user._id })
  return account
}

const createByUserId = async (userId) => {
  const userBookstoreData = new AccountModel({ userId })
  const newBookstore = await userBookstoreData.save({ userId })
  return newBookstore
}

module.exports = {
  getById,
  updateById,
  getAccountByUsername,
  createByUserId
}
