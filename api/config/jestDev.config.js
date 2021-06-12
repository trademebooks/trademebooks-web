module.exports = {
  rootDir: '../',
  coverageDirectory: '<rootDir>/../coverage/',
  collectCoverage: true,
  testPathIgnorePatterns: [],
  testMatch: [
    // '<rootDir>/domain/repositories/__tests__/message.repository.test.js'

    // Services
    // '<rootDir>/domain/services/__tests__/message.service.test.js',
    
    '<rootDir>/tests/api/message/update*.test.js',
    
  ],
  testTimeout: 30000,
  testEnvironment: 'node'
}
