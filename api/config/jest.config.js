module.exports = {
  rootDir: '../',
  testPathIgnorePatterns: [],
  testMatch: [
    /***********************/
    /***** Domain **********/
    /***********************/

    // Repositories
    '<rootDir>/src/domain/repositories/__tests__/**.test.js',
    // '<rootDir>/src/domain/repositories/__tests__/book.repository.test.js',
    // '<rootDir>/src/domain/repositories/__tests__/user.repository.test.js',

    // Services
    '<rootDir>/src/domain/services/__tests__/**.test.js',
    // '<rootDir>/src/domain/services/__tests__/book.service.test.js',
    // '<rootDir>/src/domain/services/__tests__/auth.service.test.js',


    /*******************************************************************************/
    /*******************************************************************************/
    /*******************************************************************************/


    /*********************/
    /***** HTTP **********/
    /*********************/

    // Middleware
    '<rootDir>/src/middleware/__tests__/**.test.js',
    //'<rootDir>/src/middleware/__tests__/auth.middleware.test.js',
    //'<rootDir>/src/middleware/__tests__/bookPermission.middleware.test.js',

    // Requests
    '<rootDir>/src/requests/__tests__/**.test.js',
    // '<rootDir>/src/requests/__tests__/createBookRequestDTO.test.js',
    // '<rootDir>/src/requests/__tests__/loginUserRequestDTO.test.js',
    // '<rootDir>/src/requests/__tests__/registerUserRequestDTO.test.js',
    // '<rootDir>/src/requests/__tests__/updateBookRequestDTO.test.js',

    // Responses
    '<rootDir>/src/responses/__tests__/**.test.js',
    // '<rootDir>/src/responses/__tests__/bookResponseDTO.test.js',
    // '<rootDir>/src/responses/__tests__/booksResponseDTO.test.js',
    // '<rootDir>/src/responses/__tests__/globalResponseDTO.test.js',
    // '<rootDir>/src/responses/__tests__/userResponseDTO.test.js',

    // Validators
    '<rootDir>/src/validators/__tests__/**.test.js',
    // '<rootDir>/src/validators/__tests__/createBookValidator.test.js',
    // '<rootDir>/src/validators/__tests__/loginUserValidator.test.js',
    // '<rootDir>/src/validators/__tests__/registerUserValidator.test.js',

    // Events
    '<rootDir>/src/events/__tests__/**.test.js',
    // '<rootDir>/src/events/__tests__/userHasRegisteredEvent.test.js',
    // '<rootDir>/src/events/__tests__/userHasLoggedInEvent.test.js',


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
    '<rootDir>/src/utils/__tests__/ApiException.test.js',
  ],
  testTimeout: 3000,
  testEnvironment: 'node'
}
