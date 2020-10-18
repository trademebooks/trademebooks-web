const userRepository = require('../repositories/user.repository')
const bookstoreRepository = require('../repositories/bookstore.repository')
const accountRepository = require('../repositories/account.repository')

/**
 * @returns User
 */
const registerUser = async (user) => {
  const createdUser = await userRepository.createUser(user)
  console.log(createdUser)
  const bookstore = await bookstoreRepository.createByUserId(createdUser._id)
  const account = await accountRepository.createByUserId(createdUser._id)
  return { createdUser, bookstore, account }
}

/**
 * @returns user
 */
const loginUser = async (user) => {
  let loginUser = await userRepository.findUserByEmailAndPassword(user)
  return loginUser
}

/**
 * @returns boolean
 */
const logoutUser = async (req) => {
  return
}

/**
 * @returns User
 */
const getAuthUser = async (req) => {
  return req.session.user
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getAuthUser
}
