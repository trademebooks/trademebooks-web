const globalResponseDTO = require('../dtos/responses/globalResponseDTO')
const catchExceptions = require('../utils/catchExceptions')
const registerUserRequestDTO = require('../dtos/requests/registerUserRequestDTO')
const loginUserRequestDTO = require('../dtos/requests/loginUserRequestDTO')
const userResponseDTO = require('../dtos/responses/userResponseDTO')
const registerUserValidator = require('../validators/registerUserValidator')
const loginUserValidator = require('../validators/loginUserValidator')
const authService = require('../domain/services/auth.service')
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

const registerUser = catchExceptions(async (req, res) => {
  const registerUserRequest = registerUserRequestDTO(req.body)

  registerUserValidator(registerUserRequest)

  const user = await authService.registerUser(registerUserRequest)

  eventEmitter.emit('userHasRegistered', user)

  res.status(200).json(
    globalResponseDTO({
      message: `The email: ${registerUserRequest.email} has successfully registered.`,
      data: userResponseDTO(user)
    })
  )
})

const logUserIn = catchExceptions(async (req, res, next) => {
  const loginUserRequest = loginUserRequestDTO(req.body)

  loginUserValidator(loginUserRequest)

  const loggedInUser = await authService.loginUser(loginUserRequest, req)

  res.status(200).json(
    globalResponseDTO({
      message: `The user has successfully logged in.`,
      data: userResponseDTO(loggedInUser)
    })
  )
})

const logUserOut = catchExceptions((req, res) => {
  req.logout()

  res.status(200).json(
    globalResponseDTO({
      message: `The user has successfully logged out.`
    })
  )
})

const getAuthUser = catchExceptions((req, res) => {
  const user = req.user

  res.status(200).json(
    globalResponseDTO({
      message: `The currently authenticated user's information.`,
      data: userResponseDTO(user)
    })
  )
})

module.exports = {
  registerUser,
  logUserIn,
  logUserOut,
  getAuthUser
}
