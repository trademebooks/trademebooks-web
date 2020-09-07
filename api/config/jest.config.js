module.exports = {
  rootDir: '../',
  testPathIgnorePatterns: [],
  testMatch: [
    /***********************/
    /***** Domain **********/
    /***********************/

    // Repositories
    '<rootDir>/domain/repositories/__tests__/**.test.js',
    // '<rootDir>/domain/repositories/__tests__/book.repository.test.js',
    // '<rootDir>/domain/repositories/__tests__/user.repository.test.js',

    // Services
    '<rootDir>/domain/services/__tests__/**.test.js',
    // '<rootDir>/domain/services/__tests__/book.service.test.js',
    // '<rootDir>/domain/services/__tests__/auth.service.test.js',


    /*******************************************************************************/
    /*******************************************************************************/
    /*******************************************************************************/


    /*********************/
    /***** HTTP **********/
    /*********************/

    // Middleware
    '<rootDir>/middleware/__tests__/**.test.js',
    //'<rootDir>/middleware/__tests__/auth.middleware.test.js',
    //'<rootDir>/middleware/__tests__/bookPermission.middleware.test.js',

    // Requests
    '<rootDir>/requests/__tests__/**.test.js',
    // '<rootDir>/requests/__tests__/createBookRequestDTO.test.js',
    // '<rootDir>/requests/__tests__/loginUserRequestDTO.test.js',
    // '<rootDir>/requests/__tests__/registerUserRequestDTO.test.js',
    // '<rootDir>/requests/__tests__/updateBookRequestDTO.test.js',

    // Responses
    '<rootDir>/responses/__tests__/**.test.js',
    // '<rootDir>/responses/__tests__/bookResponseDTO.test.js',
    // '<rootDir>/responses/__tests__/booksResponseDTO.test.js',
    // '<rootDir>/responses/__tests__/globalResponseDTO.test.js',
    // '<rootDir>/responses/__tests__/userResponseDTO.test.js',

    // Validators
    '<rootDir>/validators/__tests__/**.test.js',
    // '<rootDir>/validators/__tests__/createBookValidator.test.js',
    // '<rootDir>/validators/__tests__/loginUserValidator.test.js',
    // '<rootDir>/validators/__tests__/registerUserValidator.test.js',

    // Events
    '<rootDir>/events/__tests__/**.test.js',
    // '<rootDir>/events/__tests__/userHasRegisteredEvent.test.js',
    // '<rootDir>/events/__tests__/userHasLoggedInEvent.test.js',


    /*******************************************************************************/
    /*******************************************************************************/
    /*******************************************************************************/


    /*********************************/
    /***** API Integration Tests *****/
    /*********************************/

    // App
    '<rootDir>/tests/api/app/**.test.js',

    // Auth
    '<rootDir>/tests/api/auth/**.test.js',
    // '<rootDir>/tests/api/auth/authUser.test.js',
    // '<rootDir>/tests/api/auth/login.test.js',
    // '<rootDir>/tests/api/auth/logout.test.js',
    // '<rootDir>/tests/api/auth/register.test.js',

    // Book
    '<rootDir>/tests/api/book/**.test.js',
    // '<rootDir>/tests/api/book/create.test.js',
    // '<rootDir>/tests/api/book/delete.test.js',
    // '<rootDir>/tests/api/book/get.test.js',
    // '<rootDir>/tests/api/book/update.test.js',


    /*******************************************************************************/
    /*******************************************************************************/
    /*******************************************************************************/


    // Others
    '<rootDir>/utils/__tests__/ApiException.test.js',
  ],
  testTimeout: 3000,
  testEnvironment: 'node'
}
