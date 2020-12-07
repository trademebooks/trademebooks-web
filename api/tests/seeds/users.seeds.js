const User = require('../../domain/models/user.model')
const userFactory = require('../factories/userFactory')

const users = []

const customUsers = [
  {
    _id: '5e11e9d8eded1d23742c1c6a',
    first_name: 'Yi Chen',
    last_name: 'Zhu',
    username: 'yichen',
    email: 'yichenzhu1337@gmail.com',
    password: 'yichen',
    phone_number: '4162932500',
    google_id: '110603409234402153901'
  },
  {
    _id: '5e11e9d8eded1d23742c1c6b',
    first_name: 'Cedric',
    last_name: 'Mosdell',
    username: 'cedric',
    email: 'cedric@cedric.com',
    password: 'cedric',
    phone_number: '4162932502'
  },
  {
    _id: '5e11e9d8eded1d23742c1c6c',
    first_name: 'Wesley',
    last_name: 'Michaels',
    username: 'wes123',
    email: 'shadowkinhawk@hotmail.com',
    password: 'wes123'
  }
]

module.exports = async (numberOfUsers) => {
  console.log('users.seeds...')

  for (const customUser of customUsers) {
    const newUser = await new User(customUser).save()

    users.push(newUser)
  }

  const fakeUsers = await userFactory(numberOfUsers)

  return [...users, ...fakeUsers]
}
