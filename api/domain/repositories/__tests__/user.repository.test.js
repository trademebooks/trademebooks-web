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

    expect(user.first_name).toEqual(testUser.first_name)
    expect(user.password).not.toEqual(testUser.password)
    expect(user.password).toHaveLength(60)
  })

  test('user Repository - findUserByEmailAndPassword', async () => {
    const user = await userRepository.createUser(testUser)
    const foundUser = await userRepository.findUserByEmailAndPassword(testUser)
    
    expect(user.first_name).toEqual(foundUser.first_name)
  })
})
