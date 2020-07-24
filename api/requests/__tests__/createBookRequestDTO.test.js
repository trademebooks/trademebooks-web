const registerUserRequestDTO = require('../registerUserRequestDTO');
const ApiException = require('../../utils/ApiException');

describe('Test Suite: Request', () => {

  it('Correct request 1 - empty parameters', () => {
    // 1. Arrange
    let apiInputRequest = {}

    // 2. Act
    // 3. Assert
    expect(() => {
      let registerUserRequest = registerUserRequestDTO(apiInputRequest);
    }).toThrow(Error);

  });

  it('Correct request 2 - extra useless parameters', () => {
    // 1. Arrange
    let apiInputRequest = {
      email: 'undefined',
      password: 'undefined',
      extraParam1: null,
      extraParam2: 'whatzup',
      body: 'John Doe is cool'
    }

    // 2. Act
    // 3. Assert
    expect(() => {
      let registerUserRequest = registerUserRequestDTO(apiInputRequest);
    }).toThrow(Error);

  });

  it('Correct request 3 - happy path', () => {
    // 1. Arrange
    let apiInputRequest = {
      first_name: 'Yichen',
      last_name: 'Zhu',
      email: 'yichen@yichen.com',
      password: 'yichen-and-his-awesome-password',
      password_confirmation: 'yichen-and-his-awesome-password',
      phone_number: '1234567890'
    }

    // 2. Act
    let registerUserRequest = registerUserRequestDTO(apiInputRequest);

    // 3. Assert
    expect(registerUserRequest).toEqual({
      first_name: 'Yichen',
      last_name: 'Zhu',
      email: 'yichen@yichen.com',
      password: 'yichen-and-his-awesome-password',
      password_confirmation: 'yichen-and-his-awesome-password',
      phone_number: '1234567890'
    });
  });

  it('Correct request 4 - we input in the wrong fields, some random string', () => {
    // 1. Arrange
    let apiInputRequest = { message: 'this is awesome!' };

    // 2. + 3. Act and Assert
    expect(() => {
      let registerUserRequest = registerUserRequestDTO(apiInputRequest);
    }).toThrow(ApiException);
  });
});