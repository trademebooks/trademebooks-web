module.exports = {
  rootDir: '../',
  testPathIgnorePatterns: [],
  testMatch: [
    /***********************/
    /***** Domain **********/
    /***********************/

    // Repositories
    // '<rootDir>/domain/repositories/__tests__/**.test.js',
    '<rootDir>/domain/repositories/__tests__/book.repository.test.js',
    // '<rootDir>/domain/repositories/__tests__/bookstore.repository.test.js',
    '<rootDir>/domain/repositories/__tests__/user.repository.test.js',
    // '<rootDir>/domain/repositories/__tests__/password.repository.test.js',
    // '<rootDir>/domain/repositories/__tests__/account.repository.test.js',
    // '<rootDir>/domain/repositories/__tests__/message.repository.test.js',

    // Services
    // '<rootDir>/domain/services/__tests__/**.test.js',
    '<rootDir>/domain/services/__tests__/book.service.test.js',
    // '<rootDir>/domain/services/__tests__/bookstore.service.test.js',
    '<rootDir>/domain/services/__tests__/auth.service.test.js',
    // '<rootDir>/domain/services/__tests__/account.service.test.js',
    // '<rootDir>/domain/services/__tests__/password.service.test.js',
    // '<rootDir>/domain/services/__tests__/message.service.test.js',

    // '<rootDir>/domain/services/mailer/__tests__/mailer.test.js',
    // '<rootDir>/domain/services/mailer/emailTemplates/__tests__/*.test.js',

    /*******************************************************************************/
    /*******************************************************************************/
    /*******************************************************************************/

    /*********************/
    /***** HTTP **********/
    /*********************/

    // Middleware
    // '<rootDir>/middleware/__tests__/**.test.js',
    //'<rootDir>/middleware/__tests__/auth.middleware.test.js',
    //'<rootDir>/middleware/__tests__/bookPermission.middleware.test.js',

    // Requests
    // '<rootDir>/dtos/requests/__tests__/**.test.js',
    '<rootDir>/dtos/requests/__tests__/registerUserRequestDTO.test.js',
    // '<rootDir>/dtos/requests/__tests__/createBookRequestDTO.test.js',
    // '<rootDir>/dtos/requests/__tests__/loginUserRequestDTO.test.js',
    // '<rootDir>/dtos/requests/__tests__/updateBookRequestDTO.test.js',

    // Responses
    // '<rootDir>/dtos/responses/__tests__/**.test.js',
    // '<rootDir>/dtos/responses/__tests__/booksResponseDTO.test.js',
    // '<rootDir>/dtos/responses/__tests__/globalResponseDTO.test.js',
    '<rootDir>/dtos/utils/__tests__/userDto.test.js',
    '<rootDir>/dtos/utils/__tests__/bookDto.test.js',

    // Validators
    // '<rootDir>/validators/__tests__/**.test.js',
    '<rootDir>/validators/__tests__/createBookValidator.test.js',
    '<rootDir>/validators/__tests__/loginUserValidator.test.js',
    '<rootDir>/validators/__tests__/registerUserValidator.test.js',

    // Events
    // '<rootDir>/events/__tests__/**.test.js',
    // '<rootDir>/events/__tests__/userHasRegisteredEvent.test.js',
    // '<rootDir>/events/__tests__/userHasLoggedInEvent.test.js',

    /*******************************************************************************/
    /*******************************************************************************/
    /*******************************************************************************/

    /*********************************/
    /***** API Integration Tests *****/
    /*********************************/

    // Account
    // '<rootDir>/tests/integration/api/account/**.test.js',
    // '<rootDir>/tests/integration/api/account/get.test.js',
    // '<rootDir>/tests/integration/api/account/update.test.js',
    // '<rootDir>/tests/integration/api/account/updateAuth.test.js',

    // Auth
    // '<rootDir>/tests//api/auth/**.test.js',
    '<rootDir>/tests/api/auth/register.test.js',
    '<rootDir>/tests/api/auth/login.test.js',

    // Book
    // '<rootDir>/tests/integration/api/book/**.test.js',
    '<rootDir>/tests/api/book/getAll.test.js',
    '<rootDir>/tests/api/book/get.test.js',
    // '<rootDir>/tests/integration/api/book/create.test.js',
    // '<rootDir>/tests/integration/api/book/delete.test.js',
    // '<rootDir>/tests/integration/api/book/update.test.js',

    // Bookstore
    // '<rootDir>/tests/integration/api/bookstore/**.test.js',
    // '<rootDir>/tests/integration/api/bookstore/get.test.js',
    // '<rootDir>/tests/integration/api/bookstore/getAuth.test.js',

    // Message
    // '<rootDir>/tests/integration/api/bookstore/**.test.js',
    // '<rootDir>/tests/integration/api/bookstore/getAllConversations.test.js',
    // '<rootDir>/tests/integration/api/bookstore/getAllMessagesInRoom.test.js',
    // '<rootDir>/tests/integration/api/bookstore/send.test.js',

    // Utils
    // '<rootDir>/tests/integration/api/utils/**.test.js',
    '<rootDir>/tests/api/utils/health.test.js',
    // '<rootDir>/tests/integration/api/utils/contact.test.js',

    /*******************************************************************************/
    /*******************************************************************************/
    /*******************************************************************************/

    /*********************************/
    /***** Others Tests **************/
    /*********************************/

    '<rootDir>/utils/__tests__/ApiGeneralError.test.js'
  ],

  // testMatch: [
  //       '<rootDir>/dtos/requests/__tests__/createBookRequestDTO.test.js',
  // ],
  testTimeout: 30000,
  testEnvironment: 'node'
}
