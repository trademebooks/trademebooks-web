const createBookValidator = require('../createBookValidator');

const ApiException = require('../../utils/ApiException');

describe('Test Suite: loginUserValidator.test.js', () => {

  xit('The happy path - everything works', () => {
    // 1. Arrange
    const data = {
      title: 'Harry Potter and the Awesome Book of Nothing',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      price: 100,
      author: 'J.K. Rowling',
      datePublished: Date.now()
    };

    // 2. Act
    let validator = createBookValidator(data);
    
    // 3. Assert
    expect(Object.keys(validator.errors.errors).length).toEqual(0);
  });
  
  xit('The sad path - missing author field', () => {
    // 1. Arrange
    const data = {
      title: 'Harry Potter and the Awesome Book of Nothing',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      price: 100,
      datePublished: Date.now()
    };

    // 2. Act + 3. Assert
    expect(() => {
      let validator = createBookValidator(data);
    }).toThrow(ApiException);
  });

});