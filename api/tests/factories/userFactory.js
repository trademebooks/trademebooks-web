const faker = require('faker')

const User = require('../../domain/models/user.model')
const Account = require('../../domain/models/account.model')
const Bookstore = require('../../domain/models/bookstore.model')

const userfactory = async (numberOfSeeds) => {
  const users = []

  for (let i = 1; i <= numberOfSeeds; i++) {
    // User
    const bookFields = {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      phone_number: faker.phone.phoneNumber()
    }
    const user = await new User(bookFields).save()

    // Account
    const accountFields = {
      userId: user._id,
      receiveEmail: true,
      receiveSms: true,
      school: faker.address.streetName(),
      location: faker.address.county()
    }
    const account = await new Account(accountFields).save()

    // Bookstore
    const bookstoreFields = {
      userId: user._id,
      description: `Welcome to ${user.username}'s awesome store!`
    }
    const bookstore = await new Bookstore(bookstoreFields).save()

    user.account = account
    user.bookstore = bookstore

    users.push(user)
  }

  return users
}

module.exports = userfactory
