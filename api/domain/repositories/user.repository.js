const User = require('../models/user.model')

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
  const user = await new User(userData).save(userData)
  return user
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
  const user = await User.findOne(userData)
  return user
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
  const user = await User.updateOne({ _id: userId }, data)
  const updatedUser = await User.findOne({ _id: userId })
  return updatedUser
}
/**
 *
 * @param {*} id
 *
 * @returns user
 */
const getUserById = async (_id) => {
  const foundUser = await User.findOne({ _id })
  return foundUser
}

module.exports = {
  createUser,
  findUserByEmailAndPassword,
  getUserById,
  updateById
}
