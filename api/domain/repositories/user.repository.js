const UserModel = require('../models/user.model')

/**
 *
 * @param {*} user {
 *  - name
 *  - email
 *  - password
 * }
 *
 * @returns user
 */
const createUser = async (userData) => {
  let user = new UserModel(userData)
  let userReturn = await user.save(userData)

  return userReturn
}

/**
 *
 * @param {*} user {
 *  - name
 *  - email
 *  - password
 * }
 *
 * @returns user
 */
const findUserByEmailAndPassword = async (userData) => {
  const foundUser = await UserModel.findOne(userData)
  return foundUser
}

/**
 *
 * @param {*} user {
 *  - name
 *  - email
 *  - password
 * }
 *
 * @returns user
 */
const updateById = async (userId, data) => {
  const user = await UserModel.updateOne({ _id: userId }, data)
  const updatedUser = await UserModel.findOne({ _id: userId })
  return updatedUser
}
/**
 *
 * @param {*} id
 *
 * @returns user
 */
const getUserById = async (id) => {
  const foundUser = await User.findOne({ id })
  return foundUser
}

module.exports = {
  createUser,
  findUserByEmailAndPassword,
  getUserById,
  updateById
}
