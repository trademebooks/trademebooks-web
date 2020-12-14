const userRepository = require('../../repositories/user.repository')
const bookstoreRepository = require('../../repositories/bookstore.repository')
const accountRepository = require('../../repositories/account.repository')

const authService = require('../auth.service')

beforeEach(() => {
  userRepository.createUser = jest.fn((user) => {
    return {}
  })
  userRepository.findUserByEmailAndPassword = jest.fn((user) => {
    return {}
  })

  bookstoreRepository.createByUserId = jest.fn((userId) => {
    return {}
  })

  accountRepository.createByUserId = jest.fn((userId) => {
    return {}
  })
})

describe('Auth Service', () => {
  test('registerUser', async () => {
    const testUser = {
      first_name: 'john',
      last_name: 'doe',
      email: 'john@john.com',
      password: 'password',
      phone_number: '4168561989'
    }

    await authService.registerUser(testUser)

    expect(userRepository.createUser).toHaveBeenCalledWith(testUser)
    expect(userRepository.createUser).toHaveBeenCalledTimes(1)
    expect(userRepository.createUser).toHaveReturnedWith({})
  })

  test('loginUser', async () => {
    const testUser = {
      email: 'john@john.com',
      password: 'password'
    }

    await authService.loginUser(
      testUser,
      { login: jest.fn((param) => {}) },
      {},
      () => {}
    )

    expect(userRepository.findUserByEmailAndPassword).toHaveBeenCalledWith(
      testUser
    )
    expect(userRepository.findUserByEmailAndPassword).toHaveBeenCalledTimes(1)
    expect(userRepository.findUserByEmailAndPassword).toHaveReturnedWith({})
  })
})
