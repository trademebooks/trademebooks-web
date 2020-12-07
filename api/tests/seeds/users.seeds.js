const faker = require('faker')

const User = require('../../domain/models/user.model')
const Account = require('../../domain/models/account.model')
const Bookstore = require('../../domain/models/bookstore.model')

const userFactory = require('../factories/userFactory')

const users = []

const customUsers = [
  {
    user: {
      _id: '5e11e9d8eded1d23742c1c6a',
      first_name: 'Yi Chen',
      last_name: 'Zhu',
      username: 'yichen',
      email: 'yichenzhu1337@gmail.com',
      password: 'yichen',
      phone_number: '4162932500',
      google_id: '110603409234402153901'
    },
    account: {
      userId: '5e11e9d8eded1d23742c1c6a',
      receiveEmail: true,
      receiveSms: true,
      school: faker.address.streetName(),
      location: faker.address.county()
    },
    bookstore: {
      userId: '5e11e9d8eded1d23742c1c6a',
      description: `Welcome to yichen's awesome store!`
    }
  },
  {
    user: {
      _id: '5e11e9d8eded1d23742c1c6b',
      first_name: 'Cedric',
      last_name: 'Mosdell',
      username: 'cedric',
      email: 'cedric@cedric.com',
      password: 'cedric',
      phone_number: '4162932502'
    },
    account: {
      userId: '5e11e9d8eded1d23742c1c6b',
      receiveEmail: true,
      receiveSms: true,
      school: faker.address.streetName(),
      location: faker.address.county()
    },
    bookstore: {
      userId: '5e11e9d8eded1d23742c1c6b',
      description: `Welcome to cedric's awesome store!`
    }
  },
  {
    user: {
      _id: '5e11e9d8eded1d23742c1c6c',
      first_name: 'Wesley',
      last_name: 'Michaels',
      username: 'wes123',
      email: 'shadowkinhawk@hotmail.com',
      password: 'wes123',
      phone_number: '4162932502'
    },
    account: {
      userId: '5e11e9d8eded1d23742c1c6c',
      receiveEmail: true,
      receiveSms: true,
      school: faker.address.streetName(),
      location: faker.address.county()
    },
    bookstore: {
      userId: '5e11e9d8eded1d23742c1c6c',
      description: `Welcome to wes123's awesome store!`
    }
  }
]

module.exports = async (numberOfUsers) => {
  console.log('users.seeds...')

  for (const customUser of customUsers) {
    const user = await new User(customUser.user).save()
    const account = await new Account(customUser.account).save()
    const bookstore = await new Bookstore(customUser.bookstore).save()

    const newUser = {
      user,
      account,
      bookstore
    }

    users.push(newUser)
  }

  const fakeUsers = await userFactory(numberOfUsers)

  return [...users, ...fakeUsers]
}
