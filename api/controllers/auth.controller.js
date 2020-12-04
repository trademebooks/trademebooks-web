const globalResponseDTO = require('../responses/globalResponseDTO')
const registerUserRequestDTO = require('../requests/registerUserRequestDTO')
const loginUserRequestDTO = require('../requests/loginUserRequestDTO')
const userResponseDTO = require('../responses/userResponseDTO')

const registerUserValidator = require('../validators/registerUserValidator')
const loginUserValidator = require('../validators/loginUserValidator')

const authService = require('../domain/services/auth.service')

const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

const catchExceptions = require('../utils/catchExceptions')

/**
 * Inserts the user into the database and fires off an email notification to that user's email if successful.
 */
const registerUser = catchExceptions(async (req, res) => {
  const registerUserRequest = registerUserRequestDTO(req.body)

  registerUserValidator(registerUserRequest)

  const user = await authService.registerUser(registerUserRequest)

  eventEmitter.emit('userHasRegistered', user)

  res.status(200).json(
    globalResponseDTO({
      status: 'success',
      code: 200,
      message: `The email: ${registerUserRequest.email} has successfully registered.`,
      data: userResponseDTO(user),
      errors: null
    })
  )
})

/**
 * Logs the user in and set a session for it.
 */
const logUserIn = catchExceptions(async (req, res, next) => {
  const loginUserRequest = loginUserRequestDTO(req.body)

  const loginUserValidation = loginUserValidator(loginUserRequest)

  // if the user's email and password match in our database then set the current session to that user
  const loggedInUser = await authService.loginUser(loginUserRequest)

  if (loggedInUser) {
    req.login(loggedInUser, function (err) {
      if (err) {
        return next(err)
      }

      res.redirect('/')
    })
  } else {
    // if the user does not login successfully
    res.status(400).json(
      globalResponseDTO({
        status: 'failed',
        code: 400,
        message: `Invalid credentials, please try a different email and password combination.`,
        data: null,
        errors: [
          `Invalid credentials, please try a different email and password combination.`
        ]
      })
    )
  }

  res.status(200).json(
    globalResponseDTO({
      status: 'success',
      code: 200,
      message: `The user has successfully logged in.`,
      data: userResponseDTO(loggedInUser),
      errors: null
    })
  )
})

/**
 * Logs the currently authenticated user out of the current session.
 */
const logUserOut = catchExceptions((req, res) => {
  req.logout()

  res.status(200).json(
    globalResponseDTO({
      status: 'success',
      code: 200,
      message: `The user has successfully logged out.`,
      data: {},
      errors: null
    })
  )
})

/**
 * Gets the currently authenticated user in the current session.
 */
const getAuthUser = catchExceptions((req, res) => {
  const user = req.user

  res.status(200).json(
    globalResponseDTO({
      status: 'success',
      code: 200,
      message: `The currently authenticated user's information.`,
      data: userResponseDTO(user),
      errors: null
    })
  )
})

module.exports = {
  registerUser,
  logUserIn,
  logUserOut,
  getAuthUser
}
