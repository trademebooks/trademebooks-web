const userRepository = require('../repositories/user.repository')
const bookstoreRepository = require('../repositories/bookstore.repository')
const accountRepository = require('../repositories/account.repository')
const ApiGeneralError = require('../../utils/ApiGeneralError')
const userDto = require('../../dtos/utils/userDto')

const registerUser = async (user) => {
  const createdUser = await userRepository.createUser(user)
  const bookstore = await bookstoreRepository.createByUserId(createdUser._id)
  const account = await accountRepository.createByUserId(createdUser._id)

  return {
    createdUser: userDto(createdUser),
    account,
    bookstore
  }
}

/**
 * if the user's email and password match in our database then set the current session to that user
 *
 * @returns user
 */
const loginUser = async (user, req, res, next) => {
  const loginUser = await userRepository.findUserByEmailAndPassword(user)

  if (loginUser) {
    req.login(loginUser, (err) => {
      if (err) {
        return next(err)
      }
    })

    return loginUser
  }

  throw new ApiGeneralError({
    errors: [
      'Invalid credentials, please try a different email and password combination.'
    ]
  })
}

module.exports = {
  registerUser,
  loginUser
}
