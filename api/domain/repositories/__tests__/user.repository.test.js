const db = require('../../../utils/db')
let dbConnection
const dbTestUtils = require('../../../tests/utils')

const userRepository = require('../user.repository')
const User = require('../../models/user.model')

beforeAll(async () => {
  dbConnection = await db()
})

beforeEach(async () => {
  await dbTestUtils.setUpDatabase()
})

afterEach(async () => {
  await dbTestUtils.clearDatabase()
})

afterAll(async () => {
  await dbConnection.disconnect()
})

describe('Test Suite: User Repository', () => {
  const testUser = {
    first_name: 'Yichen',
    last_name: 'Zhu',
    email: 'yichen@yichen.com',
    password: 'password123',
    phone_number: '1234567890'
  }

  test('User Repository - createUser', async () => {
    const user = await userRepository.createUser(testUser)

    const expected = 'Yichen'
    const actual = user.first_name

    expect(actual).toEqual(expected)
  })

  test('user Repository - findUserByEmailAndPassword', async () => {
    // 1. Arrange
    const user = await userRepository.createUser(testUser)

    // 2. Act
    const foundUser = await userRepository.findUserByEmailAndPassword(user)

    // 3. Assert
    const expected = 'Yichen'
    const actual = foundUser.first_name
    expect(actual).toEqual(expected)
  })
})
