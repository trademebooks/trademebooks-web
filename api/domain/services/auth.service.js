const userRepository = require('../repositories/user.repository')

/**
 * @returns User
 */
const registerUser = async (user) => {
  const createdUser = await userRepository.createUser(user)
  return createdUser
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
