const userRepository = require('../../repositories/user.repository')
const authService = require('../auth.service')

beforeAll(async () => {})

beforeEach(() => {
  userRepository.createUser = jest.fn((data) => {
    return {}
  })
})

afterEach(async () => {})

afterAll(async () => {})

describe('Test Suite: Auth Service', () => {
  it('Auth Service - registerUser', async () => {
    let testUser = {
      first_name: 'john',
      last_name: 'doe',
      email: 'john@john.com',
      password: 'password',
      phone_number: '4168561988'
    }
    const user = await authService.registerUser(testUser)

    expect(userRepository.createUser).toHaveBeenCalledWith(testUser)
    expect(userRepository.createUser).toHaveBeenCalledTimes(1)
    expect(userRepository.createUser).toHaveReturnedWith({})
  })

  xit('Auth Service - loginUser', async () => {
    const user = await authService.loginUser({})

    console.log(user)
  })

  xit('Auth Service - logoutUser', async () => {
    const user = await authService.logoutUser()

    console.log(user)
  })

  xit('Auth Service - getCurrentUser', async () => {
    const user = await authService.getCurrentUser()

    console.log(user)
  })
})
