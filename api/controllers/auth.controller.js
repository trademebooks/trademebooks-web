const globalResponseDto = require('../dtos/responses/globalResponseDto')
const catchExceptions = require('../utils/catchExceptions')
const registerUserRequestDto = require('../dtos/requests/registerUserRequestDto')
const loginUserRequestDto = require('../dtos/requests/loginUserRequestDto')
const userDto = require('../dtos/utils/userDto')
const registerUserValidator = require('../validators/registerUserValidator')
const loginUserValidator = require('../validators/loginUserValidator')
const authService = require('../domain/services/auth.service')
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

const registerUser = catchExceptions(async (req, res) => {
  const registerUserRequest = registerUserRequestDto(req.body)

  registerUserValidator(registerUserRequest)

  const user = await authService.registerUser(registerUserRequest)

  eventEmitter.emit('userHasRegistered', user)

  res.status(200).json(
    globalResponseDto({
      message: `The email: ${registerUserRequest.email} has successfully registered.`,
      data: user
    })
  )
})

const logUserIn = catchExceptions(async (req, res, next) => {
  const loginUserRequest = loginUserRequestDto(req.body)

  loginUserValidator(loginUserRequest)

  const loggedInUser = await authService.loginUser(
    loginUserRequest,
    req,
    res,
    req
  )

  res.status(200).json(
    globalResponseDto({
      message: `The user has successfully logged in.`,
      data: userDto(loggedInUser)
    })
  )
})

const logUserOut = catchExceptions((req, res) => {
  req.logout()

  res.status(200).json(
    globalResponseDto({
      message: `The user has successfully logged out.`
    })
  )
})

const getAuthUser = catchExceptions((req, res) => {
  const user = req.user ? userDto(req.user) : {}

  res.status(200).json(
    globalResponseDto({
      message: `The currently authenticated user's information.`,
      data: user
    })
  )
})

module.exports = {
  registerUser,
  logUserIn,
  logUserOut,
  getAuthUser
}
