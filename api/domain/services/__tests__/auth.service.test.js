const userRepository = require('../../repositories/user.repository')
const bookstoreRepository = require('../../repositories/bookstore.repository')
const accountRepository = require('../../repositories/account.repository')

const authService = require('../auth.service')

beforeEach(() => {
  userRepository.createUser = jest.fn((user) => {
    return {}
  })

  bookstoreRepository.createByUserId = jest.fn((userId) => {
    return {}
  })

  accountRepository.createByUserId = jest.fn((userId) => {
    return {}
  })
})

describe('Test Suite: Auth Service', () => {
  test('Auth Service - registerUser', async () => {
    const testUser = {
      first_name: 'john',
      last_name: 'doe',
      email: 'john@john.com',
      password: 'password',
      phone_number: '4168561988'
    }

    await authService.registerUser(testUser)

    expect(userRepository.createUser).toHaveBeenCalledWith(testUser)
    expect(userRepository.createUser).toHaveBeenCalledTimes(1)
    expect(userRepository.createUser).toHaveReturnedWith({})
  })
})
