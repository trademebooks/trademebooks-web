const faker = require('faker')
const db = require('../utils/db')
require('../domain/models/user.model')

const numberOfSeeds = 10

const users = [
  {
    _id: '5e11e9d8eded1d23742c1c6d',
    first_name: 'Yi Chen',
    last_name: 'Zhu',
    username: 'yichen',
    email: 'yichenzhu1337@gmail.com',
    password: 'yichen',
    phone_number: '4162932500',
    nick: 'yichen-nickname',
    socket: '5e11e9d8eded1d23742c1c6d'
  },
  {
    _id: '5e11e9d8eded1d23742c1c6e',
    first_name: 'Wesley',
    last_name: 'Michaels',
    username: 'wes123',
    email: 'shadowkinhawk@hotmail.com',
    password: 'wes123',
    phone_number: '4162932501'
  },
  {
    _id: '5e11e9d8eded1d23742c1c6f',
    first_name: 'Cedric',
    last_name: 'Mosdell',
    username: 'cedric',
    email: 'cedric@cedric.com',
    password: 'cedric',
    phone_number: '4162932502',
    nick: 'cedric-nickname',
    socket: '5e11e9d8eded1d23742c1c6d'
  }
]

module.exports = async () => {
  const dbConnection = await db()
  const User = dbConnection.model('user')

  await User.deleteMany({})

  for (const user of users) {
    await new User(user).save()
  }

  for (let i = 1; i <= numberOfSeeds; i++) {
    const user = {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      phone_number: faker.phone.phoneNumber()
    }

    const userReturnValue = await new User(user).save()

    users.push(userReturnValue)
  }
  await dbConnection.disconnect()

  return users
}
