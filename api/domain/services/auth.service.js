const userRepository = require('../repositories/user.repository')
const bookstoreRepository = require('../repositories/bookstore.repository')
const accountRepository = require('../repositories/account.repository')
const ApiGeneralError = require('../../utils/ApiGeneralError')

const registerUser = async (user) => {
  const user = await userRepository.createUser(user)
  const bookstore = await bookstoreRepository.createByUserId(createdUser._id)
  const account = await accountRepository.createByUserId(createdUser._id)

  return { user, account, bookstore }
}

/**
 * if the user's email and password match in our database then set the current session to that user
 * 
 * @returns user
 */
const loginUser = async (user, req, res) => {
  const loginUser = await userRepository.findUserByEmailAndPassword(user)

  // if the user does not login successfully
  if (!loginUser) {
    throw new ApiGeneralError({
      status: 'failed',
      code: 400,
      message:
        'Invalid credentials, please try a different email and password combination.',
      data: null,
      errors: [
        'Invalid credentials, please try a different email and password combination.'
      ]
    })
  }

  req.login(loggedInUser, function (err) {
    if (err) {
      return next(err)
    }

    res.redirect('/')
  })
}

module.exports = {
  registerUser,
  loginUser
}
