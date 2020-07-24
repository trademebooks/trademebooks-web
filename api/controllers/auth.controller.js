const globalResponseDTO = require('../responses/globalResponseDTO');
const registerUserRequestDTO = require('../requests/registerUserRequestDTO');
const loginUserRequestDTO = require('../requests/loginUserRequestDTO');
const userResponseDTO = require('../responses/userResponseDTO');

const registerUserValidator = require('../validators/registerUserValidator');
const loginUserValidator = require('../validators/loginUserValidator');

const authService = require('../domain/services/auth.service');

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const catchExceptions = require('../utils/catchExceptions');

/**
 * Inserts the user into the database and fires off an email notification to that user's email if successful.
 */
const registerUser = catchExceptions(async (req, res, next) => {
  // 1. POST /api/v1/auth/register /

  // 2. middleware: none /

  // 3. request /
  const registerUserRequest = registerUserRequestDTO(req.body);

  // 4. validation /
  const registerUserValidation = registerUserValidator(registerUserRequest);

  // 5. business logic /
  let user = await authService.registerUser(registerUserRequest);

  // 6. event /
  eventEmitter.emit('userHasRegistered', user);

  // 7. response /
  return res.json(globalResponseDTO(
    status = "success",
    code = 200,
    message = `The email: ${registerUserRequest.email} has successfully registered.`,
    data = userResponseDTO(user),
    errors = null
  ));
});

/**
 * Logs the user in and set a session for it.
 */
const logUserIn = catchExceptions(async (req, res, next) => {
  // 1. POST /api/v1/auth/login /

  // 2. middleware: none /

  // 3. request /
  const loginUserRequest = loginUserRequestDTO(req.body);

  // 4. validation /
  const loginUserValidation = loginUserValidator(loginUserRequest);

  // 5. business logic
  // if the user's email and password match in our database then set the current session to that user
  let loggedInUser = await authService.loginUser(loginUserRequest);
  if (loggedInUser) {
    req.session.user = loggedInUser;
  }
  else {
    // if the user does not login successfully
    return res.status(400).json(globalResponseDTO(
      status = 'failed',
      code = 400,
      message = `Invalid credentials, please try a different email and password combination.`,
      data = null,
      errors = [
        `Invalid credentials, please try a different email and password combination.`
      ]
    ));
  }

  // 6. event
  // eventEmitter.emit('userHasLoggedIn', user);

  // 7. response
  let userDTO = userResponseDTO(loggedInUser);
  console.log(userDTO)
  return res.status(200).json(globalResponseDTO(
    status = 'success',
    code = 200,
    message = `The user has successfully logged in.`,
    userDTO,
    errors = null
  ));
});

/**
 * Logs the currently authenticated user out of the current session.
 */
const logUserOut = catchExceptions((req, res, next) => {
  // 1. route: GET /api/v1/auth/logout

  // 2. middleware: none

  // 3. request: none

  // 4. validation: none

  // 5. business logic
  req.session.destroy();

  // 6. event

  // 7. response
  return res.json(globalResponseDTO(
    status = "success",
    code = 200,
    message = `The user has successfully logged out.`,
    data = {},
    errors = null
  ));
});

/**
 * Gets the currently authenticated user in the current session.
 */
const getAuthUser = catchExceptions((req, res, next) => {
  // 1. route: GET /api/v1/auth/user

  // 2. middleware: none

  // 3. request: none

  // 4. validation: none

  // 5. business logic
  let user = req.session.user;

  // 6. event: none

  // 7. response
  return res.status(200).json(globalResponseDTO(
    status = 'success',
    code = 200,
    message = `The currently authenticated user's information.`,
    data = userResponseDTO(user),
    errors = null
  ));
});

module.exports = {
  registerUser,
  logUserIn,
  logUserOut,
  getAuthUser
};